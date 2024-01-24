import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    // setto lo stato iniziale dello slice
    name: 'weather',
    initialState: {
      weather: {},
      forecast: {},
      searched: false,
    
    },
    reducers: {
        // contiene le azioni che modificheranno lo stato iniziale
      setWeatherData: (state, action) => {
        state.weather = action.payload.weather;
        state.forecast = action.payload.forecast;
        state.searched = true;

        
      },
      
      resetWeatherData: (state) => {
        // reset delle variabili 
        state.weather = {};
        state.forecast = {};
        state.searched = false;
      },
    },
  });
  
  export const { setWeatherData, resetWeatherData } = weatherSlice.actions;
  export default weatherSlice.reducer;