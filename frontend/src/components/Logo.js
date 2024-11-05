import React from "react";
import logo from "./logo.jpg"

const Logo = () => {
    return (
        <div>
            <img
                src={logo} 
                alt="Company Logo" 
                style={{ width: '100px', height: '50px' }} 
            />
        </div>
    );
};

export default Logo;
