import React, { useState } from "react";
import FlightSeats from "./FlightSeats";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { typeData } from '../BookFlight/bookFlightType';
const BackGround = styled(Box)({
  backgroundColor: "rgb(244,245,246)",
  width: "auto",
  height: "auto",
  color: "black",
  maxWidth: "100vw",
  padding: "8%",
});

const Container = styled(Box)({
  backgroundColor: "#FFFFFF",
  height: "100%",
  padding: "6% 3% 3% 6%",
  borderRadius: "12px",
  margin: "6% 0%",
});

const SeatContainer = styled(Box)({
  backgroundColor: "#F4F5F6",
  width: "100%",
  height: "100%",
  borderRadius: "4px",
});

const SeatHeading = styled(Box)({
  color: "#4669CD",
  fontSize: "32px",
  fontWeight: "600",
  padding: "15px 0px",
});

const SubHeading = styled(Typography)({
  color: "#000000",
  fontWeight: "400",
  fontSize: "16px",
});

const BlueSubHeading = styled(Typography)({
  color: "#4669CD",
  fontWeight: "600",
  fontSize: "16px",
  paddingLeft: "0.7%",
});

const InfoText = styled(Box)({
  fontSize: "16px",
  fontWeight: "400",
  color: "#1A1D1F",
});

const UpperBox = styled(Box)({
  borderBottom: "1px solid #E6E8EC",
  padding: "20px 0 20px 5px",
  margin: "0 140px 0 5px",
});

const LowerInfoText = styled(Box)({
  color: "#1A1D1F",
  fontSize: "20px",
  fontWeight: "600",
  paddingBottom: "50px",
  paddingTop: "7px",
});

const ContainerHeading = styled(Box)({
  color: "#1A1D1F",
  fontSize: "clamp(1px, 24px, 24px)",
  fontWeight: "600",
  padding: "5px 7px 20px 0",
});

const YourSelectedBox = styled(Box)({
  display: "flex",
  marginTop: "5%",
  paddingLeft: '9px'
});

const SeatSelectedText = styled(Typography)({
  color: "#4669CD",
  fontSize: "30px",
  fontWeight: "600",
});

const SeatIcons = styled(Box)<{
  page: {
    NotAvailableIcon: boolean;
    CanChooseIcon: boolean;
    YourSelectedIcon: boolean;
  };
}>(({ page }) => ({
  width: "48px",
  height: "48px",
  borderRadius: "4px",
  ...(page.NotAvailableIcon && {
    backgroundColor: "#B1B5C3",
  }),
  ...(page.CanChooseIcon && {
    backgroundColor: "#4669CD",
  }),
  ...(page.YourSelectedIcon && {
    backgroundColor: "#22BF61",
  }),
}));

const CenterIcon = styled(Box)({
  padding: "12px 0 0 18px",
});

const FlexBox = styled(Box)({
  display: "flex",
});

const ButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});

const NextButton = styled("button")({
  width: "132px",
  height: "48px",
  backgroundColor: "#4669CD",
  color: "#FCFCFD",
  border: "none",
  borderRadius: "8px",
  fontWeight: "500",
  fontSize: "16px",
  float: "right",
  marginTop: "-3%",
  "&:hover": {
    backgroundColor: "#0069d9",
    color: "rgb(210, 210, 210)",
    cursor: "pointer",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
  },
  ":disabled": {
    backgroundColor: "rgb(180, 180, 180)",
    "&:hover": {
      backgroundColor: "rgb(180, 180, 180)",
      color: "#FCFCFD",
    },
  },
});

