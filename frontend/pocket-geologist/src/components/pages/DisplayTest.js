import Header from "../common/Header";
import React,{useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function DisplayTest(){
    const [search]=useSearchParams();
    const checkValue = search.get('title');
    const [test,setTest]=useState([]);

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        const {data} = await axios.get(`http://178.128.137.135/api/displayTest/${checkValue}`);
        setTest(data);
    }


    return(
        <>
        <Header/>
        {
        <div className="pdng-top mb">
            <h1>{test.title} Test</h1>
        <div className="container">
            <br/>
            <img className="mb info-img" src={`http://178.128.137.135/${test.image_path}`} alt="streak test"></img>
            <br/>
            <div className="mini-align" dangerouslySetInnerHTML={{ __html: test.description }} />
        </div>
        </div>
        }
        </>
    )
}

export default DisplayTest;