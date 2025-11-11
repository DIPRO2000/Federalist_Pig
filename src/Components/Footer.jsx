import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";  
import {faInstagram} from "@fortawesome/free-brands-svg-icons"; 
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="h-[15vh] w-screen bg-black pt-2 flex flex-row">
        <div className="ml-10 cursor-pointer">
          <FontAwesomeIcon icon={faFacebook} className="text-3xl pr-3 text-yellow-400 hover:text-white hover:scale-105" />
          <FontAwesomeIcon icon={faInstagram} className="text-3xl text-yellow-400 hover:text-white hover:scale-105" />
        </div>
        <div className="absolute right-10">
            <ul className="flex flex-row gap-5  text-yellow-400">
                <li className="font-bold cursor-pointer hover:text-white hover:scale-105">ABOUT</li>
                <li className="font-bold cursor-pointer hover:text-white hover:scale-105">CONTACT</li>
                <li className="font-bold cursor-pointer hover:text-white hover:scale-105">LOCATION</li>
                <li className="font-bold cursor-pointer hover:text-white hover:scale-105">AWARDS</li>
                <li className="font-bold cursor-pointer hover:text-white hover:scale-105">TERMS</li>
                <li className="font-bold cursor-pointer hover:text-white hover:scale-105"><NavLink to='/privacy'>PRIVACY</NavLink></li>
                <li className="font-bold cursor-pointer hover:text-white hover:scale-105">EMAIL SIGNUP</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
