import PaymentSummary from "./PaymentSummary";
import PaymentInfo from "./PaymentInformation";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { typeData } from "../BookFlight/bookFlightType";

const BackGround = styled(Box)({
  backgroundColor: "rgb(244,245,246)",
  height: "100%",
  color: "black",
  maxWidth: "100vw",
});

const Container = styled(Grid)({
  width: "88%",
  height: "auto",
  margin: "0 0 120px 7%",
});

const Heading = styled(Typography)({
  color: "#4669CD",
  fontSize: "32px",
  fontWeight: "600",
  padding: "30px 0 15px 8%",
});

const SubHeading = styled(Typography)({
  color: "#000000",
  fontWeight: "400",
  fontSize: "16px",
  padding: "0 0 4% 8%",
});

function PaymentForm(props: typeData) {
  const getData = props.PassengerInfor.map((value) => value);
  const getUserSeat = getData.map((value) => value.seatSelected);

  return (
    <BackGround>
      <Box>
        <Heading>Payment</Heading>
        <SubHeading>Choose your payment method</SubHeading>
      </Box>
      <Container container spacing={1.5}>
        <Grid item md={7.5} sm={12}>
          <PaymentInfo />
        </Grid>
        <Grid item md={4.5} sm={12}>
          <PaymentSummary
            DepartTime={props.DepartTime}
            DepartDate={props.DepartDate}
            from={props.from}
            shortFrom={props.shortFrom}
            to={props.to}
            shortTo={props.shortTo}
            DepartTimeBack={props.DepartTimeBack}
            DepartDateBack={props.DepartDateBack}
            price={props.Price}
            getUserSeat={getUserSeat}
          />
        </Grid>
      </Container>
    </BackGround>
  );
}

export default PaymentForm;
