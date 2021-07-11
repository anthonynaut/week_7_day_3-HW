import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'McLaren F1',
        price: "21,000,000.00",
        description: "Redefine what's possible",
        color: 'Volcanic Orange',
        horsepower: '618bhp',
        max_speed: '240 mph',
        dimensions: 'length:168.82in x width:71.65in x height:44.88in',
        weight: 'Approx 1138Kg',
        torque: '479 lb-ft',
        redline: '7500rpm',
        engine: 'BMW S70/2 V12 engine',
        series: 'F1'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        choosePrice: (state, action) => { state.price = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice, } = rootSlice.actions;