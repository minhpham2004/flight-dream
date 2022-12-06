import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, MenuItem, InputLabel, FormControl, Select, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NewpropsData } from '../BookFlight/bookFlightType';
import { seat_data } from "../../data/seat_data";
import PassengerNextStepBtn from "./PassengerNextStepBtn";

const BackGround = styled(Box)({
    backgroundColor: "rgb(244,245,246)",
    maxWidth: "100vw",
});

const Container = styled(Grid)({
    backgroundColor: "#FFFFFF",
    width: "85%",
    height: "100%",
    borderRadius: "12px",
    margin: "16px 0 0 8%",
    padding: "30px 20px 30px 3%",
});

const Adult = styled(Typography)({
    color: "#1A1D1F",
    fontWeight: "400",
    fontSize: "16px",
    paddingBottom: "20px",
});

const PassengerHeading = styled(Box)({
    color: "#4669CD",
    fontSize: "32px",
    fontWeight: "600",
    padding: "30px 0 15px 8%",
});

const SubHeading = styled(Box)({
    color: "#000000",
    fontWeight: "400",
    fontSize: "16px",
    padding: "0 0 1% 8%",
});

const InputHeading = styled(Typography)({
    color: "#1A1D1F",
    fontWeight: "680",
    fontSize: "20px",
    paddingTop: "30px",
});

const InputGrid = styled(Grid)({
    marginTop: "20px",
});

const DescriptionBox = styled(Box)({
    borderBottom: "1px solid #E6E8EC",
});

const ErrorMessage = styled(Typography)({
    color: "red",
    fontSize: "14px",
});

