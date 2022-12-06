import HeaderSection from "../../layout/menuSections/HeaderSection";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Menu from "../../layout/menuSections/Menu";
import { typeData } from "../BookFlight/bookFlightType";

export default function Foodanddrink({ PassengerInfor, handleOnclick }: typeData) {
  const RootStyle = styled(Box)({
    display: "block",
    width: "clamp(100vh, 100%, 100%)",
    background: "rgb(244,245,246)",
  });
  return (
    <RootStyle>
      <HeaderSection />
      <Menu PassengerInfor={PassengerInfor} handleOnclick={handleOnclick} />
    </RootStyle>
  );
}
