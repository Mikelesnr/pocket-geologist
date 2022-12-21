import { useState,useEffect } from "react";
import Header from "../common/Header"
import axios from "axios";

function Weather() {

    const [weather,setWeather] = useState([]);
    const [city,setCity] = useState("");


    useEffect(()=>{
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchData = async () => {
        const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=london&appid=8bc66f0012a8b260072157ed4c04b2b4&units=metric");
        setWeather(data);
    }
     
    return (
        <>
        <Header/>
        <div className="pdng-top pdng-top">
            <h1>Local Weather</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" className="form-control" onChange={(e)=>setCity(e.target.value)} placeholder="Enter City"></input><br/>
                <h3>{weather?weather.name:"city"},{weather?weather.sys.country:"country"}</h3>
          </div>
        </div>
        </>
    )
}

export default Weather;
