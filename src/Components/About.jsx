import { useContext } from "react";
import { siteName } from "../App";

export const About = () => {
const {name}=useContext(siteName)
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>show New State with useContext</h2>

          <h5 style={{color:"red"}}>{name}</h5>     
 
              
        </div>
        <div className="col-md-6">
          {/* Add an image here if you have one */}
        </div>
      </div>
    </div>
  );
};
