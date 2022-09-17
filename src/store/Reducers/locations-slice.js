import { createSlice } from '@reduxjs/toolkit';

const locationsSlice = createSlice({
  name: 'locations',
  initialState: {
    locations: [],
    selectedLocation: {},
  },
  reducers: {
    clearSelectedLocation(state) {
      state.selectedLocation = {};
    },
    addSelectedLocation(state, action) {
      state.selectedLocation = action.payload;
    },
    addLocationsToStore(state, action) {
      state.locations = action.payload;
    },
    removeLocationFromLocations(state, action) {
      const locationId = action.payload;
      console.log(locationId); 
      state.locations = state.locations.filter(
        (item) => item.id !== locationId
      );
      console.log(state.locations);
    },
  },
});

export const locationsActions = locationsSlice.actions;

export default locationsSlice;
