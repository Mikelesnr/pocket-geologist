import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();
    const removeItem = () => localStorage.removeItem("user-info");
    
    useEffect(()=>{
        removeItem()
        if (!localStorage.getItem('user-info')){
            navigate("/Login")
        }
    })
    return (
        <div>
            <h1>Logging Out .....</h1>
        </div>
    )
}

export default Logout