import Header from "../common/Header"
import React,{useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function UpdateMineral() {
  // eslint-disable-next-line no-unused-vars
  const [search,setSearch]=useSearchParams();
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
        const { data } = await axios.get("http://localhost:8000/api/displayOne/"+checkValue);
        setMineral(data);
        setId(data.id);
    }


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
        let result = await fetch("http://localhost:8000/api/updateMineral",{
            method:'POST',
            body:formData,
        });
        //result= await result.json();
        console.log(result);
        console.log(formData);
        alert("Data has been saved")
    }
    console.log(name,color,fracture,habit,hardness,luster,op,sg,group,streak,transparency,description,file);
  
    console.log(mineral.image_path)

  return (
    <>
    <Header/>
    <div className="col-sm-6 offset-sm-3 pdng-top mb">
            <h1>Update Mineral</h1>
            <form>
            <input type="text" className="form-control" onSubmit={(e)=>setName(e.target.value)} defaultValue={mineral.mineral}></input><br/>
            <input type="text" className="form-control" onSubmit={(e)=>setColor(e.target.value)} defaultValue={mineral.color}></input><br/>
            <input type="text" className="form-control" onSubmit={(e)=>setFracture(e.target.value)} defaultValue={mineral.fracture}></input><br/>
            <input type="text" className="form-control" onSubmit={(e)=>setHabit(e.target.value)} defaultValue={mineral.habit}></input><br/>
            <input type="text" className="form-control" onSubmit={(e)=>setHardness(e.target.value)} defaultValue={mineral.hardness}></input><br/>
            <input type="text" className="form-control" onSubmit={(e)=>setLuster(e.target.value)} defaultValue={mineral.luster}></input><br/>
            <input type="text" className="form-control" onSubmit={(e)=>setOp(e.target.value)} defaultValue={mineral.op}></input><br/>
            <input type="text" className="form-control" onSubmit={(e)=>setSg(e.target.value)} defaultValue={mineral.sg}></input><br/>
            <input type="text" className="form-control" onSubmit={(e)=>setStreak(e.target.value)} defaultValue={mineral.streak}></input><br/>
            <input type="text" className="form-control" onSubmit={(e)=>setGroup(e.target.value)} defaultValue={mineral.group}></input><br/>
            <input type="text" className="form-control" onSubmit={(e)=>setTransparency(e.target.value)} defaultValue={mineral.transparency}></input><br/>
            <textarea type="text" className="form-control" onSubmit={(e)=>setDescription(e.target.value)} defaultValue={mineral.description}></textarea><br/>
            <h3>Select Image</h3><br/>
            <input type="file" className="form-control" onSubmit={(e)=>setFile(e.target.files[0])} defaultValue={mineral.image_path}></input><br/>
            <img src={"http://127.0.0.1:8000/"+mineral.image_path} className="imgSize" alt="pic"></img><br/>
            <><button className="btn btn-secondary" onClick={addUpdate}>Update Mineral</button><br/></>
            </form>
        </div>
    </>
  );
}

export default UpdateMineral
