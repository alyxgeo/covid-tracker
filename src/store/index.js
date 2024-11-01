import { configureStore, createSlice } from '@reduxjs/toolkit';

const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    data: [],
    selectedState: '',
  },
  reducers: {
    setCovidData(state, action) {
      state.data = action.payload;
    },
    setSelectedState(state, action) {
      state.selectedState = action.payload;
    },
  },
});

export const { setCovidData, setSelectedState } = covidSlice.actions;

const store = configureStore({
  reducer: {
    covid: covidSlice.reducer,
  },
});

export default store;
