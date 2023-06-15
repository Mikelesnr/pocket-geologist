import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Header from "components/common/Header";

function Weather() {

    const [weather,setWeather] = useState([]);
    const [city,setCity] = useState("");
    

    useEffect(()=>{
        setWeather([]);
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchData = async () => {
        const { data } = await axios.get(`http://178.128.137.135/api/weather/${city}`);
        setWeather(data);
    }
    // let myCity=weather.name?weather.name:"Harare";
    // let myCountry=weather.sys.country?weather.sys.country:"ZW" 
    if(weather.name!== undefined){
    console.log(weather.name);
    }

    return (
        <>
        <Header />
        <div className="pdng-top pdng-top bg-danger">
            <h1>Weather</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" className="form-control" onChange={(e)=>setCity(e.target.value)} placeholder="Enter City"></input><br/>
                <button onClick={fetchData} className="btn btn-secondary">submit</button><br/>
                { weather.name!== undefined && weather.sys.country!== undefined ?<h3>{weather.name},{weather.sys.country}</h3>:<></> }
          </div>
          <div className='col-sm-8 offset-sm-2 pdng-top'>
        <Table className="mb">
            {weather.name !== undefined ?
            <>
            <thead className='hide'>
            <tr>
                <th>Type</th>
                <th>Temparature</th>
                <th>Description</th>
                <th>Image</th>
            </tr>
            </thead>
            </>
            :<></>}
            <tbody>
                {
                    weather.name !== undefined ?
                    <tr>
                            <td className='hide'><h4>{weather.weather[0].main}</h4></td>
                            <td className='hide'>{weather.main.temp}°C</td>
                            <td className='hide'><p>{weather.weather[0].description}</p></td>
                            <td>
                                <img id="wicon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon"/>
                                <h4 className='hideBig'>Name: {weather.weather[0].main}</h4>
                                <h5 className='hideBig'>Teperature:{weather.main.temp}°C</h5>
                                <p className='hideBig'><b>Description: </b>{weather.weather[0].description}</p>
                            </td>
                        </tr>    
                    :
                    <>
                    </>
                }
            </tbody>            
        </Table>
        </div>
        </div>
        </>
    )
}

export default Weather;
