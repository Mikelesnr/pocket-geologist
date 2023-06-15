import Header from '../common/Header';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';

function UpdateDelete() {
    const [minerals, setMinerals] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const { data } = await axios.get("http://178.128.137.135/api/displayAll");
        setMinerals(data);

    }

    async function deleteOperation(n) {
        let result = await fetch("http://178.128.137.135/api/delete/" + n, {
            method: 'DELETE'
        });
        result = await result.json();
        alert(result);
        fetchData();
    }

    return (
        <>
            <Header />
            <div className='col-sm-8 offset-sm-2 pdng-top'>
                <h1>Minerals</h1>
                <Table>
                    <thead className='hide'>
                        <tr>
                            <th>Name</th>
                            <th>Group</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            minerals.map((mineral) =>
                                <tr>
                                    <td className='hide'><h4>{mineral.mineral}</h4></td>
                                    <td className='hide'>
                                        <Link className="group-hover" to={"/displayGroup/?group="+mineral.group}>{mineral.group}</Link>
                                    </td>
                                    <td className='hide'><p>{mineral.description}</p></td>
                                    <td>
                                        <img className='min-pic' src={"http://178.128.137.135/" + mineral.image_path} alt="Mineral pic" />
                                        <h4 className='hideBig'>Name: {mineral.mineral}</h4>
                                        <h5 className='hideBig'>
                                            Group: <Link className="group-hover" to={"/displayGroup/?group="+mineral.group}>{mineral.group}</Link>
                                        </h5>
                                        <p className='hideBig'><b>Description: </b>{mineral.description}</p>
                                        <span className='hideBig'></span>
                                    </td>
                                    <td>
                                        <span className='btn btn-update flex'><Link to={"/update/?name="+mineral.mineral}>Update</Link></span>
                                        <span className='btn btn-red flex' onClick={() => deleteOperation(mineral.mineral)}>Delete</span>
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

export default UpdateDelete;
