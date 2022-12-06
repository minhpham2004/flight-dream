import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";


export const NewRoot = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "#F4F5F6",
    alignItems: "flex-start",
    alignContent: "flex-start",
    maxWidth: "100vw",
    width: "100%",
    '& .formName': {
        fontFamily: 'Inter',
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '38px',
        letterSpacing: '0em',
        paddingBottom: '10px',
        textAlign: 'left',
        color: '#4669CD',
        '& .formSubtitle': {
            color: "black",
            paddingTop: "16px",
        },
        '& .locationspan': {

        }
    },
    '& .item': {
        display: "block",

    }
});

export const GridContainer = styled(Grid)({
    display: 'flex',
    padding: "0px 96px 0px 96px",
    '& .content': {
        paddingTop: "32px",
        backgroundColor: 'white',
        borderRadius: "12px",
        width: "100%",
        height: "100%",
        paddingBottom: "30px",
        marginTop: "32px",
        '& .FormHeader': {
            display: 'flex',
            paddingLeft: "40px",
            paddingRight: "40px",
            padding: "40px 40px 26px 40px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            '& .FindResult': {
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: '#1A1D1F'
            }
        }
    },
});

export const FormHead = styled(Typography)({
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingTop: "16px",
});

export const FindResult = styled("span")({
    color: "#4669CD",
    paddingTop: "16px",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
});

export const ItemContainer = styled(Box)({
    border: "solid 1px #E8E6EC",
    marginLeft: '40px',
    marginRight: '40px',
    borderRadius: "12px",
    marginBottom: "22px",
    fontFamily: 'Inter',
    lineHeight: '120%',
    fontStyle: 'normal',
    '& .FlightDetail': {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: '20px 24px 12px 24px',
    },
    '& .StyleFlightID': {
        fontWeight: 600,
        fontSize: '20px',
        color: "#1A1D1F",
    },
    '& .PurchaseBox': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        '& .PurchaseButton': {
            backgroundColor: "#4669CD",
            color: "white",
            borderRadius: "4px",
            width: '152px',
            height: '48px',
        },
        '& span': {
            fontWeight: 600,
            fontSize: '32px',
            color: '#4669CD',
            paddingBottom: '20px',
        },
    },
    '& .FlightLocation': {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        "& .Location": {
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            color: "#1A1D1F",
        },
        '& .DateFlight': {
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "150%",
            paddingBottom: "10px",
            paddingTop: "8px",
            color: "#6F767E",
        }
    },
    '& .FlightTime': {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: "space-between",
        fontFamily: 'Inter',
        fontStyle: "normal",
        alignItems: "space-between",
        "& .TimeStartEnd": {
            paddingRight: "64px",
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            "& span": {
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
                paddingTop: "8px",
            }
        },
        "& .Time": {
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "120%",
            color: "#4669CD",
        }
    },
    '& .FlightData': {
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        alignItems: 'flex-start',
        flexDirection: "column"
    },
    '& .TimeGo': {
        paddingBottom: "20px"
    },
    '& .Idspacing': {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
    },
    "& .FlightPurchaseGrid": {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        paddingRight: "100px",
        borderLeft: "1px dashed #E8E6EC",
        height: "auto",
        paddingLeft: "100px",
    }
});