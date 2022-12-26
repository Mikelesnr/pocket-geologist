import { useState,useEffect } from "react";
import axios from "axios";

function Weather() {

    const [weather,setWeather] = useState([]);
    const [city,setCity] = useState("");
    

    useEffect(()=>{
        setWeather({
"coord": {
"lon": 31.0539,
"lat": -17.8294
},
"weather": [
{
"id": 804,
"main": "Clouds",
"description": "overcast clouds",
"icon": "04n"
}
],
"base": "stations",
"main": {
"temp": 15.2,
"feels_like": 15.07,
"temp_min": 15.2,
"temp_max": 15.2,
"pressure": 1019,
"humidity": 88,
"sea_level": 1019,
"grnd_level": 857
},
"visibility": 10000,
"wind": {
"speed": 3.73,
"deg": 125,
"gust": 10.74
},
"clouds": {
"all": 97
},
"dt": 1671739809,
"sys": {
"country": "ZW",
"sunrise": 1671679098,
"sunset": 1671726607
},
"timezone": 7200,
"id": 890299,
"name": "Harare",
"cod": 200
});
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchData = async () => {
        const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city?city:"london"+"&appid=8bc66f0012a8b260072157ed4c04b2b4&units=metric");
        setWeather(data);
    }
    // let myCity=weather.name?weather.name:"Harare";
    // let myCountry=weather.sys.country?weather.sys.country:"ZW" 

    return (
        <>
        <div className="pdng-top pdng-top">
            <h1>Local Weather</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" className="form-control" onChange={(e)=>setCity(e.target.value)} placeholder="Enter City"></input><br/>
                {/* <h3>{myCity},{myCountry}</h3> */}
          </div>
        </div>
        </>
    )
}

export default Weather;
