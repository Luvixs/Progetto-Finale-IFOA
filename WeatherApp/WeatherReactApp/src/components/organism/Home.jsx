import CardCity from "../molecole/CardCity"
import Search from "../molecole/Search"
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, resetWeatherData } from "../../reducers/weatherSlice";
const Home = () => {
    const dispatch = useDispatch();
    const { weather, forecast, searched } = useSelector((state) => state.weather);

   async function searchWeather (city) {
            const ress= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8f942c83cf2538b04985fd4b816d50ae&units=metric`)
            const jsondata = await ress.json()
            const ressForecast= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=8f942c83cf2538b04985fd4b816d50ae&units=metric`)
            const forecastdata = await ressForecast.json()
            if (forecastdata.cod == 200 && jsondata.cod == 200) {
                dispatch(setWeatherData({ weather: jsondata, forecast: forecastdata }));
              } else {
                dispatch(resetWeatherData());
              }
    }

    return (
        <>
        <Search searchWeather={searchWeather} />
        
        { searched ? <CardCity weather={weather} forecast={forecast}/> : <></>}
        
        
        </>
    )
    
}

export default Home