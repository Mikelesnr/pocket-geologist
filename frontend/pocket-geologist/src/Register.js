import React,{useState} from 'react';

function Register() {

    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    async function signup()
    {
        let item={name,password,email};
        console.warn(item);

        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })
        result = await result.json()
        console.warn("result",result)
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
            <br></br>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
            <br></br>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
            <br></br>
            <button onClick={signup()} className='btn btn-secondary'>Sign Up</button>
        </div>
    )
}

export default Register