import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../common/Header';

function Register() {

    useEffect(()=>{
        if (localStorage.getItem('user-info')){
            navigate("/")
        }
    })

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    async function signup(){
        let item = {name,email,password};

        //Fetching user registration api
        let result = await fetch("http://localhost:8000/api/register",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });

        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate("/")
    }

    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
            <br></br>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
            <br></br>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
            <br></br>
            <button onClick={signup} className='btn btn-secondary'>Sign Up</button>
        </div>
        </>
    )
}

export default Register