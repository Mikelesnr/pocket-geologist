import Header from '../common/Header';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';

function Display() {
    const [minerals,setMinerals]=useState([]);

    useEffect(()=>{
        fetchData();
        },[]);


    const fetchData = async ()=>{
        const {data} = await axios.get("http://localhost:8000/api/displayAll");
        setMinerals(data);
        
    }

    console.log(minerals);

    return(
        <>
        <Header/>
        <div className='col-sm-8 offset-sm-2 pdng-top'>
        <h1>Minerals</h1>
        <Table className="mb">
            <thead className='hide'>
            <tr>
                <th>Name</th>
                <th>Group</th>
                <th>Description</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
                {
                    minerals.map((mineral)=>
                    <tr>
                            <td className='hide'><h4>{mineral.mineral}</h4></td>
                            <td className='hide'>{mineral.group}</td>
                            <td className='hide'><p>{mineral.description}</p></td>
                            <td>
                                <img className='min-pic' src={"http://localhost:8000/"+mineral.image_path} alt="Mineral pic"/>
                                <h4 className='hideBig'>Name: {mineral.mineral}</h4>
                                <h5 className='hideBig'>Group: {mineral.group}</h5>
                                <p className='hideBig'><b>Description: </b>{mineral.description}</p>
                            </td>
                        </tr>    
                    )
                }
            </tbody>            
        </Table>
        </div>
        
        </>
    )

  

}

export default Display;
