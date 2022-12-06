/* eslint-disable react/jsx-key */
import { styled } from "@mui/system";
import { Grid, Box, Typography } from "@mui/material";
import { data_menu } from "../../data/data_menu";
import NextStepBtn from "../defaultLayout/NextStepBtn";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { addMenuPassenger } from '../../redux/action';

export default function Menu({ PassengerInfor, handleOnclick }: any) {

    const passengerInfor = useSelector((state: any) => state.addInforPassenger);
    // const dispatch = useDispatch();
    
    const [data, setData] = useState(passengerInfor === null ? passengerInfor : PassengerInfor);
    const [menuSelect, setMenuSelected] = useState(passengerInfor === null ? passengerInfor : PassengerInfor);
    const [count, setCount] = useState(1);
    const handleAddMenu = (data: any, index: number, element: any) => {
        const menuItems = menuSelect;
        if (menuItems[index].Food.length > 0) {
            if (menuItems[index].Food.some((item: { img: any; }) => item.img === data.img)) {
                menuItems[index].Food.splice(menuItems[index].Food.findIndex((item: { img: any; }) => item.img === data.img), 1);
            }
            else {
                menuItems[index].Food.push(data);
            }
        }
        else {
            menuItems[index].Food.push(data);
        }
        setMenuSelected(menuItems);
        setCount(count + 1);
    }

    const RootStyle = styled(Grid)({
        background: "#FFFF",
        gap: "160px",
        padding: "30px",
        marginTop: "35px",
        borderRadius: "12px",
        margin: "auto",
        marginBottom: "32px",
        justifyContent: "center"
    })

    const PassengerInforDisplay = styled(Grid)({
        paddingRight: "20px",
        paddingTop: "40px",
        paddingLeft: "40px",
        paddingBottom: "40px",
        gap: "60px",
        marginTop: "40px",
    })

    const ItemMenu = styled(Box)({
        fontSize: "13px",
        color: "#1A1D1F",
        fontWeight: "400",
        textAlign: "center",
        '&.Price': {
            color: "#4669CD",
            fontSize: "20px",
            fontWeight: "600",
            marginTop: "8px",
        },
        '&.Status': {
            color: "#4669CD",
            fontSize: "20px",
            fontWeight: "600",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            cursor: "pointer",
        }

    })

    const BoxMenu = styled(Box)({
        marginLeft: "24px",
        '&.BoxMenu': {
            display: "flex",
            flexWrap: "wrap",
            marginTop: "12px",
            textAlign: "center",
            marginBottom: "32px",
            marginLeft: "0",
        },
        '&.xsBox': {
            marginLeft: "0",
        }

    })

    const BoxImg = styled(Box)({
        position: "relative",
        height: "147px",
    })

    const TitleMenu = styled(Typography)({
        color: "#1A1D1F",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "120%",
        fontFamily: "Inter",
        '&.Menu': {
            marginLeft: "24px",
            marginTop: "64px",
        },
        '&.Drink': {
            marginLeft: "24px",
        },
        '&.Passenger': {
            marginBottom: "20px",
        },
        '&.Infor': {
            fontWeight: "400",
            fontSize: "16px",
            marginBottom: "12px",
        }
    })

    const ImgMenu = styled("img")({
        cursor: "pointer",
    })

    const checkSelcet = (menuSelect: { [x: string]: {
        Food: any; menuSelected: { img: any; }[]; 
}; }, index: string | number, item: { img: any; }) => menuSelect[index].Food.some((items: { img: any; }) => items.img === item.img)

    const handleNextStep = () => {
        // dispatch(addMenuPassenger(menuSelect));
        handleOnclick(
            {
                Food: menuSelect.Food
            }
        );
        
    }

    return (
        <Box>
            {data.map((_menu: any, index: number) => (
                <RootStyle container xs={10}>
                    <PassengerInforDisplay item xs={8} md={3}>
                        <TitleMenu className="Passenger">Passenger {index + 1}</TitleMenu>
                        <TitleMenu className="Infor">Full name : {`${_menu.firstName} ${_menu.lastName}`}</TitleMenu>
                        <TitleMenu className="Infor">Phone number : {_menu.phone}</TitleMenu>
                        <TitleMenu className="Infor">Gmail : {_menu.email}</TitleMenu>
                        {menuSelect[index].Food.length > 0 && (menuSelect[index].Food.map((options: { img: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                            <BoxMenu className="xsBox" width={{ md: "147px", xs: "147px" }}>
                                <ImgMenu src={options.img} />
                                <ItemMenu>{options.name}</ItemMenu>
                                <ItemMenu className="Price">{options.price}</ItemMenu>
                            </BoxMenu>
                        )))}
                    </PassengerInforDisplay>
                    <Grid item md={7} xs={8} justifyContent="center">
                        <Grid>
                            <TitleMenu className="Menu" textAlign={{ xs: "center", lg: "left" }}>Hot Meal</TitleMenu>
                            <BoxMenu className="BoxMenu" justifyContent={{ xs: "center", lg: "start" }}>
                                {data_menu.map((item) => {
                                    if (item.type === "meal") {
                                        return (
                                            <BoxMenu width={{ md: "147px", xs: "40%" }}>
                                                <BoxImg onClick={(e: any) => handleAddMenu(item, index, e)} style={{ border: checkSelcet(menuSelect, index, item) === false ? 0 : "3px solid #4669CD", }}>
                                                    <ImgMenu src={item.img} style={{ opacity: checkSelcet(menuSelect, index, item) ? .2 : 1, }} />
                                                    <ItemMenu className="Status">{checkSelcet(menuSelect, index, item) ? "Selected" : ""}</ItemMenu>
                                                </BoxImg>
                                                <ItemMenu>{item.name}</ItemMenu>
                                                <ItemMenu className="Price">{item.price}</ItemMenu>
                                            </BoxMenu>
                                        )
                                    }
                                })}
                            </BoxMenu>
                        </Grid>

                        <TitleMenu className="Drink" textAlign={{ xs: "center", lg: "left" }}>Drink</TitleMenu>
                        <BoxMenu className="BoxMenu" justifyContent={{ xs: "center", lg: "start" }}>
                            {data_menu.map((item) => {
                                if (item.type !== "meal") {
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <BoxMenu width={{ md: "147px", xs: "40%" }}>
                                            <BoxImg onClick={(e: any) => handleAddMenu(item, index, e)} style={{ border: checkSelcet(menuSelect, index, item) === false ? 0 : "3px solid #4669CD", }}>
                                                <ImgMenu src={item.img} style={{ opacity: checkSelcet(menuSelect, index, item) ? .2 : 1, }} />
                                                <ItemMenu className="Status">{checkSelcet(menuSelect, index, item) ? "Selected" : ""}</ItemMenu>
                                            </BoxImg>
                                            <ItemMenu>{item.name}</ItemMenu>
                                            <ItemMenu className="Price">{item.price}</ItemMenu>
                                        </BoxMenu>
                                    )
                                }
                            })}
                        </BoxMenu>
                    </Grid>
                </RootStyle>
            ))}
            <NextStepBtn nextStep={handleNextStep} />
        </Box>
    )
}