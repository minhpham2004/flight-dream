export type propsData = {
    from: string,
    to: string,
    timeStart: string,
    timeEnd: string,
    people: number,
};

export type Flight = {
    from: string,
    to: string,
    shortFrom:string,
    shortTo:string,
    FlightId: string,
    DepartTime: string,
    DepartDate: string,
    LaningTIme: string,
    DepartTimeBack: string,
    DepartDateBack: string,
    ReturnTime: string,
    Price: number,
    people: number,
    PassengerInfor: passager[],
};

export type passager = {
    passagerId: string,
    name: string,
    gender: string,
    phone: number,
    email: string,
    Nationality: string,
    seatSelected: [],
    seatData: [],
    Food: []
};

export const MyFlightInfo: Flight = {
    from: '',
    to: '',
    shortFrom: '',
    shortTo: '',
    FlightId: '',
    DepartTime: '',
    DepartDate: '',
    LaningTIme: '',
    DepartTimeBack: '',
    DepartDateBack: '',
    ReturnTime: '',
    Price: 0,
    people: 0,
    PassengerInfor: [],
};

export type NewpropsData = {
    from: string,
    to: string,
    timeStart: string | Date,
    timeEnd: string,
    people: number,
    handleOnclick: (data: Partial<Flight>) => void,
};

export type typeData = {
    from:string,
    to: string,
    shortFrom: string,
    shortTo: string,
    FlightId: string,
    DepartTime: string,
    DepartDate: string,
    LaningTIme: string,
    DepartTimeBack: string,
    DepartDateBack: string,
    ReturnTime: string,
    Price: number,
    people: number,
    PassengerInfor: passager[],
    handleOnclick: (data: Partial<Flight>) => void,
}
