import React,{useState,useEffect} from 'react';
import Header from "../common/Header";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';

function PropertySearch() {

    const [data,setData] = useState([]);
    const [color,setColor] = useState("");
    const [fracture,setFracture] = useState("");
    const [habit,setHabit] = useState("");
    const [hardness,setHardness] = useState("");
    const [luster,setLuster] = useState("");
    const [op,setOp] = useState("");
    const [sg,setSg] = useState("");
    const [streak,setStreak] = useState("");
    const [transparency,setTransparency] = useState("");
    const query = `http://178.128.137.135/api/propertySearch?
    color=${color}&streak=${streak}&
    luster=${luster}&hardness=${hardness}&
    transparency=${transparency}&
    op=${op}&sg=${sg}&fracture=${fracture}&
    habit=${habit}`;
    
    useEffect(()=>{
        propertySearch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);

    async function propertySearch(){
        let result= await axios.get(query)
        console.log(result.data[0].mineral);
        setData(result);
    }

    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Property Search</h1>
            <input type="text" className="form-control" onChange={(e)=>setColor(e.target.value)} placeholder="color (example:pink)"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setFracture(e.target.value)} placeholder="facture (example:concoidal)"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setHabit(e.target.value)} placeholder="habit (example:prismatic)"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setHardness(e.target.value)} placeholder="hardness (example:7-8)"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setLuster(e.target.value)} placeholder="luster (example:vitreous)"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setOp(e.target.value)} placeholder="optical properties (example:none)"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setSg(e.target.value)} placeholder="specific gravity (example:medium)"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setStreak(e.target.value)} placeholder="streak (example:colorless)"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setTransparency(e.target.value)} placeholder="transparency (example:translucent)"></input><br/>
            <><button className="btn btn-secondary" onClick={propertySearch}>Search</button><br/></>
        </div>
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
                    data.data !== undefined ?
                    data.data.map((mineral)=>
                    <tr>
                            <td className='hide'><h4>{mineral.mineral}</h4></td>
                            <td className='hide'>
                                <Link className="group-hover" to={"/displayGroup/?group="+mineral.group}>{mineral.group}</Link>
                            </td>
                            <td className='hide'><p>{mineral.description}</p></td>
                            <td>
                                <img className='min-pic' src={"http://178.128.137.135/"+mineral.image_path} alt="Mineral pic"/>
                                <h4 className='hideBig'>Name: {mineral.mineral}</h4>
                                <h5 className='hideBig'>
                                    Group: <Link className="group-hover" to={"/displayGroup/?group="+mineral.group}>{mineral.group}</Link>
                                </h5>
                                <p className='hideBig'><b>Description: </b>{mineral.description}</p>
                            </td>
                        </tr>    
                    ):
                    <>
                    <br/>
                    <h1 classname="text-center">Mineral not in out database yet</h1>
                    </>
                }
            </tbody>            
        </Table>
        </div>
        </>
    )
}

export default PropertySearch;
