//DRY principle - don't repeat yourself
//we divide it up so it's easier to fix
import axios from 'axios';
import { Weather } from '../model/Weather';


//promise -promise to give us some kind of response, doesn't need to do api calls
//asynchronous - we'll make this api call and eventually we'll get something back, not sure when though
//synchronous - make a call and get it back right away

export function GetWeatherData() : Promise<Weather> {
    return axios.get<Weather>('https://api.weather.gov/gridpoints/DTX/65,33/forecast')
        .then(response => response.data);
}