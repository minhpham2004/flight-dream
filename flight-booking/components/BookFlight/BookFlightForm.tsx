import { Box, Grid, Typography, Button, Menu, MenuItem, IconButton, TextField, Slider } from "@mui/material";
import { ThisAirplane, ArrowDownKey } from "../../layout/customIcon/CustomIcon"
import { FlightData } from '../../data/data_bookflight';
import { NewpropsData } from './bookFlightType';
import { FindResult, ItemContainer, FormHead, GridContainer, NewRoot } from './StyleBookFlight';
import React, { useState } from 'react';
export default function BookFlight({ from, to, timeStart, timeEnd, handleOnclick }: NewpropsData): JSX.Element {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorE2, setAnchorE2] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const sort_open = Boolean(anchorE2);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [value, setValue] = React.useState<number[]>([20, 37]);

  function valuetext(value: number) {
    return `${value}°C`;
  }
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  
  const sortBox = (
    <Box style={{ display: "flex", flexDirection: "row" }}>
      <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography style={{ color: 'black' }}>Sort by</Typography>
        <IconButton onClick={handleClick}>
          <ArrowDownKey style={{ color: "#4669CD" }} fontSize={"large"} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          id={"Item1"}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem data-sort_1='FlightId_3' onClick={handleClose}>Flight ID asc</MenuItem>
          <MenuItem data-sort_1='FlightId_2' onClick={handleClose}>Flight ID desc</MenuItem>
          <MenuItem data-sort_1='price_desc' onClick={handleClose} >Date asc</MenuItem>
          <MenuItem data-sort_1='price_asc' onClick={handleClose}>Date desc</MenuItem>
        </Menu>
      </Box>
      <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography style={{ color: 'black' }}>Filter by</Typography>
        <IconButton onClick={handleClick2}>
          <ArrowDownKey style={{ color: "#4669CD" }} fontSize={"large"} />
        </IconButton>
        <Menu
          anchorEl={anchorE2}
          open={sort_open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography style={{ fontSize: '20px', color: 'black' }}>Price Range</Typography>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              style={{ paddingTop: '60px' }}
            />
            <TextField id="filled-basic" label="Price" variant="filled"
              style={{ paddingTop: '30px' }} />
            <TextField id="filled-basic" label="Price" variant="filled"
              style={{ paddingTop: '30px' }} />
            <TextField id="filled-basic" label="Price" variant="filled"
              style={{ paddingTop: '30px' }} />
            <Button onClick={handleClose2}>Search</Button>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );



  const displayNumberOfFlight = () => {
    if (FlightData.length === 1) {
      return <Typography className={"myspan"}>{DataDisplay.length} result to display</Typography>
    }
    else if (FlightData.length >= 2) {
      return <Typography className={"myspan"}>{DataDisplay.length} results to display</Typography>
    }
    return <Typography className={"myspan"}>{DataDisplay.length} is found</Typography>
  };


  const DataDisplay = FlightData.filter((data) =>
    data.From.name === from && data.To.name === to
    || timeStart <= data.DateFlight.DateGo.Date
    || timeEnd <= data.DateFlight.DateGo.Date
  ).map((data, index) => (
    <form key={index}>
      <ItemContainer>
        <Grid container className="FlightDetail">
          <Grid className="FlightData">
            <Grid className="TimeGo">
              <Grid className="FlightLocaton">
                <Typography className="Location" style={{
                  fontFamily: 'Inter',
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#1A1D1F",
                  lineHeight: "150%",
                }}>{data.From.name} - {data.To.name}</Typography>
                <span className="DateFlight" style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '13px',
                  lineHeight: '150%',
                  paddingBottom: '10px',
                  paddingTop: '8px',
                  color: '#6F767E'
                }}>
                  {data.DateFlight.DateGo.Date}</span>
                <Grid className="FlightTime">
                  <Grid className="TimeStartEnd">
                    <Typography className="Time">{data.DateFlight.DateGo.TimeFlight}</Typography>
                    <span>{data.From.short}</span>
                  </Grid>
                  <ThisAirplane />
                  <Grid className="TimeStartEnd" style={{ paddingRight: "0px", paddingLeft: "64px" }}>
                    <Typography className="Time">{data.DateFlight.DateGo.EstimateLanding}</Typography>
                    <span>{data.To.short}</span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid className="TimeGo">
              <Grid className="FlightLocation">
                <Typography className="Location">{data.From.name} - {data.To.name}</Typography>
                <span className="DateFlight">{data.DateFlight.DateBack.Date}</span>
                <Grid className="FlightTime">
                  <Grid className="TimeStartEnd">
                    <Typography className="Time">{data.DateFlight.DateBack.TimeFlight}</Typography>
                    <span>{data.From.short}</span>
                  </Grid>
                  <ThisAirplane />
                  <Grid className="TimeStartEnd" style={{ paddingRight: "0px", paddingLeft: "64px" }}>
                    <Typography className="Time">{data.DateFlight.DateBack.EstimateLanding}</Typography>
                    <span>{data.To.short}</span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="Idspacing">
            <Typography className="StyleFlightID">{data.FlightID}</Typography>
            <Typography className="StyleFlightID" style={{ marginBottom: "20px" }}>{data.FlightID}</Typography>
          </Grid>
          <Grid className="FlightPurchaseGrid">
            <Box className={"PurchaseBox"}>
              <span>{data.price} AUD</span>
              <Button className={"PurchaseButton"} value={data.FlightID} onClick={() => handleOnclick({
                from: data.From.name,
                to: data.To.name,
                shortFrom: data.From.short,
                shortTo: data.To.short,
                FlightId: data.FlightID,
                DepartTime: data.DateFlight.DateGo.TimeFlight,
                DepartDate: data.DateFlight.DateGo.Date,
                LaningTIme: data.DateFlight.DateGo.EstimateLanding,
                DepartTimeBack: data.DateFlight.DateBack.TimeFlight,
                DepartDateBack: data.DateFlight.DateBack.Date,
                ReturnTime: data.DateFlight.DateBack.EstimateLanding,
                Price: data.price
              })}>Purchase</Button>
            </Box>
          </Grid>
        </Grid>
      </ItemContainer>
    </form >
  ));

  return (
    <NewRoot>
      <GridContainer container direction="column">
        <Box>
          <Typography className='formName'>Select Flight </Typography>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <FormHead className='formSubtitle'>Select your flights for your&nbsp;</FormHead>
            <FindResult className="locationspan">{from} - {to}</FindResult>
          </Box>
        </Box>
        <Grid className='content'>
          <Grid className="FormHeader">
            <Box className="FindResult">{displayNumberOfFlight()}</Box>
            {sortBox}
          </Grid>
          <Grid className={"itemContainer"}>
            {DataDisplay}
          </Grid>
        </Grid>
      </GridContainer>
    </NewRoot>
  );
}

