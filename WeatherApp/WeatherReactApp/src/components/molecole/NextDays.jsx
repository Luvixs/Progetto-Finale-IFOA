

const NextDays = (prop) => {
    return(
        <div> 
            <h2>Next Days</h2> 
            {prop.forecastList.map( (list) =>
            
                <>
                    {
                        new Date(list.dt_txt).getHours().toString() == "15" ? 
                        <>
                            {prop.daysOfWeek[new Date(list.dt_txt).getDay()]}
                            <img src= {`https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`} alt="" />
                        </>
                        : 
                        <></>
                    }
                </>
            )}
        </div>
    )

}


export default NextDays