import { useEffect, useState } from "react";
import { Weather } from "../model/Weather";
import { GetWeatherData } from "../services/WeatherServices";

export function WeatherForecast() {
    const [weather, setWeather] = useState<Weather>();

    //useEffect hook
    useEffect(() => {
        //call our api and put stuff on the screen
        GetWeatherData().then(data => setWeather(data));
    }, []);
    //blank array it runs once

    //everytime weather changes, this useEffect will be run.
    useEffect(() => {
        console.log(weather);
    }, [weather])
    //dependency is added (weather) - it will watch this dependency and when it changes, it will run.

    let periods = weather?.properties.periods;

    let displayPeriods = periods?.map((period) => 
    <ul>
        <li><img src={period.icon}></img></li>
        <li>{period.name}</li>
        <li>{period.icon}</li>
        <li>{period.detailedForecast}</li>
        <li>{period.temperature}{period.temperatureUnit}</li>
    </ul>
    );

    return (
        <div className="WeatherForecast">
            { weather !== undefined && <>{displayPeriods}</> }
        </div>
    )
}

//useEffect is for any side effects. It can run when we tell it to.
//add a ,[] so that it runs once as a second argument. 
//We'll call API get our JSON and put that JSON on the screen. We only want it to happen once.
//This saves companies money, becuase if you keep having it run or render the function, it'll charge them $$
//components have a lifecycle- used more for class-based components - when a component mounts is when it first comes into being

//{ weather !== undefined && <>{displayPeriods}</> }
//don't display information until data gets back to me
