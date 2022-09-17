import { configureStore } from '@reduxjs/toolkit';

import citiesSlice from './cities-slice';
import locationsSlice from './locations-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, locations: locationsSlice.reducer, cities: citiesSlice.reducer},
});

export default store;
