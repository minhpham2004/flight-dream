import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const RightContainer = styled(Grid)({
    backgroundColor: '#FFFFFF',
    height: '100%',
    borderRadius: '12px',
    padding: '5.8% 3% 0 4%'
})

const ContainerHeading = styled(Box)({
    color: "#1A1D1F",
    fontSize: "24px",
    fontWeight: "600",
    paddingBottom: "20px",
    borderBottom: '1px solid #E6E8EC'
});

const DepartureBox = styled(Box)({
    marginTop: '20px',
    paddingBottom: '24px',
    borderBottom: '1px dashed #E6E8EC'
})

const InfoDetailBox = styled(Box)({
    display: "flex",
    margin: "4px 0px 12px 0px"
})

const RightHighlightedHeading = styled(Typography)({
    color: '#4669CD',
    fontWeight: '600',
    fontSize: '20px',
})

const RightSubHeading = styled(Typography)({
    color: '#1A1D1F',
    fontWeight: '700',
    fontSize: '16px',
})

const RightInfo = styled(Typography)({
    color: '#1A1D1F',
    fontWeight: '400',
    fontSize: '16px'
})

const RightHighlightedInfo = styled(Typography)({
    color: '#4669CD',
    fontWeight: '700',
    fontSize: '16px'
})

const FlexBox = styled(Box)({
    display: 'flex'
})

const Money = styled(Typography)({
    color: "#4669CD",
    fontSize: "32px",
    fontWeight: "600",
});

const PaymentHeading = styled(Typography)({
    color: "#1A1D1F",
    fontSize: "20px",
    fontWeight: "600",
    paddingBottom: "20px",
})

type PaymentSummaryType = {
    from:string,
    to: string,
    shortFrom: string,
    shortTo: string,
    DepartTime: string,
    DepartDate: string,
    DepartTimeBack: string,
    DepartDateBack: string,
    price: number,
    getUserSeat: any
}

function PaymentSummary({ DepartTime, DepartDate, from, shortFrom, to, shortTo, DepartTimeBack, DepartDateBack, price, getUserSeat }: PaymentSummaryType) {
    return (
        <Box>
            <RightContainer>
                <ContainerHeading>Price Summary</ContainerHeading>
                <DepartureBox>
                    <Grid container spacing={1}>
                        <Grid item>
                            <RightHighlightedHeading>Departing</RightHighlightedHeading>
                        </Grid>
                        <Grid item>
                            <PaymentHeading>{DepartTime}, {DepartDate}</PaymentHeading>
                        </Grid>
                    </Grid>
                    <Box>
                        <InfoDetailBox>
                            <RightSubHeading style={{ marginRight: '20px' }}>From: </RightSubHeading>
                            <RightInfo>{from} ( {shortFrom} )</RightInfo>
                        </InfoDetailBox>
                        <InfoDetailBox>
                            <RightSubHeading style={{ marginRight: '40px' }}>To: </RightSubHeading>
                            <RightInfo>{to} ( {shortTo} )</RightInfo>
                        </InfoDetailBox>
                        <InfoDetailBox>
                            <RightSubHeading style={{ marginRight: '25px' }}>Seat: </RightSubHeading>
                            <RightHighlightedInfo>{getUserSeat.join('-')}</RightHighlightedInfo>
                        </InfoDetailBox>
                        <InfoDetailBox>
                            <RightSubHeading>Food & Drink: </RightSubHeading>
                            <RightHighlightedInfo>Meat and vegetable - Strawberry </RightHighlightedInfo>
                        </InfoDetailBox>
                    </Box>
                </DepartureBox>
                <DepartureBox style={{ borderBottom: "1px solid #E6E8EC" }}>
                    <Grid container spacing={1}>
                        <Grid item>
                            <RightHighlightedHeading>Returning</RightHighlightedHeading>
                        </Grid>
                        <Grid item>
                            <PaymentHeading>{DepartTimeBack}, {DepartDateBack}</PaymentHeading>
                        </Grid>
                    </Grid>
                    <Box>
                        <InfoDetailBox>
                            <RightSubHeading style={{ marginRight: '20px' }}>From: </RightSubHeading>
                            <RightInfo>{from} ( {shortFrom} )</RightInfo>
                        </InfoDetailBox>
                        <InfoDetailBox>
                            <RightSubHeading style={{ marginRight: '40px' }}>To: </RightSubHeading>
                            <RightInfo>{to} ( {shortTo} )</RightInfo>
                        </InfoDetailBox>
                        <InfoDetailBox>
                            <RightSubHeading style={{ marginRight: '25px' }}>Seat: </RightSubHeading>
                            <RightHighlightedInfo>{getUserSeat.join('-')}</RightHighlightedInfo>
                        </InfoDetailBox>
                        <InfoDetailBox>
                            <RightSubHeading>Food & Drink: </RightSubHeading>
                            <RightHighlightedInfo>Meat and vegetable - Stawberry </RightHighlightedInfo>
                        </InfoDetailBox>
                    </Box>
                </DepartureBox>
                <FlexBox style={{ justifyContent: 'space-between' }}>
                    <PaymentHeading paddingTop={{ lg: '8%', md: '2.5%', sm: '4%' }}>Trip Total</PaymentHeading>
                    <Money paddingTop={{ lg: '6%', md: '0' }}>{price} AUD</Money>
                </FlexBox>
            </RightContainer>
        </Box>
    )
}

export default PaymentSummary