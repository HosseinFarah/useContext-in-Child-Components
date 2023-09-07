import { useContext, useState } from "react";
import { siteName } from "../App";

export const Footer = () => {
  const {name,setName}= useContext(siteName);
  const [inputname,setInputname] = useState("")
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fab fa-facebook"></i> Facebook
              </li>
              <li>
                <i className="fab fa-twitter"></i> Twitter
              </li>
              <li>
                <i className="fab fa-instagram"></i> Instagram
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Me</h5>
            <address>
            Finland
              <br />
              TAMPERE
              <br />
              Email: h.farah61@gmail.com
            </address>
          </div>
          <div className="col-md-3">
          <input type="text" onChange={(e)=>{return setInputname(e.target.value)}}/>
            <button onClick={()=>{
              const clearInput = document.querySelector("input");
              setName(inputname);
              clearInput.value="";
              }}>Set Site Name</button>
            <h5>{name}</h5>
          </div>
          <div className="col-md-4">
            <h5>Location</h5>
            {/* Replace the iframe src with your Google Maps embed code */}
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-71.123456!3d42.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQ4JzExLjMiTiA3McKwMTknMDkuMyJX!5e0!3m2!1sen!2sus!4v1606720907386!5m2!1sen!2sus"
              width="100%"
              height="250"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};
