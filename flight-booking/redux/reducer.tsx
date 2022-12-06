import {
    Search_Flight,
    Add_Infor_Flight,
    Add_Infor_Passenger,
    Add_Menu_Passenger,
    Add_Seat_Selection,
    Payment,
    addInforFlight,
    addInforPassenger,
    addMenuPassenger,
    searchFlight,
    addSeatSelection,
} from "./action";

const inforPassenger: never[] = [];
const inforMenu : never[] = [];
const inforSeatSelection : never[] = [];
const paymentValue = 0

export const searchFlightReducer = (state = {}, action: any) => {
    switch (action.type) {
        case Search_Flight:
            state = action.payload;
            return state;
        case "Remove":
            state = {}
            return state;
        default:
            return state;
    }
}

export const addInforPassengerReducer = (state = inforPassenger, action: any) => {
    switch (action.type) {
        case Add_Infor_Passenger:
            return action.payload;
        case "Remove":
            state = []
            return state;
        default:
            return state;
    }
}

export const addInforFlightReducer = (state = {}, action: any) => {
    switch (action.type) {
        case Add_Infor_Flight:
            return action.payload;
        case "Remove":
            state = {}
            return state;
        default:
            return state;
    }
}

export const addMenuReducer = (state = inforMenu, action: any) => {
    switch (action.type) {
        case Add_Menu_Passenger:
            return action.payload;
        case "Remove":
            state = []
            return state;
        default:
            return state;
    }
}

export const addSeatSelectionReducer = (state = inforSeatSelection, action: any) => {
    switch (action.type) {
        case Add_Seat_Selection:
            return action.payload;
        case "Remove":
            state = []
            return state;
        default:
            return state;
    }
}

export const paymentReducer = (state = paymentValue, action: any) => {
    switch (action.type) {
        case Payment:
            return action.payload;
        default:
            return state;
    }
}

export const stepReducer = (state =0, action: any) => {
    switch (action.type) {
        case "STEP":
            return action.payload;
        default:
            return state;
    }
}
