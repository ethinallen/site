import React, { Component } from 'react';
import './Gitter.css'
import Geets from './Geets'
import SearchBar from './SearchBar'
import Particles from 'react-particles-js'
import Typing from 'react-typing-animation'

class Gitter extends Component {
  constructor(props) {
        super(props);
        this.state = {id: '',
                      url: 'https://7vcvnq8z2g.execute-api.us-east-2.amazonaws.com/staging/fetch/',
                      data: {}
                    }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({id: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(this.state.url + this.state.id)
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData)
            this.setState({
                data:responseData
            })
        })
    }

  render() {

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

        <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="field">
                <input type="text" placeholer="discover user geets" value={this.state.id} onChange={this.handleChange} required/>
            </div>
        </form>

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
}

export default Gitter;
