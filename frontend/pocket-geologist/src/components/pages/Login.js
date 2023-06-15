import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../common/Header';

function Login() {

    useEffect(()=>{
        if (localStorage.getItem('user-info')){
            navigate("/")
        }
    })

    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    async function signin(){
        let item = {email,password};

        //Fetching user registration api
        let result = await fetch("http://178.128.137.135/api/login",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });

        result = await result.json();
        if (!result.error){
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate("/")
        }
        else{
            localStorage.clear();
            alert("Email or password incorrect");
        }
    }

    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Login</h1>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
            <br></br>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
            <br></br>
            <button onClick={signin} className='btn btn-secondary'>Sign In</button>
            
        </div>
        </>
    )
}

export default Login;