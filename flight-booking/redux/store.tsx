import { configureStore } from '@reduxjs/toolkit';
import { searchFlightReducer, addInforPassengerReducer, addInforFlightReducer, addMenuReducer, addSeatSelectionReducer, stepReducer } from './reducer';

const store = configureStore({
    reducer:{
        searchFlight:searchFlightReducer,
        addInforPassenger:addInforPassengerReducer,
        addInforFlight:addInforFlightReducer,
        addMenu:addMenuReducer,
        addSeatSelection:addSeatSelectionReducer,
        step:stepReducer,
    },
});

export default store;