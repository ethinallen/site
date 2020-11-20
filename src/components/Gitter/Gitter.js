import React, { useState, useRef } from 'react';
import Particles from 'react-particles-js'
import Typing from 'react-typing-animation'
import { Grid } from 'semantic-ui-react'
import ReactGA from 'react-ga';
import Geets from './Geets'

import './Gitter.css'

console.log(window.location.pathname);
ReactGA.pageview(window.location.pathname + window.location.search);


function Gitter() {

  const [geets, updateGeets] = useState([]);
  const authorRef = useRef();
  const baseURL = 'https://7vcvnq8z2g.execute-api.us-east-2.amazonaws.com/staging/fetch/'

    function handleSubmit(event) {
      event.preventDefault()
      const author = authorRef.current.value
      fetch(baseURL + author)
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        updateGeets(myJson['response']);
      })
      authorRef.current.value = null;
    }

    return (
      <div id="gitter-body">

        <div id='title-container'>
          <u>gitter.</u>

          <div id="description">
            <Typing speed={40}>
              <span>Twitter...<Typing.Delay ms={1000} /> but for Github commit messages</span>
            </Typing>
          </div>

        </div>


        <form className="ui large form" onSubmit={handleSubmit}>
          <div className="field">
            <input ref={authorRef} type="text" placeholder="discover geets" />
          </div>
        </form>

        <div id="grid-container">
          <Grid centered={true} columns={1}>
            <Geets geets={geets} />
          </Grid>
        </div>

        <div id="particle-container">
          <Particles
            height={window.innerHeight}
            width={window.innerWidth}
            params={{
        	    "particles": {
        	        "number": {
        	            "value": 30
        	        },
        	        "size": {
        	            "value": 4
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
        	}} />
        </div>

      </div>
    );
}

export default Gitter;
