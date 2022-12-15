import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function NextStepBtn({nextStep}:any) {
    const RootStyle = styled(Box)({
        margin:"auto",
        display: "flex",
        width: "83.334%",
        justifyContent: "end",
        paddingBottom:"133px",
    })

    const BootstrapButton = styled(Button)({
        width: "138px",
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '12px',
        lineHeight: 1.5,
        backgroundColor: "#4669CD",
        color: "#FCFCFD",
        borderColor: '#0063cc',
        borderRadius: "8px",
        fontWeight: "500",
        '&:hover': {
            backgroundColor: "#0069d9",
                color: "rgb(210, 210, 210)",
                cursor: "pointer",
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    });
    return (
        <RootStyle>
            <BootstrapButton onClick={nextStep}>
                Next step
            </BootstrapButton>
        </RootStyle>
    )
}