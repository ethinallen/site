import React from "react";
import "./Sophie.css";
import Particles from 'react-particles-js';

export default () => {
  return (
    <body>

      <div id="greeting">
        <p>
      </div>

      <div id="particleContainer">
        <Particles
          params = {{
          	    "particles": {
          	        "number": {
          	            "value": 100
          	        },
          	        "size": {
          	            "value": 5
          	        }
          	    },
          	    "interactivity": {
          	        "events": {
          	            "onhover": {
          	                "enable": true,
          	                "mode": "repulse"
          	            }
          	        }
          	    }
              }}
          />
      </div>
    </body>
  );
};
