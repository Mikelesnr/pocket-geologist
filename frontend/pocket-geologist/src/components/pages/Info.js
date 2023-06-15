import Header from "../common/Header";
import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Info() {

    const[tests,setTests] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const {data} = await axios.get(`http://localhost:8000/api/displayTests`);
        setTests(data);
    }
    
    return (
        <>
        <Header/>
        <div className="pdng-top mb">
            <h1>Information Page</h1>
            <h2>Mineral Tests</h2>
        {
            tests.map((test)=>
        <div className="pdng-top mb">
            <h3><Link className="group-hover" to={"/displayTest/?title="+test.title}>{test.title} Test</Link></h3>
        <div className="container">
            <br/>
            <img className=" info-img mb" src={`http://localhost:8000/${test.image_path}`} alt="streak test"></img>
            <br/>
            <Link className=" text-light text-decoration-none" to={"/displayTest/?title="+test.title}>
                <div className="col-sm-6 offset-3 text-light trunc" dangerouslySetInnerHTML={{ __html: test.description }} />
            </Link>
        </div>
        </div>
        )
        }
        </div>
        </>
    )
}

export default Info;