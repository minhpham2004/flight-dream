import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const SeatGrid = styled(Grid)({
  padding: "4% 0 0 15%",
});

const SeatSelections = styled("button")<{
  page: {
    SeatUnvailable: boolean;
    SeatCanChoose: boolean;
    SeatSelected: boolean;
  };
}>(({ page }) => ({
  width: "3.5rem",
  height: "3.5rem",
  borderRadius: "4px",
  border: "none",
  marginBottom: "0.8em",
  ...(page.SeatUnvailable && {
    backgroundColor: "#B1B5C3",
  }),
  ...(page.SeatCanChoose && {
    backgroundColor: "#4669CD",
  }),
  ...(page.SeatSelected && {
    backgroundColor: "#22BF61",
  }),
}));

const SeatRow = styled(Box)({
  margin: "0 25px 40px 25px",
  color: "#B1B5C3",
  fontWeight: "600",
  fontSize: "20px",
});

const SeatColumn = styled(Grid)({
  color: "#070A14",
  fontWeight: "600",
  fontSize: "20px",
  padding: "20% 0 15px 20px",
});

type FlightSeatsType = {
    data: any,
    handleSeat: any,
    seatIndex: number
}

function FlightSeats({ data, handleSeat, seatIndex }: FlightSeatsType) {
  return (
    <SeatGrid container spacing={1}>
      <Grid
        item
        xs={2.7}
        sm={1.5}
        md={1.5}
        lg={1.5}
        xl={1}
        marginRight={{ xl: "4%" }}
      >
        <SeatColumn item>A</SeatColumn>
        {data
          .filter((el: { column: string }) => el.column === "A")
          .map(
            (
              seat: {
                id: any;
                status: any;
                name: any;
                column: any;
              },
              index: React.Key | null | undefined
            ) => {
              const { status, name } = seat;
              switch (status) {
                case 0:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: true,
                        SeatCanChoose: false,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      disabled
                    >
                      <img src={"../seatImg/close.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 1:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: true,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 2:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: false,
                        SeatSelected: true,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
              }
            }
          )}
      </Grid>
      <Grid
        item
        xs={2.7}
        sm={1.5}
        md={1.5}
        lg={1.5}
        xl={1}
        marginRight={{ xl: "4%" }}
        className="col_B"
      >
        <SeatColumn>B</SeatColumn>
        {data
          .filter((el: { column: string }) => el.column === "B")
          .map(
            (
              seat: {
                id: any;
                status: any;
                name: any;
                column: any;
              },
              index: React.Key | null | undefined
            ) => {
              const { status, name } = seat;
              switch (status) {
                case 0:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: true,
                        SeatCanChoose: false,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      disabled
                    >
                      <img src={"../seatImg/close.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 1:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: true,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 2:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: false,
                        SeatSelected: true,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
              }
            }
          )}
      </Grid>
      <Grid
        item
        xs={2.7}
        sm={1.5}
        md={1.5}
        lg={1.5}
        xl={1}
        marginRight={{ xl: "4%" }}
        className="col_C"
      >
        <SeatColumn>C</SeatColumn>
        {data
          .filter((el: { column: string }) => el.column === "C")
          .map(
            (
              seat: {
                id: any;
                status: any;
                name: any;
                column: any;
              },
              index: React.Key | null | undefined
            ) => {
              const { status, name } = seat;
              switch (status) {
                case 0:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: true,
                        SeatCanChoose: false,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      disabled
                    >
                      <img src={"../seatImg/close.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 1:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: true,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 2:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: false,
                        SeatSelected: true,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
              }
            }
          )}
      </Grid>
      <Grid
        item
        xs={0}
        sm={1.5}
        md={1.5}
        lg={1.5}
        xl={1}
        marginRight={{ xl: "4%" }}
        className="row"
      >
        <SeatRow
          marginTop={{
            xs: "70px",
            sm: "70px",
            md: "65px",
            lg: "65px",
            xl: "70px",
          }}
        >
          1
        </SeatRow>
        <SeatRow>2</SeatRow>
        <SeatRow>3</SeatRow>
        <SeatRow>4</SeatRow>
        <SeatRow>5</SeatRow>
        <SeatRow>6</SeatRow>
        <SeatRow>7</SeatRow>
        <SeatRow>8</SeatRow>
        <SeatRow>9</SeatRow>
        <SeatRow>10</SeatRow>
      </Grid>
      <Grid
        item
        xs={2.7}
        sm={1.5}
        md={1.5}
        lg={1.5}
        xl={1}
        marginRight={{ xl: "4%" }}
        className="col_D"
      >
        <SeatColumn>D</SeatColumn>
        {data
          .filter((el: { column: string }) => el.column === "D")
          .map(
            (
              seat: {
                id: any;
                status: any;
                name: any;
                column: any;
              },
              index: React.Key | null | undefined
            ) => {
              const { status, name } = seat;
              switch (status) {
                case 0:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: true,
                        SeatCanChoose: false,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      disabled
                    >
                      <img src={"../seatImg/close.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 1:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: true,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 2:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: false,
                        SeatSelected: true,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
              }
            }
          )}
      </Grid>
      <Grid
        item
        xs={2.7}
        sm={1.5}
        md={1.5}
        lg={1.5}
        xl={1}
        marginRight={{ xl: "4%" }}
        className="col_E"
      >
        <SeatColumn>E</SeatColumn>
        {data
          .filter((el: { column: string }) => el.column === "E")
          .map(
            (
              seat: {
                id: any;
                status: any;
                name: any;
                column: any;
              },
              index: React.Key | null | undefined
            ) => {
              const { status, name } = seat;
              switch (status) {
                case 0:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: true,
                        SeatCanChoose: false,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      disabled
                    >
                      <img src={"../seatImg/close.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 1:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: true,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 2:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: false,
                        SeatSelected: true,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
              }
            }
          )}
      </Grid>
      <Grid
        item
        xs={2.7}
        sm={1.5}
        md={1.5}
        lg={1.5}
        xl={1}
        marginRight={{ xl: "4%" }}
        className="col_F"
      >
        <SeatColumn>F</SeatColumn>
        {data
          .filter((el: { column: string }) => el.column === "F")
          .map(
            (
              seat: {
                id: any;
                status: any;
                name: any;
                column: any;
              },
              index: React.Key | null | undefined
            ) => {
              const { status, name } = seat;
              switch (status) {
                case 0:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: true,
                        SeatCanChoose: false,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      disabled
                    >
                      <img src={"../seatImg/close.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 1:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: true,
                        SeatSelected: false,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
                case 2:
                  return (
                    <SeatSelections
                      page={{
                        SeatUnvailable: false,
                        SeatCanChoose: false,
                        SeatSelected: true,
                      }}
                      key={index}
                      value={name}
                      onClick={() => {
                        handleSeat(name, seatIndex);
                      }}
                    >
                      <img src={"../seatImg/People.svg"} alt="close" />
                    </SeatSelections>
                  );
              }
            }
          )}
      </Grid>
      <Grid
        item
        xs={0}
        sm={1.5}
        md={1.5}
        lg={1.5}
        xl={1}
        display={{ md: "none", xs: "block" }}
      >
        <SeatRow style={{ marginTop: "70px" }}>1</SeatRow>
        <SeatRow>2</SeatRow>
        <SeatRow>3</SeatRow>
        <SeatRow>4</SeatRow>
        <SeatRow>5</SeatRow>
        <SeatRow>6</SeatRow>
        <SeatRow>7</SeatRow>
        <SeatRow>8</SeatRow>
        <SeatRow>9</SeatRow>
        <SeatRow>10</SeatRow>
      </Grid>
    </SeatGrid>
  );
}

export default FlightSeats;
