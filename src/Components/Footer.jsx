import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";  
import {faInstagram} from "@fortawesome/free-brands-svg-icons"; 

const Footer = () => {
  return (
    <>
      <div className="h-[15vh] w-screen bg-black pt-2 flex flex-row">
        <div className="ml-10 cursor-pointer">
          <FontAwesomeIcon icon={faFacebook} className="text-3xl pr-3 text-yellow-400" />
          <FontAwesomeIcon icon={faInstagram} className="text-3xl text-yellow-400" />
        </div>
        <div>
            <ul className="flex flex-row gap-5 mx-auto text-yellow-400">
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>LOCATION</li>
                <li>AWARDS</li>
                <li>TERMS</li>
                <li>PRIVACY</li>
                <li>EMAIL SIGNUP</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
