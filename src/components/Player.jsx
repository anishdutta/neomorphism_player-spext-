import React from "react";
import play from "../Assets/Icons/play (1).png";
import pause from "../Assets/Icons/Group 3 (1).png";
import previous from "../Assets/Icons/Vector 1.png";
import next from "../Assets/Icons/Vector 2.png";
import suffle from "../Assets/Icons/Group (2).png";
import suffle2 from "../Assets/Icons/Group (1).png";
import suffle3 from "../Assets/Icons/Group.png";
import suffle4 from "../Assets/Icons/Vector (12).png";
import { useEffect } from "react";
import styled from "styled-components";



const Player = ({
  currentSong,
	setCurrentSong,
	isPlaying,
	setIsPlaying,
	audioRef,
	songInfo,
	setSongInfo,
	songs,
	setSongs,
}) => {
  const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

  const togglePlayPauseIcon = () => {
    console.log(isPlaying);
		if (isPlaying === true) {
			return pause;
		} else {
			return play;
		}
	};

  const getTime = (time) => {
		let minute = Math.floor(time / 60);
		let second = ("0" + Math.floor(time % 60)).slice(-2);
		return `${minute}:${second}`;
	};

	const dragHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const skipTrackHandler = async (direction) => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if (direction === "skip-forward") {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
		} else if (direction === "skip-back") {
			if ((currentIndex - 1) % songs.length === -1) {
				await setCurrentSong(songs[songs.length - 1]);
				activeLibraryHandler(songs[songs.length - 1]);
			} else {
				await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
				activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
			}
		}
		if (isPlaying) {
			audioRef.current.play();
		}
	};

	const activeLibraryHandler = (newSong) => {
		const newSongs = songs.map((song) => {
			if (song.id === newSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);
	};


  useEffect(() => {
    const slider = document.getElementById("Myline");
    const  play = document.getElementById("play");

    const min = slider.min;
    const max = slider.max;
    const value = slider.value;
    // background: linear-gradient(327.56deg, #5D24D6 19.23%, #7E74ED 81.76%);
    slider.style.background = `linear-gradient(to right, ${currentSong.color[1]} 0%, ${currentSong.color[1]} ${
      ((value - min) / (max - min)) * 100
    }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;
    slider.style.boxShadow = `box-shadow: 0px 2px 3px rgba(43, 72, 180, 0.4), inset 1px 1px 3px rgba(255, 255, 255, 0.4);`;

    slider.oninput = function () {
      this.style.background = `linear-gradient(to right, ${currentSong.color[1]} 0%, ${currentSong.color[1]} ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 ${
        ((this.value - this.min) / (this.max - this.min)) * 100
      }%, #DEE2E6 100%)`;
      this.style.boxShadow = `box-shadow: 0px 2px 3px rgba(43, 72, 180, 0.4), inset 1px 1px 3px rgba(255, 255, 255, 0.4);`;
    };

      // $('#play').onClick( function(){
      // $(this).toggleClass('toggle');
      // });

    play.onclick = function (){
      this.classList.toggle('toggle');
    };
    
  });
  

const styles = {
  hoverStyle: {
    "boxShadow": '-3px -3px 5px #FFFFFF, 3px 3px 5px rgba(0, 0, 0, 0.05), inset 3px 3px 5px rgba(0, 0, 0, 0.05), inset -3px -3px 5px #FFFFFF',

    "&::-webkit-slider-thumb": { 
      'border-radius': '50%',
      'background': 'linear-gradient(327.56deg, #5D24D6 19.23%, #7E74ED 81.76%)'   
     },
  }
};


  return (
    <div className="player">
      <div className="player-control ">
        <div className="row">
          <div className="col vert-center col-md-1">
            <img alt="PurpleHaze" src={suffle3} width="15px" />
          </div>
          <div className="col col-md-1 vert-center">
            <img alt="PurpleHaze" src={suffle2} width="15px" />
          </div>
          <div className="ctrl col col-md-2 previous" >
            <div className="control-btn-sm" onClick={() => skipTrackHandler("skip-back")}>
            <PurpleDiv color={currentSong.color[1]} className="purple-sm">
                  <img alt="PurpleHaze" src={previous} width="5px" />
                </PurpleDiv>
                
            </div>
          </div>
          <div className="ctrl  col-md-4">
            <div className="control-btn"  onClick={playSongHandler} id="play">
                <PurpleDiv color={currentSong.color[1]} className="purple">
                  <div id="me"></div>
                </PurpleDiv>
              

            </div>
          </div>
          <div className="ctrl  col col-md-2 next">
            <div className="control-btn-sm" 					onClick={() => skipTrackHandler("skip-forward")}>
            <PurpleDiv color={currentSong.color[1]} className="purple-sm">
                <img alt="PurpleHaze" src={next} width="5px" />
              </PurpleDiv>
            </div>
          </div>
          <div className="col col-md-1 vert-center">
            <img alt="PurpleHaze" src={suffle} width="15px" />
          </div>
          <div className="col col-md-1 vert-center">
            <img alt="PurpleHaze" src={suffle4} width="15px" />
          </div>
        </div>
      </div>
      <div className="player-timeline">
        <input
          className="outer-line"
          style={styles.hoverStyle}
          id="Myline"
          type="range"
          onChange={dragHandler}
						min={0}
						max={songInfo.duration || 0}
						value={songInfo.currentTime}
        />
        <div className="timline-details">
          <h5 className="right-align">{getTime(songInfo.duration || 0)}</h5>
          <h5 className="left-align">{getTime(songInfo.currentTime || 0)}</h5>
        </div>
      </div>
    </div>
  );
};
const  PurpleDiv = styled.div`
  background: linear-gradient(159.16deg, ${props => props.color} 26.46%, rgba(63, 45, 137, 0) 116.55%);
`
export default Player;


