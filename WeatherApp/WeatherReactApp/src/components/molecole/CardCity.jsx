import {Container, Row, Col} from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import NextDays from './NextDays';


const CardCity = (prop) => {

const forecastList = prop.forecast.list;
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

   function getTemperatureAndHour(){ //funzione per gestire i dati del grafico 
     const data = [];
     let daysTaked = 0;

     for(let i = 0; i< forecastList.length; i++){
         if(new Date(forecastList[i].dt_txt).getHours().toString() == "6"){

             const date = new Date(forecastList[i].dt_txt);
            const dayOfWeek = daysOfWeek[date.getDay()];
      
             data.push({
               time: `${dayOfWeek} ${date.getDate()}-${date.getMonth() + 1}`,
              temperature: Math.round(forecastList[i].main.temp),
             });    
                         // data.push({ 
                         //     time: new Date(forecastList[i].dt_txt).getDate().toString() + "-" + (new Date(forecastList[i].dt_txt).getMonth()+1).toString(),
                         //     temperature: Math.round(forecastList[i].main.temp),
                            
                         // });
             daysTaked++
             if(daysTaked >= 5){
                 break;
             }
         }
     }
     return data;
  }

    return (
        <Container className='mt-4 ' fluid>
            <Row className="d-flex flex-column flex-xl-row justify-content-center">                       
                <Col className='fs-4 mt-2 ' xs={12} xl={5}>    
                    <span className='fs-1'>{prop.weather.name}</span>   
                    <div> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="40"  fill="currentColor" className="bi bi-thermometer-half" viewBox="0 0 16 16">
                            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415"/>
                            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
                        </svg> {Math.round(prop.weather.main.temp)} °C
                    </div>
               
                    <div> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="40"  fill="currentColor" className="bi bi-droplet-fill my-3" viewBox="0 0 16 16">
                            <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                        </svg> {prop.weather.main.humidity} %
                    </div>
                
                    <div> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="40"  fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
                        </svg> {prop.weather.wind.speed} km/h
                    </div>
                
                    <div> 
                        <img src= {`https://openweathermap.org/img/wn/${prop.weather.weather[0].icon}@2x.png`} alt="" />
                        {prop.weather.weather[0].description}
                    </div>
                    <NextDays className="mt-5" forecastList={forecastList} daysOfWeek={daysOfWeek}/>
                </Col> 
                {/* <Col xs={12} xl={5}> */}
                    
                {/* </Col>   */}
                                                           
            </Row>

            <Row className='d-flex'>
                <Col className='flex-column'  xs={12} xl={5}>
                <h2>Forecast</h2>
                <div>
                    <LineChart width={600} height={300} data={getTemperatureAndHour()} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="temperature"  alt="" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> 
                        <XAxis dataKey="time"/>
                        <YAxis dataKey="temperature"/>
                        <Tooltip />
                    </LineChart> 
                </div>
                </Col>
            </Row>             
        </Container> 
    )
}

export default CardCity