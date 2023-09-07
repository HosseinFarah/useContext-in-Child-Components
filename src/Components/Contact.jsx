import { useContext, useEffect, useState } from "react"
import { siteName } from "../App"

export const Contact=()=>{
  const [newName,setNewName] = useState("");
  const {name,setName} = useContext(siteName);
  useEffect(()=>{
    
  },[name])
    return (
        <div className="container mt-5">
      <h1>Set Name</h1>
      <h6>{name}</h6>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" onChange={(e)=>setNewName(e.target.value)}/>
          <button onClick={()=>setName(newName)}>Chenge Name</button>
        </div>

    </div>
    )
}