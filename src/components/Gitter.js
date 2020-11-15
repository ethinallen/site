import React, { useState, useRef } from 'react';
import './Gitter.css'
import Geets from './Geets'
import Particles from 'react-particles-js'
import Typing from 'react-typing-animation'

function Gitter() {
  const [geets, updateGeets] = useState([]);
  const authorRef = useRef();
  const baseURL = 'https://7vcvnq8z2g.execute-api.us-east-2.amazonaws.com/staging/fetch/'

    function handleSubmit(event) {
      const author = authorRef.current.value
      event.preventDefault()
      fetch(baseURL + author)
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
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

        <div id='geet-conatainer'>
          <Geets geets={geets} />
        </div>
        <div id="particle-container">
        <Particles
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
