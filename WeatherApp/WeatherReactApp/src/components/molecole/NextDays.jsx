const NextDays = (prop) => {
  return (
    <div className="">
      <h3 className='fs-1 mb-3'>Next Days</h3>
      <div className="d-flex flex-wrap">
        {prop.forecastList.map((list) => (
          <>
            {new Date(list.dt_txt).getHours().toString() == "15" ? (
              <div className="d-flex flex-column">
                {prop.daysOfWeek[new Date(list.dt_txt).getDay()]}
                <div>
                  <img
                    style={{position:"relative", left:"-20px"}}
                    src={`https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`}
                    alt=""
                  />{" "}
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default NextDays;