function PassengerForm({ handleOnclick }: NewpropsData) {

    const [defaultData, setDefaultData] = React.useState<any[]>([]);
    const [formErrors, setFormErrors] = useState([] as any)
    const [formErrBoolean, setFormErrBoolean] = useState([] as any)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem("searchFlight") || "{}");
        const newData = [];
        const initialErrorBooleanArray = []
        const initialErrorTextArray = []
        for (let i = 0; i < Number(item["people"]); i++) {
            if (item !== undefined && newData.length < Number(item["people"])) {
                const objectData = {
                    id: count + 1,
                    firstName: "",
                    lastName: "",
                    gender: "",
                    phone: "",
                    email: "",
                    nationality: "",
                    seatSelected: [],
                    Seat: seat_data,
                    Food: []
                }

                const initErrBoolean = {
                    firstNameError: false,
                    lastNameError: false,
                    phoneError: false,
                    mailError: false,
                    nationError: false,
                    genderError: false,
                }

                const initialErrText = {}

                newData.push(objectData)
                initialErrorBooleanArray.push(initErrBoolean)
                initialErrorTextArray.push(initialErrText)
            }
        }

        setDefaultData(newData);
        setFormErrBoolean(initialErrorBooleanArray as any)
        setFormErrors(initialErrorTextArray as any)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSubmit = () => {
        handleOnclick({
            PassengerInfor: defaultData
        }
        )
    };

    const validate = (values: any, index: number) => {
        const tempError: any = formErrBoolean;
        const errors: any = formErrors

        const nameRegex = /^[a-z ,.'-]+$/i;
        const phoneRegex = /^[0-9\-\+]{9,15}$/i;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.firstName.trim()) {
            tempError[index] = { ...tempError[index], firstNameError: true }
            errors[index].firstName = "Please enter your first name!";
        } else if (!nameRegex.test(values.firstName)) {
            tempError[index] = { ...tempError[index], firstNameError: true }
            errors[index].firstName = "Invalid name";
        } else {
            tempError[index] = { ...tempError[index], firstNameError: false }
            errors[index].firstName = ''
        }

        if (!values.lastName.trim()) {
            tempError[index] = { ...tempError[index], lastNameError: true }
            errors[index].lastName = "Please enter your last name!";
        } else if (!nameRegex.test(values.lastName)) {
            tempError[index] = { ...tempError[index], lastNameError: true }
            errors[index].lastName = "Invalid name";
        } else {
            tempError[index] = { ...tempError[index], lastNameError: false }
            errors[index].lastName = ''
        }

        if (!values.email.trim()) {
            tempError[index] = { ...tempError[index], mailError: true }
            errors[index].mail = "Please enter your email!";
        } else if (!emailRegex.test(values.email)) {
            tempError[index] = { ...tempError[index], mailError: true }
            errors[index].mail = "Invalid email!";
        } else {
            tempError[index] = { ...tempError[index], mailError: false }
            errors[index].mail = ''
        }

        if (!values.phone.trim()) {
            tempError[index] = { ...tempError[index], phoneError: true }
            errors[index].phone = 'Please enter your phone number'
        } else if (!phoneRegex.test(values.phone)) {
            tempError[index] = { ...tempError[index], phoneError: true }
            errors[index].phone = 'Invalid phone number'
        } else {
            tempError[index] = { ...tempError[index], phoneError: false }
            errors[index].phone = ''
        }

        if (!values.gender) {
            tempError[index] = { ...tempError[index], genderError: true }
            errors[index].gender = 'Please select your gender!'
        } else {
            tempError[index] = { ...tempError[index], genderError: false }
            errors[index].gender = ''
        }

        if (!values.nationality) {
            tempError[index] = { ...tempError[index], nationError: true }
            errors[index].nation = 'Please select your nation!'
        } else {
            tempError[index] = { ...tempError[index], nationError: false }
            errors[index].nation = ''
        }

        return errors
    }

    const changeData = (el: any, index: any, field: string, data: any, regex: any = true) => {
        let namePassenger = data[index][field];
        const newData = data;

        namePassenger = el.target.value;
        newData[index][field] = namePassenger;

        setDefaultData(newData);
        setFormErrors(validate(defaultData[index], index))
        setCount(count + 1);
    }

    const hadnleChangeFirstName = (el: any, index: number, _data: any) => {
        changeData(el, index, 'firstName', _data);
    }

    const hadnleChangelastName = (el: any, index: number, data: any) => {
        changeData(el, index, 'lastName', data);
    }
    const hadnleChangeNationality = (el: any, index: number, data: any) => {
        changeData(el, index, 'nationality', data);
    }
    const hadnleChangegender = (el: any, index: number, data: any) => {
        changeData(el, index, 'gender', data);
    }
    const hadnleChangeemail = (el: any, index: number, data: any) => {
        changeData(el, index, 'email', data);
    }
    const hadnleChangephone = (el: any, index: number, data: any) => {
        changeData(el, index, 'phone', data);
    }

    return (
        <BackGround>
            <PassengerHeading>Passengers</PassengerHeading>
            <SubHeading>Fill passenger detail</SubHeading>
            {defaultData.map((form, index: number) => (
                <Container key={index}>
                    <DescriptionBox>
                        <Adult>ADULT {index + 1} ( Adult )</Adult>
                    </DescriptionBox>
                    <InputHeading>PASSENGER DETAILS</InputHeading>
                    <InputGrid container style={{ marginBottom: "20px" }}>
                        <Grid item xs={6}>
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { width: "97%" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Middle & First Name"
                                    variant="outlined"
                                    name="firstName"
                                    value={form?.firstName}
                                    onChange={(e) => { hadnleChangeFirstName(e, index, defaultData) }}
                                    error={formErrBoolean[index].firstNameError}
                                />
                                <ErrorMessage>{formErrors[index].firstName}</ErrorMessage>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { width: "97%" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Last/Family Name"
                                    variant="outlined"
                                    name="lastName"
                                    value={form?.lastName}
                                    onChange={(e) => { hadnleChangelastName(e, index, defaultData) }}
                                    error={formErrBoolean[index].lastNameError}
                                />
                                <ErrorMessage>{formErrors[index].lastName}</ErrorMessage>
                            </Box>
                        </Grid>
                    </InputGrid>
                    <InputGrid container>
                        <Grid item xs={6}>
                            <Box sx={{ maxWidth: "97%" }}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        id="demo-simple-select-label"
                                        error={formErrBoolean[index].genderError}
                                    >
                                        Gender
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        IconComponent={KeyboardArrowDownIcon}
                                        name="gender"
                                        value={form?.gender}
                                        label="Gender"
                                        onChange={(e) => { hadnleChangegender(e, index, defaultData) }}
                                        error={formErrBoolean[index].genderError}
                                    >
                                        <MenuItem value="Men">Men</MenuItem>
                                        <MenuItem value="Women">Women</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                    <ErrorMessage>{formErrors[index].gender}</ErrorMessage>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ maxWidth: "97%" }}>
                                <FormControl fullWidth>
                                    <InputLabel
                                        id="demo-simple-select-label"
                                        error={formErrBoolean[index].nationError}
                                    >
                                        Nationality
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        IconComponent={KeyboardArrowDownIcon}
                                        name="nation"
                                        value={form?.nationality}
                                        label="Nationality"
                                        onChange={(e) => { hadnleChangeNationality(e, index, defaultData) }}
                                        error={formErrBoolean[index].nationError}
                                    >
                                        <MenuItem value="VN">Vietnam</MenuItem>
                                        <MenuItem value="USA">USA</MenuItem>
                                        <MenuItem value="AUS">Australia</MenuItem>
                                        <MenuItem value="UK">UK</MenuItem>
                                    </Select>
                                    <ErrorMessage>{formErrors[index].nation}</ErrorMessage>
                                </FormControl>
                            </Box>
                        </Grid>
                    </InputGrid>
                    <InputHeading>Contact Info</InputHeading>
                    <InputGrid container>
                        <Grid item xs={6}>
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { width: "97%" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Phone Number"
                                    variant="outlined"
                                    name="phone"
                                    value={form?.phone}
                                    onChange={(e) => { hadnleChangephone(e, index, defaultData) }}
                                    error={formErrBoolean[index].phoneError}
                                />
                                <ErrorMessage>{formErrors[index].phone}</ErrorMessage>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { width: "97%" },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Email Adress"
                                    variant="outlined"
                                    name="mail"
                                    value={form?.email}
                                    onChange={(e) => { hadnleChangeemail(e, index, defaultData) }}
                                    error={formErrBoolean[index].mailError}
                                />
                                <ErrorMessage>{formErrors[index].mail}</ErrorMessage>
                            </Box>
                        </Grid>
                    </InputGrid>
                </Container>

            ))}
            <PassengerNextStepBtn
                formErrors={formErrors}
                handleSubmit={handleSubmit}
            />
        </BackGround>
    );
}
export default PassengerForm;
