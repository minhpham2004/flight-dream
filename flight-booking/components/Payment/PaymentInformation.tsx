import * as React from "react";
import { useState, useEffect } from "react";
import PaymentSummary from "./PaymentSummary";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Dayjs } from "dayjs";
import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  Checkbox,
  Typography,
  InputBase,
  TextField,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { typeData } from "../BookFlight/bookFlightType";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const LeftContainer = styled(Grid)({
  backgroundColor: "#FFFFFF",
  height: "100%",
  borderRadius: "12px",
  padding: "4.3% 3% 2% 4%",
});

const PaymentHeading = styled(Typography)({
  color: "#1A1D1F",
  fontSize: "20px",
  fontWeight: "600",
  paddingBottom: "20px",
});

const PaymentMethod = styled(FormControlLabel)({
  width: "95%",
  padding: "10px 0",
  paddingLeft: "4%",
});

const PaymentMethodCheckedBox = styled(Box)({
  display: "flex",
  border: "2px solid #4669CD",
  color: "#4669CD",
  borderRadius: "2px",
});

const PaymentMethodUnCheckedBox = styled(Box)({
  display: "flex",
  border: "2px solid #E6E8EC",
  color: "#CFD5E1",
  borderRadius: "2px",
});

const PaymentMethodGrid = styled(Grid)({
  borderBottom: "1px dashed #E6E8EC",
  paddingBottom: "3%",
});

const PaymentMethodIcon = styled("img")({
  padding: "4%",
});

const InfoBox = styled(Box)({
  marginTop: "4%",
});

// Text Input
const InfoTextFieldBox = styled(Box)({
  marginBottom: "3%",
});

const InfoTextField = styled(Box)({
  display: "flex",
  backgroundColor: "white",
  color: "#1A1D1F",
  fontWeight: "400",
  fontSize: "16px",
  borderRadius: "2px",
  border: "1px solid #E6E8EC",
  width: "100%",
});

const InputIcon = styled("img")({
  width: "16px",
  height: "16px",
});

const InputIconBox = styled(Box)({
  paddingTop: "18px",
  paddingLeft: "10px",
});

//
const InfoLabel = styled("label")({
  fontSize: "13px",
  lineHeight: "20px",
  fontWeight: "400",
  width: "100%",
  height: "auto",
  marginBottom: "1%",
});

const ConfirmedBox = styled(Box)({
  height: "auto",
  display: "inline-flex",
  paddingTop: "15px",
});

const InputBasePadding = styled(InputBase)({
  padding: "12px",
});

const FlexBox = styled(Box)({
  display: "flex",
});

const ErrorMessage = styled(Typography)({
  color: "red",
  fontSize: "12px",
  fontWeight: "500",
});

const TimeTextField = styled(TextField)({
  padding: "12px 12px 12px 20px",
  width: "100%",
});

const PaymentButton = styled("button")({
  width: "132px",
  height: "48px",
  marginBottom: "2%",
  backgroundColor: "#4669CD",
  color: "#FCFCFD",
  border: "none",
  borderRadius: "8px",
  fontWeight: "500",
  fontSize: "16px",
  float: "right",
  marginTop: "7%",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    cursor: "pointer",
  },
});

