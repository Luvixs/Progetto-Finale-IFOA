
import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../reducers/weatherSlice'

 const store = configureStore({
    // richiamo i reducer di cui ho bisogno
  reducer: {
    weather: weatherReducer,
  },
});


export default store;