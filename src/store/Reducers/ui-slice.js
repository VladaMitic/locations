import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    notificationCities: {
      status: 'pending',
      title: 'Захтев се шаље...',
      message: 'Слање захтева за подацима о општинама!',
    },
    notificationLocations: {
      status: 'pending',
      title: 'Захтев се шаље...',
      message: 'Слање захтева за подацима о локацијама!',
    },
    notificationLocation: {
      status: 'pending',
      title: 'Захтев се шаље...',
      message: 'Слање захтева за подацима о локацији!',
    },
    notificationDelete: {
      status: 'pending',
      title: 'Захтев се шаље...',
      message: 'Слање захтева за брисање локације!',
    },
  },
  reducers: {
    showNotificationCities(state, action) {
      state.notificationCities = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    showNotificationLocations(state, action) {
      state.notificationLocations = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    showNotificationLocation(state, action) {
      state.notificationLocation = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    showNotificationDelete(state, action) {
      state.notificationDelete = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