export default function SeatForm({ PassengerInfor, handleOnclick }: typeData) {

  type passengerInfoType = {
    name: string,
    phone: string,
    email: string,
    seatSelected: string[],
    seatData: any
  }

  const [passengerInfo, setPassengerInfo] = useState(PassengerInfor as any);
  const [count, setCount] = useState(0)
  const handleCheckSame = (data: any[], name: string) => (
    data.map((passenger: passengerInfoType) => {
      if (!passenger.seatSelected.includes(name)) {
        return true;
      }
      else {
        return name
      }
    })
  )

  const handleSeat = (name: string, seatIndex: number) => {
    const temp = passengerInfo
    const seatSelectedArray = temp[seatIndex].seatSelected
    const selectedSeatIncluded = temp[seatIndex].seatSelected.includes(name);
    const data = passengerInfo[seatIndex].Seat
    const newData = [...data]

    if (!selectedSeatIncluded) {
      if (seatSelectedArray.length === 1) {
        const selectedSeatIndex = newData.findIndex((seat: { name: string }) => seat.name === seatSelectedArray[0]); // Old Index when pushing

        if (!handleCheckSame(passengerInfo, name).includes(name)) {

          seatSelectedArray.splice(0, 1, name);
          const selectedSeatNewIndex = newData.findIndex((seat: { name: string }) => seat.name === seatSelectedArray[0]); // New Index after splicing

          if (newData[selectedSeatNewIndex].status === 1) {
            newData[selectedSeatNewIndex] = { ...newData[selectedSeatNewIndex], status: 2 }
            temp[seatIndex].Seat = newData
          }

          if (newData[selectedSeatIndex].status === 2) {
            newData[selectedSeatIndex] = { ...newData[selectedSeatIndex], status: 1 }
            temp[seatIndex].Seat = newData
          }
        }
        else {
          const selectedPersonIndex = passengerInfo.findIndex((pass: any) => pass.seatSelected[0] === name)
          const { firstName, lastName } = passengerInfo[selectedPersonIndex]
          const fullName = firstName + lastName
          alert("Please choose different seat! " + name + " has been chosen by " + fullName)
        }

      } else {

        if (!handleCheckSame(passengerInfo, name).includes(name)) {
          seatSelectedArray.push(name)
          const selectedSeatIndex = newData.findIndex((seat: { name: any }) => seat.name === seatSelectedArray[0]);

          if (newData[selectedSeatIndex].status === 1) {
            newData[selectedSeatIndex] = { ...newData[selectedSeatIndex], status: 2 }
            temp[seatIndex].Seat = newData
          }
        }

        else {
          const selectedPersonIndex = passengerInfo.findIndex((pass: any) => pass.seatSelected[0] === name)
          const { firstName, lastName } = passengerInfo[selectedPersonIndex]
          const fullName = firstName + lastName
          alert("Please choose different seat! " + name + " has been chosen by " + fullName)
        }
      }

    } else {
      const selectedSeatIndex = newData.findIndex((seat: { name: string }) => seat.name === seatSelectedArray[0]);

      seatSelectedArray.splice(0, 1)
      newData[selectedSeatIndex] = { ...newData[selectedSeatIndex], status: 1 }
      temp[seatIndex].Seat = newData
    }

    setPassengerInfo(temp)
    setCount(count + 1)
  }

  return (
    <Grid>
      <BackGround>
        <Box>
          <SeatHeading>Seat Selection</SeatHeading>
          <FlexBox>
            <SubHeading>Select your seat at</SubHeading>
            <BlueSubHeading>KAP-3469</BlueSubHeading>
          </FlexBox>
        </Box>
        {passengerInfo.map((passenger: any, seatIndex: any) => {
          const data = passengerInfo[seatIndex].Seat
          const seatSelectedArray = passengerInfo[seatIndex].seatSelected
          return (
            <Container key={seatIndex}>
              <Grid container>
                <Grid item md={4.3} xs={12}>
                  <UpperBox>
                    <ContainerHeading>Passenger {seatIndex + 1}</ContainerHeading>
                    <InfoText>Full name : {`${passenger.firstName} ${passenger.lastName}`}</InfoText>
                    <InfoText>Phone Number : {passenger.phone}</InfoText>
                    <InfoText>Gmail : {passenger.email}</InfoText>
                  </UpperBox>
                  <YourSelectedBox marginBottom={{ xs: "10%", md: "60%" }}>
                    <ContainerHeading>Your Selected : </ContainerHeading>
                    {seatSelectedArray.map((selectedSeat: any, seatIndex: number) => (
                      <SeatSelectedText key={seatIndex}>
                        {selectedSeat}
                      </SeatSelectedText>
                    ))}
                  </YourSelectedBox>
                  <Box>
                    <Grid container>
                      <Grid item xs={2}>
                        <SeatIcons
                          page={{
                            NotAvailableIcon: true,
                            CanChooseIcon: false,
                            YourSelectedIcon: false,
                          }}
                        >
                          <CenterIcon>
                            <img src={"../seatImg/close.svg"} alt="close" />
                          </CenterIcon>
                        </SeatIcons>
                      </Grid>
                      <Grid>
                        <LowerInfoText>Not Available</LowerInfoText>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={2}>
                        <SeatIcons
                          page={{
                            NotAvailableIcon: false,
                            CanChooseIcon: true,
                            YourSelectedIcon: false,
                          }}
                        >
                          <CenterIcon>
                            <img src={"../seatImg/SmallPerson.svg"} alt="close" />
                          </CenterIcon>
                        </SeatIcons>
                      </Grid>
                      <Grid>
                        <LowerInfoText>Can Choose</LowerInfoText>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={2}>
                        <SeatIcons
                          page={{
                            NotAvailableIcon: false,
                            CanChooseIcon: false,
                            YourSelectedIcon: true,
                          }}
                        >
                          <CenterIcon>
                            <img src={"../seatImg/SmallPerson.svg"} alt="close" />
                          </CenterIcon>
                        </SeatIcons>
                      </Grid>
                      <Grid>
                        <LowerInfoText>Your Selected</LowerInfoText>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item md={7.7} xs={12}>
                  <SeatContainer>
                    <FlightSeats
                      data={data} 
                      handleSeat={handleSeat}
                      seatIndex={seatIndex}
                      />
                  </SeatContainer>
                </Grid>
              </Grid>
            </Container>

          )
        })}
        <ButtonBox>
          {
            passengerInfo.every((passenger: any) => passenger.seatSelected.length !== 0)
              ? <NextButton onClick={() => handleOnclick({ PassengerInfor: passengerInfo })}>Next Step</NextButton>
              : <NextButton disabled>Next Step</NextButton>
          }
        </ButtonBox>
      </BackGround>
    </Grid>
  );
}

