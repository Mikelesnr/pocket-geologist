import React,{useState} from 'react';
import Header from "../common/Header";

function AddMineral() {

    const [name,setName] = useState("");
    const [color,setColor] = useState("");
    const [fracture,setFracture] = useState("");
    const [habit,setHabit] = useState("");
    const [hardness,setHardness] = useState("");
    const [luster,setLuster] = useState("");
    const [op,setOp] = useState("");
    const [sg,setSg] = useState("");
    const [group,setGroup] = useState("");
    const [streak,setStreak] = useState("");
    const [transparency,setTransparency] = useState("");
    const [description,setDescription] = useState("");
    const [file,setFile] = useState("");
    
    async function addMineral(){
        const formData = new FormData();
        formData.append("name",name)
        formData.append("color",color)
        formData.append("fracture",fracture)
        formData.append("habit",habit)
        formData.append("hardness",hardness)
        formData.append("luster",luster)
        formData.append("op",op)
        formData.append("sg",sg)
        formData.append("group",group)
        formData.append("streak",streak)
        formData.append("transparency",transparency)
        formData.append("description",description)
        formData.append("file",file)
        // eslint-disable-next-line no-unused-vars
        let result = await fetch("http://178.128.137.135/api/addMineral",{
            method:'POST',
            body:formData,
        });
        alert("Data has been saved")
    }

    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3 pdng-top">
            <h1>Add Mineral</h1>
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="name"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setColor(e.target.value)} placeholder="color"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setFracture(e.target.value)} placeholder="facture"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setHabit(e.target.value)} placeholder="habit"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setHardness(e.target.value)} placeholder="hardness"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setLuster(e.target.value)} placeholder="luster"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setOp(e.target.value)} placeholder="optical properties"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setSg(e.target.value)} placeholder="specific gravity"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setStreak(e.target.value)} placeholder="streak"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setGroup(e.target.value)} placeholder="group"></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setTransparency(e.target.value)} placeholder="transparency"></input><br/>
            <textarea type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder="description"></textarea><br/>
            <h3>Select Image</h3><br/>
            <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])} placeholder="image"></input><br/>
            <><button className="btn btn-secondary mb" onClick={addMineral}>Add Mineral</button><br/></>
        </div>
        </>
    )
}

export default AddMineral
