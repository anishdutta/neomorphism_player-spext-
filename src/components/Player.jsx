import React from "react";
import play from "../Assets/Icons/Group 3 (1).png";
import pause from "../Assets/Icons/Group 3 (1).png";
import previous from "../Assets/Icons/Vector 1.png";
import next from "../Assets/Icons/Vector 2.png";
import suffle from "../Assets/Icons/Group (1).png";
import suffle2 from "../Assets/Icons/Group (1).png";
import suffle3 from "../Assets/Icons/Group (1).png";
import suffle4 from "../Assets/Icons/Group (1).png";
import { useEffect } from "react";

const Player = () => {
  useEffect(() => {
    const slider = document.getElementById("Myline");
    const min = slider.min;
    const max = slider.max;
    const value = slider.value;
    // background: linear-gradient(327.56deg, #5D24D6 19.23%, #7E74ED 81.76%);
    slider.style.background = `linear-gradient(to right, #7E74ED 0%, #7E74ED ${
      ((value - min) / (max - min)) * 100
    }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;
    slider.style.boxShadow = `box-shadow: 0px 2px 3px rgba(43, 72, 180, 0.4), inset 1px 1px 3px rgba(255, 255, 255, 0.4);`;

    slider.oninput = function () {
      this.style.background = `linear-gradient(to right, #7E74ED 0%, #7E74ED ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 100%)`;
      this.style.boxShadow = `box-shadow: 0px 2px 3px rgba(43, 72, 180, 0.4), inset 1px 1px 3px rgba(255, 255, 255, 0.4);`;
    };
  });
  return (
    <div className="player">
      <div className="player-control ">
        <div className="row">
          <div className="col vert-center col-md-1">
            <img alt="PurpleHaze" src={suffle} width="15px" />
          </div>
          <div className="col col-md-1 vert-center">
            <img alt="PurpleHaze" src={suffle2} width="15px" />
          </div>
          <div className="ctrl col col-md-2">
            <div className="control-btn-sm">
              <div className="purple-sm">
                <img alt="PurpleHaze" src={previous} width="5px" />
              </div>
            </div>
          </div>
          <div className="ctrl  col-md-4">
            <div className="control-btn">
              <div className="purple">
                <img alt="PurpleHaze" src={pause} width="15px" />
              </div>
            </div>
          </div>
          <div className="ctrl  col col-md-2 ">
            <div className="control-btn-sm">
              <div className="purple-sm">
                <img alt="PurpleHaze" src={next} width="5px" />
              </div>
            </div>
          </div>
          <div className="col col-md-1 vert-center">
            <img alt="PurpleHaze" src={suffle3} width="15px" />
          </div>
          <div className="col col-md-1 vert-center">
            <img alt="PurpleHaze" src={suffle4} width="15px" />
          </div>
        </div>
      </div>
      <div className="player-timeline">
        <input
          className="outer-line"
          id="Myline"
          type="range"
          min="0"
          max="45"
          defaultValue="3"
        />
        <div className="timline-details">
          <h5 className="right-align">2:00:01</h5>
          <h5 className="left-align">2:00:01</h5>
        </div>
      </div>
    </div>
  );
};

export default Player;
