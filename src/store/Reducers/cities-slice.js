import { createSlice } from '@reduxjs/toolkit';

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [],
  },
  reducers: {
    addCitiesToStore(state, action) {
      state.cities = action.payload;
    },
  },
});

export const citiesActions = citiesSlice.actions;

export default citiesSlice;
