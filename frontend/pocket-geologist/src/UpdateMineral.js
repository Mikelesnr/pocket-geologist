import Header from "./Header"
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function UpdateMineral() {

    const navigate = useNavigate();

    useEffect(()=>{
        if (!localStorage.getItem('user-info')){
            navigate("/Login")
        }
    })

    return (
        <>
        <Header/>
        <div>
            <h1>Update Mineral Page</h1>
        </div>
        </>
    )
}

export default UpdateMineral
