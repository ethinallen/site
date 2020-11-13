import React from 'react';
import Typing from 'react-typing-animation';
import './Gitter.css'
import Post from './Post'
import Particles from 'react-particles-js';


const Http = new XMLHttpRequest();
const url='https://7vcvnq8z2g.execute-api.us-east-2.amazonaws.com/staging';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
const Gitter = () => (
  <div id="gitter-body">
    <div id='title-container'><u>gitter.</u></div>

    <div id="typing-container">
      <Typing speed={40}>
        <span>Twitter...<Typing.Delay ms={1000} /> but for Github commit messages</span>
      </Typing>
    </div>

    <div id="geet-container">

      <div className="geet-column">
        <Post imagepath='https://avatars0.githubusercontent.com/u/18021093?s=400&u=4b7ae23dc40b990d78d8a147b3434d234891cec0&v=4'
              username="Madi Maddox"
              date='11/01/20'
              geet="These are sample geets! I anticipate that the lambda will be functioning soon :)"/>
      </div>

      <div className="geet-column">
        <Post imagepath='https://avatars3.githubusercontent.com/u/34930628?s=400&u=e8cff4a62b2e4f435a8f3ae164d28531686cf6de&v=4'
              username='Drew Emery'
              date='07/01/19'
              geet="These are sample geets! I anticipate that the lambda will be functioning soon :)"/>
      </div>

      <div className="geet-column">
        <Post imagepath='https://avatars1.githubusercontent.com/u/20630177?s=400&u=100bd2cf220723d35a98476eafd43aca9f38bd33&v=4'
              username='Chris Lambert'
              date='04/20/21'
              geet="These are sample geets! I anticipate that the lambda will be functioning soon :)"/>
      </div>
    </div>

    <div id="particle-container">


<Particles
  params={{
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.02
        },
        "move": {
            "direction": "right",
            "speed": 0.05
        },
        "size": {
            "value": 1
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
}} />
    </div>

  </div>
)

export default Gitter;
