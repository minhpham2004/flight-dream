import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../layout/defaultLayout/Header";
import StepBar from "../components/StepBar/StepBar";
import { PageForm } from "../components/StepBar/PageForm";
import BookFlightForm from "../components/BookFlight/BookFlightForm";
import PassagerForm from "../components/PassengerForm/PassagerForm";
import SeatForm from "../components/SeatForm/SelectSeatForm";
import Foodanddrink from "../components/FoodForm/food-and-drink";
import PaymentForm from "../components/Payment/PaymentForm";
import Footer from "../layout/defaultLayout/Footer";
import { MyFlightInfo, Flight, propsData } from '../components/BookFlight/bookFlightType';

const RootStyle = styled(Box)({
  backgroundColor: "#F4F5F6",
  width: "auto",
  height: "100%",
  backgroundSize: "cover",
  display: "grid",
});

const Banner = styled(Box)({
  backgroundImage: "url(/BookFlightBanner.svg)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backdropFilter: "blur(2px)",
  height: "700px",
  position: "relative",
});

export default function BookFlight() {
  const [data, setdata] = useState<propsData>({
    from: '',
    to: '',
    timeStart: '',
    timeEnd: '',
    people: 0,

  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('searchFlight') as string);
    setdata({
      from: data.from,
      to: data.to,
      timeStart: data.timeStart,
      timeEnd: data.timeEnd,
      people: data.people,
    });
    return;
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [flightData, setFlightData] = useState(MyFlightInfo);
  const handleOnclick = (flightData: Partial<Flight>) => {
    setFlightData(prev => ({ ...prev, ...flightData }));
    nextForm();
  };
  // console.log(flightData);
  const { nextForm, step, currentstep } = PageForm([
    <BookFlightForm key={0} {...data} handleOnclick={handleOnclick} />,
    <PassagerForm key={1} {...flightData} {...data} handleOnclick={handleOnclick} />,
    <SeatForm key={2} {...flightData} handleOnclick={handleOnclick} />,
    <Foodanddrink key={3} {...flightData} {...data} handleOnclick={handleOnclick}/>,
    <PaymentForm key={4} {...flightData} {...data} handleOnclick={handleOnclick} />,
  ]);

  return (
    <>
      <RootStyle>
        <Header page={"book flight"} />
        <Banner />
        <StepBar passvalue={currentstep} />
        <Grid className="Form" style={{ paddingBottom: "65px" }}>
          {step}
        </Grid>
        <Footer />
      </RootStyle>
    </>
  );
}
