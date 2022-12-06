import StepLabel from "@mui/material/StepLabel";
import { Stepper, Step, Typography, Box } from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { StepIconProps } from "@mui/material/StepIcon";
import {
  PassgerIcon,
  AirplaneIcon,
  SeatIcon,
  UtensilIcon,
  PaymentIcon,
} from "../../layout/customIcon/CustomIcon";
import CheckIcon from "@mui/icons-material/Check";

export default function CustomizedSteppers(currentstep: any) {
  const allstep = [
    "Select Flight",
    "Passager",
    "Seat",
    "Food&Drink",
    "Payment",
  ];

  const RootContainer = styled(Box)({
    padding: "30px 0px",
  });

  const StepperRoot = styled(Box)({
    width: "100%",
    backgroundColor: "rgb(244,245,246)",
    display: "block",
    padding: "30px",
  });

  const MyStepper = styled(Stepper)({
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    maxWidth: "90%",
    justifyContent: "center",
  });

  const MyConnector = styled(StepConnector)({
    [`& .${stepConnectorClasses.line}`]: {
      display: "none",
      innerWidth: "0%",
    },
  });
  const MyIconStyle = styled(Box)<{
    page: { completed?: boolean; active?: boolean };
  }>(({ theme, page }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#F4F5F6",
    width: 60,
    height: 60,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(page.active && {
      border: "solid 1.5px #4669CD",
      color: "#4669CD",
      backgroundColor: "white",
    }),
    ...(page.completed && {
      border: "solid 1.5px #4669CD",
      color: "#4669CD",
      backgroundColor: "white",
    }),
  }));

  const MyStep = styled(Step)({
    display: "flex",
    width: "100%",
    height: "100%",
    marginLeft: "4%",
  });

  const MyCheckIcon = styled(CheckIcon)({
    color: "#4669CD",
  });

  const StepIcon = (props: StepIconProps) => {
    const { active, completed } = props;
    const icons: { [index: number]: React.ReactElement } = {
      1: (
        <>
          {currentstep.passvalue === 0 ? (
            <AirplaneIcon fontSize="large" component={MyIconStyle} />
          ) : (
            <MyCheckIcon fontSize="large" />
          )}
        </>
      ),
      2: (
        <>
          {currentstep.passvalue <= 1 ? (
            <PassgerIcon component={MyIconStyle} fontSize="small" />
          ) : (
            <MyCheckIcon fontSize="large" />
          )}
        </>
      ),
      3: (
        <>
          {currentstep.passvalue <= 2 ? (
            <SeatIcon component={MyIconStyle} fontSize="large" />
          ) : (
            <MyCheckIcon fontSize="large" />
          )}
        </>
      ),
      4: (
        <>
          {currentstep.passvalue <= 3 ? (
            <UtensilIcon component={MyIconStyle} fontSize="large" />
          ) : (
            <MyCheckIcon fontSize="large" />
          )}
        </>
      ),
      5: (
        <>
          {currentstep.passvalue <= 4 ? (
            <PaymentIcon component={MyIconStyle} fontSize="large" />
          ) : (
            <MyCheckIcon fontSize="large" />
          )}
        </>
      ),
    };
    return (
      <MyIconStyle page={{ completed, active }}>
        {icons[Number([props.icon])]}
      </MyIconStyle>
    );
  };

  const MyStepLabel = styled(StepLabel)({
    color: "#4669CD",
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: "10%",
    display: "flex",
  });

  const Typo = styled(Typography)<{
    page: { Done?: boolean };
  }>(({ page }) => ({
    color: "#B1B5C3",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "120%",
    display: "flex",
    ...(page.Done && {
      color: "#4669CD",
    }),
  }));

  const BreakLine = styled("hr")({
    borderTop: "1px solid rgba(0, 0, 0, 0.07)"
  })

  const DisplayPartialData = (index: number) => {
    switch (index) {
      case 0:
        return <span>Data display here</span>;
      case 1:
        return <span>Data display here</span>;
      case 2:
        return <span>Data display here</span>;
      case 3:
        return <span>Data display here</span>;
      case 4:
        return <span>Data display here</span>;
    }
  };

  return (
    <RootContainer>
      <BreakLine />
      <StepperRoot>
        <MyStepper
          activeStep={currentstep.passvalue}
          connector={<MyConnector />}
        >
          {allstep.map((step, index) => (
            <MyStep key={index}>
              <MyStepLabel StepIconComponent={StepIcon}>
                <Typo
                  page={{
                    Done: currentstep.passvalue >= index,
                  }}
                >
                  {step}
                </Typo>
                <>{DisplayPartialData(index)}</>
              </MyStepLabel>
            </MyStep>
          ))}
        </MyStepper>
      </StepperRoot>
      <BreakLine />
    </RootContainer>
  );
}
