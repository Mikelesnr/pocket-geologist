import Header from "../common/Header"
import React,{useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function UpdateMineral() {
  // eslint-disable-next-line no-unused-vars
  const [search,setSearch]=useSearchParams();
    const checkValue = search.get('name');
    ;

    const [mineral,setMineral]=useState("")

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const fetchData = async () => {
        const { data } = await axios.get("http://127.0.0.1:8000/api/displayOne/"+checkValue);
        setMineral(data);
    }
    

  return (
    <>
    <Header/>
    <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Update Mineral</h1>
            <input type="text" className="form-control" defaultValue={mineral.mineral}></input><br/>
            <input type="text" className="form-control" defaultValue={mineral.color}></input><br/>
            <input type="text" className="form-control" defaultValue={mineral.fracture}></input><br/>
            <input type="text" className="form-control" defaultValue={mineral.habit}></input><br/>
            <input type="text" className="form-control" defaultValue={mineral.hardness}></input><br/>
            <input type="text" className="form-control" defaultValue={mineral.luster}></input><br/>
            <input type="text" className="form-control" defaultValue={mineral.op}></input><br/>
            <input type="text" className="form-control" defaultValue={mineral.sg}></input><br/>
            <input type="text" className="form-control" defaultValue={mineral.streak}></input><br/>
            <input type="text" className="form-control" defaultValue={mineral.group}></input><br/>
            <input type="text" className="form-control" defaultValue={mineral.transparency}></input><br/>
            <textarea type="text" className="form-control" defaultValue={mineral.description}></textarea><br/>
            <h3>Select Image</h3><br/>
            <input type="file" className="form-control" defaultValue={mineral.image_path}></input><br/>
            <img src={"http://127.0.0.1:8000/"+mineral.image_path} className="imgSize" alt="pic"></img><br/>
            <><button className="btn btn-secondary mb" >Update Mineral</button><br/></>
        </div>
    </>
  );
}

export default UpdateMineral
