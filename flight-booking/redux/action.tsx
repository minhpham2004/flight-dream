export const Search_Flight = "SEARCH_FLIGHT";
export const  Add_Infor_Passenger = "ADD_INFOR_PASSENGER";
export const Add_Menu_Passenger = "ADD_MENU_PASSENGER";
export const Add_Infor_Flight = "ADD_INFOR_FLIGHT";
export const Add_Seat_Selection = "ADD_SEAT_SELECTION";
export const Payment = "PAYMENT";


export const searchFlight = (payload:any, type=Search_Flight)=> ({
    type,
    payload,
})

export const addInforPassenger = (payload:any,type = Add_Infor_Passenger)=> ({
    type,
    payload,
})

export const addMenuPassenger = (payload:any, type = Add_Menu_Passenger)=> ({
    type,
    payload,
})

export const addInforFlight = (payload:any, type = Add_Infor_Flight)=> ({
    type,
    payload,
})

export const addSeatSelection = (payload:any,type = Add_Seat_Selection)=> ({
    type,
    payload,
})

export const payment = (payload:any)=> ({
    type:Payment,
    payload,
})

export const Step = (payload:number)=>({
    type:"STEP",
    payload,
})



