import Header from '../common/Header';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap';

function Display() {
    const [minerals,setMinerals]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async ()=>{
        const {data} = await axios.get("http://127.0.0.1:8000/api/displayAll");
        setMinerals(data);
    }

    console.log(minerals);

    return(
        <>
        <Header/>
        <h1>Minerals</h1>
        </>
    )

  

}

export default Display;
