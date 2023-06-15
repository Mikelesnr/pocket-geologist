import Header from "../common/Header"
import React,{useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function UpdateMineral() {
  const [search]=useSearchParams();
  const checkValue = search.get('name');

    const [mineral,setMineral]=useState("");
    const [id,setId] = useState("");
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

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const fetchData = async () => {
        const { data } = await axios.get("http://178.128.137.135/api/displayOne/"+checkValue);
        setId(data.id);
        setMineral(data);
        setName(data.mineral);
        setColor(data.color);
        setFracture(data.fracture);
        setHabit(data.habit);
        setHardness(data.hardness);
        setLuster(data.luster);
        setOp(data.op);
        setSg(data.sg);
        setGroup(data.group);
        setStreak(data.streak);
        setTransparency(data.transparency);
        setDescription(data.description);
        setFile(data.file);
    }
    console.log(id,name,color,luster,streak,habit,hardness,transparency,description,op,sg,group,file)


    async function addUpdate(){
        const formData = new FormData();
        formData.append("id",id)
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
        let result = await fetch("http://178.128.137.135/api/updateMineral",{
            method:'POST',
            body:formData,
        });
        alert("Data has been saved")
    }

  return (
    <>
    <Header/>
    <div className="col-sm-6 offset-sm-3 pdng-top mb">
            <h1>Update Mineral</h1>
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} defaultValue={mineral.mineral}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setColor(e.target.value)} defaultValue={mineral.color}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setFracture(e.target.value)} defaultValue={mineral.fracture}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setHabit(e.target.value)} defaultValue={mineral.habit}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setHardness(e.target.value)} defaultValue={mineral.hardness}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setLuster(e.target.value)} defaultValue={mineral.luster}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setOp(e.target.value)} defaultValue={mineral.op}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setSg(e.target.value)} defaultValue={mineral.sg}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setStreak(e.target.value)} defaultValue={mineral.streak}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setGroup(e.target.value)} defaultValue={mineral.group}></input><br/>
            <input type="text" className="form-control" onChange={(e)=>setTransparency(e.target.value)} defaultValue={mineral.transparency}></input><br/>
            <textarea type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} defaultValue={mineral.description}></textarea><br/>
            <h3>Select Image</h3><br/>
            <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])} defaultValue={mineral.image_path}></input><br/>
            <img src={"http://178.128.137.135/"+mineral.image_path} className="imgSize" alt="pic"></img><br/>
            <><button className="btn btn-secondary" onClick={addUpdate}>Update Mineral</button><br/></>
        </div>
    </>
  );
}

export default UpdateMineral