function PaymentInfo() {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    setFormValues(initialValues);
    setValue(null);
    setFormErrors({} as InfoType);
    setIsSubmit(false);
    setCheckErrText("");
  };

  const [value, setValue] = React.useState<Dayjs | null>(null);
  const handleDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const initialValues: InfoType = {
    mail: "",
    card: "",
    password: "",
    date: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({} as InfoType);
  const [isSubmit, setIsSubmit] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkErrText, setCheckErrText] = useState("");

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleFormChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  type InfoType = {
    mail: string;
    card: string;
    password: string;
    date: string;
  };

  type ErrorType = {
    mail: string;
    card: string;
    password: string;
    date: string;
  };

  const validate = (values: ErrorType) => {
    const errors: any = {};
    if (!values.mail) {
      errors.mail = "*Email is required!";
    }

    if (selectedValue === "a") {
      if (!values.card.trim()) {
        errors.card = "*Card number is required!";
      }
    } else if (selectedValue === "b") {
      if (!values.card.trim()) {
        errors.card = "*Paypal number is required!";
      }
    }

    if (selectedValue === "a") {
      if (!values.password.trim()) {
        errors.password = "*CVC is required!";
      }
    } else if (selectedValue === "b") {
      if (!values.password.trim()) {
        errors.password = "*OTP is required!";
      }
    }

    if (value === null) {
      errors.date = "*Date is required";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit && checked === false) {
      setCheckErrText("Please agree with our terms and conditions");
    }

    if (Object.keys(formErrors).length === 0 && isSubmit && checked) {
      setCheckErrText("");
      alert("Successful");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors, isSubmit]);
  return (
    <LeftContainer>
      <PaymentHeading>Payment Method</PaymentHeading>
      <PaymentMethodGrid container spacing={1}>
        <Grid item xs={12} sm={6}>
          {selectedValue === "a" ? (
            <PaymentMethodCheckedBox>
              <PaymentMethod
                control={
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                }
                label="Mastercard"
                name="payment"
              />
              <PaymentMethodIcon
                src="../paymentPageImg//Mastercard.png"
                alt="MasterCard"
              />
            </PaymentMethodCheckedBox>
          ) : (
            <PaymentMethodUnCheckedBox>
              <PaymentMethod
                control={
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                }
                label="Mastercard"
                name="payment"
              />
              <PaymentMethodIcon
                src="../paymentPageImg//Mastercard.png"
                alt="MasterCard"
              />
            </PaymentMethodUnCheckedBox>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {selectedValue === "b" ? (
            <PaymentMethodCheckedBox>
              <PaymentMethod
                control={
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                }
                label="Paypal"
                name="payment"
              />
              <PaymentMethodIcon
                src="../paymentPageImg/PayPal.png"
                alt="PayPal"
              />
            </PaymentMethodCheckedBox>
          ) : (
            <PaymentMethodUnCheckedBox>
              <PaymentMethod
                control={
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                }
                label="Paypal"
                name="payment"
              />
              <PaymentMethodIcon
                src="../paymentPageImg/PayPal.png"
                alt="PayPal"
              />
            </PaymentMethodUnCheckedBox>
          )}
        </Grid>
      </PaymentMethodGrid>
      <InfoBox>
        <PaymentHeading>Payment Information</PaymentHeading>
        <Grid container>
          <Grid xs={12}>
            <InfoTextFieldBox>
              <InfoTextField>
                <InputIconBox>
                  <InputIcon src={"../paymentPageImg/email.png"} alt="email" />
                </InputIconBox>
                <InputBasePadding
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Email"
                  inputProps={{ "aria-label": "Email" }}
                  name="mail"
                  value={formValues.mail}
                  onChange={handleFormChange}
                />
              </InfoTextField>
              <ErrorMessage>{formErrors.mail}</ErrorMessage>
            </InfoTextFieldBox>
          </Grid>
          <Grid xs={12}>
            <InfoTextFieldBox>
              <InfoTextField className="info_textfield">
                <InputIconBox>
                  <InputIcon src={"../paymentPageImg/Card.png"} alt="card" />
                </InputIconBox>
                {selectedValue === "a" ? (
                  <InputBasePadding
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Card Number"
                    inputProps={{ "aria-label": "Card Number" }}
                    name="card"
                    value={formValues.card}
                    onChange={handleFormChange}
                  />
                ) : (
                  <InputBasePadding
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Paypal Number"
                    inputProps={{ "aria-label": "Paypal Number" }}
                    name="card"
                    value={formValues.card}
                    onChange={handleFormChange}
                  />
                )}
              </InfoTextField>
              <ErrorMessage>{formErrors.card}</ErrorMessage>
            </InfoTextFieldBox>
          </Grid>
          <Grid xs={5.9} marginRight={{ xs: "1.5%" }}>
            <FlexBox>
              <InfoTextField>
                <InputIconBox>
                  <InputIcon
                    src={"../paymentPageImg/Calendar.png"}
                    alt="card"
                  />
                </InputIconBox>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    inputFormat="MM/YYYY"
                    toolbarPlaceholder="MM/YYYY"
                    value={value}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TimeTextField
                        variant="standard"
                        placeholder="MM/YYYY"
                        {...params}
                      />
                    )}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </LocalizationProvider>
              </InfoTextField>
            </FlexBox>
            <ErrorMessage>{formErrors.date}</ErrorMessage>
          </Grid>
          <Grid xs={5.9}>
            <InfoTextField>
              <InputIconBox>
                <InputIcon src={"../paymentPageImg/lock.png"} alt="lock" />
              </InputIconBox>
              {selectedValue === "a" ? (
                <InputBasePadding
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="CVC"
                  type="password"
                  inputProps={{ "aria-label": "CVC" }}
                  name="password"
                  value={formValues.password}
                  onChange={handleFormChange}
                />
              ) : (
                <InputBasePadding
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Password"
                  type="password"
                  inputProps={{ "aria-label": "Password" }}
                  name="password"
                  value={formValues.password}
                  onChange={handleFormChange}
                />
              )}
            </InfoTextField>
            <ErrorMessage>{formErrors.password}</ErrorMessage>
          </Grid>
        </Grid>
      </InfoBox>
      <ConfirmedBox>
        <Checkbox
          id="Terms_Conditions"
          {...label}
          sx={{
            "&.Mui-checked": {
              color: lightBlue[800],
            },
          }}
          checked={checked}
          onClick={handleChecked}
          style={{ top: "-10px" }}
        />
        <InfoLabel htmlFor="Terms_Conditions">
          <strong>Terms and conditions:</strong> Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s.
        </InfoLabel>
      </ConfirmedBox>
      <ErrorMessage>{checkErrText}</ErrorMessage>
      <PaymentButton onClick={handleSubmit}>Payment</PaymentButton>
    </LeftContainer>
  );
}

export default PaymentInfo;
