import React, { useEffect, Component } from 'react';
import * as p5 from "p5";
import { random, width, map, height, strokeWeight, stroke, line } from "p5";

import RainSketch from "../sketches/rain-sketch";

import './Seattle.css'
import "react-rain-animation/lib/style.css";

function Drop() {
  let x = p5.random(width);
  let y = p5.random(-500, -50);
  let z = p5.random(0, 20);
  let len = map(z, 0, 20, 10, 20);
  let yspeed = map(z, 0, 20, 1, 20);

  let fall = function() {
    y = y + yspeed;
    var grav = map(z, 0, 20, 0, 0.2);
    yspeed = yspeed + grav;

    if (y > height) {
      y = random(-200, -100);
      yspeed = map(z, 0, 20, 4, 10);
    }
  };

  let show = function() {
    var thick = map(z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(x, y, x, y + len);
  };
}

var drops = [];

class Seattle extends Component {
  //React ref for div reference we pass into p5
      sketchRef = React.createRef()

      //P5 instance mode
      initSketch = (p) => {
          p.setup = () => {
              //setup canvas and init values here
              p.createCanvas(p.windowWidth, p.windowHeight)
              for (var i = 0; i < 500; i++) {
                drops[i] = new Drop();
              }
          }

          p.draw = () => {
            p5.background(230, 230, 250);
            for (var i = 0; i < drops.length; i++) {
             drops[i].fall();
             drops[i].show();
            }
          }
      }

      componentDidMount() {
          //Create p5 canvas once component mounts
          let p5Canvas = new p5(this.initSketch, this.sketchRef.current)
      }

  render() {
    return (
      <div id="sketch-container">
        <div className="mySketch" ref={this.sketchRef} />
      </div>
    );
  }
}

export default Seattle;
