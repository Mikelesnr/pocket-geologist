import React,{useState} from 'react';
import Header from "../common/Header";
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';

function DisplaySearch() {

    const[data,setData] = useState([]);

    async function search(key){

        let result= await fetch("http://localhost:8000/api/search/"+key);
        result = await result.json();
        console.log(result);
        setData(result);
    }    
    

    return (
        <>
        {
                localStorage.getItem('user-info') ?
                    <>
                    <Header/>
                    </> :
                    <></>
            }
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Search Mineral</h1>
            <br/>
            <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder='Search Mineral'></input><br/>
        </div>
        <div className="col-sm-8 offset-sm-2 pdng-top">
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
                    data.map((mineral)=>
                    <tr>
                            <td className='hide'><h4>{mineral.mineral}</h4></td>
                            <td className='hide'>
                                <Link className="group-hover" to={"/displayGroup/?group="+mineral.group}>{mineral.group}</Link>
                            </td>
                            <td className='hide'><p>{mineral.description}</p></td>
                            <td>
                                <img className='min-pic' src={"http://localhost:8000/"+mineral.image_path} alt="Mineral pic"/>
                                <h4 className='hideBig'>Name: {mineral.mineral}</h4>
                                <h5 className='hideBig'>
                                    Group: <Link className="group-hover" to={"/displayGroup/?group="+mineral.group}>{mineral.group}</Link>
                                </h5>
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

export default DisplaySearch;
