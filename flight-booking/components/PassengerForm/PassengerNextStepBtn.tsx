import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Grid)({
  backgroundColor: "#rgb(244,245,246)",
  width: "85%",
  height: "auto",
  borderRadius: "12px",
  margin: "16px 0 0 8%",
  padding: "30px 20px 30px 3%",
  marginBottom: "100px",
});

const PassengerButton = styled("button")({
  width: "132px",
  height: "48px",
  backgroundColor: "#4669CD",
  color: "#FCFCFD",
  border: "none",
  borderRadius: "8px",
  fontWeight: "500",
  fontSize: "16px",
  float: "right",
  margin: "0px -2% 0 0",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    cursor: "pointer",
  },
  ":disabled": {
    backgroundColor: "rgb(180, 180, 180)",
    "&:hover": {
      backgroundColor: "rgb(180, 180, 180)",
      color: "#FCFCFD",
    },
  },
});

function PassengerNextStepBtn({ formErrors, handleSubmit }: any) {
  return (
    <Container>
      {formErrors.every(
        (formError: any) => Object.keys(formError).length === 0
      ) ? (
        <PassengerButton disabled>Next Step</PassengerButton>
      ) : formErrors.every((formError: any) =>
          Object.values(formError).every((val) => val === "")
        ) ? (
        <PassengerButton onClick={handleSubmit}>Next Step</PassengerButton>
      ) : (
        <PassengerButton disabled>Next Step</PassengerButton>
      )}
    </Container>
  );
}

export default PassengerNextStepBtn;
