import React from "react";
import pHaze from "../Assets/Images/codex-omega.png";
import share from "../Assets/Icons/Vector (10).png";
import playlist from "../Assets/Icons/Vector (9).png";
import styled from "styled-components";



function Playerinfo({ currentSong }) {
  const  SongImg = styled.div`
  display: block;
width: 95%;
height: 90%;
background-color: wheat;
border-radius: 30px;
background-image: url('${props => props.image}') ;
`
  return (
    <div className="player-info">
      <div className="inner-player-info row">
        <div className="frame col col-md-6">
          {/* <img alt="PurpleHaze" src={pHaze} /> */}
          {/* <songImg image = {'../Assets/Images/codex-omega.png'}>
          </songImg> */}
          <SongImg className="SongImg" image = {currentSong.cover}>

          </SongImg>
        </div>
        <div className="frame-content col col-md-6">
          <div className="nowplaying">
            <h5>Now Playing</h5>
          </div>
          <div className="songdetail">
            <h1>{currentSong.name}</h1>
            <h2>{currentSong.artist}</h2>
            <h5>{currentSong.album}</h5>
          </div>
          <div className="playicons row">
            <div className="col col-md-4 playicon">
              <div>
                <input type="checkbox" id="checkbox" />
                <label for="checkbox">
                  <svg
                    id="heart-svg"
                    width="50"
                    height="50"
                    viewBox="478 392 58 57"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group" transform="translate(467 392)">
                      <path
                        d="M28.9955034,43.5021565 C29.8865435,42.7463028 34.7699838,39.4111958 36.0304386,38.4371087 C41.2235681,34.4238265 43.9999258,30.3756814 44.000204,25.32827 C43.8745444,20.7084503 40.2276972,17 35.8181279,17 C33.3361339,17 31.0635318,18.1584833 29.5323721,20.1689268 L28.9999629,20.8679909 L28.4675537,20.1689268 C26.936394,18.1584833 24.6637919,17 22.181798,17 C17.6391714,17 14,20.7006448 14,25.3078158 C14,30.4281078 16.7994653,34.5060727 22.0294634,38.5288772 C23.3319753,39.530742 27.9546492,42.6675894 28.9955034,43.5021565 Z"
                        id="heart"
                        fill="url(#paint0_linear_4_59)"
                      />
                      <circle
                        id="main-circ"
                        opacity="0"
                        cx="29.5"
                        cy="29.5"
                        r="1.5"
                      />

                      <g
                        className="grp"
                        id="grp7"
                        opacity="0"
                        transform="translate(7 6)"
                      >
                        <circle
                          className="cir-a"
                          id="oval1"
                          cx="2"
                          cy="6"
                          r="2"
                        />
                        <circle
                          className="cir-b "
                          id="oval2"
                          cx="5"
                          cy="2"
                          r="2"
                        />
                      </g>

                      <g
                        className="grp"
                        id="grp6"
                        opacity="0"
                        transform="translate(0 28)"
                      >
                        <circle
                          className="cir-a"
                          id="oval1"
                          cx="2"
                          cy="7"
                          r="2"
                        />
                        <circle
                          className="cir-b"
                          id="oval2"
                          cx="3"
                          cy="2"
                          r="2"
                        />
                      </g>

                      <g
                        className="grp"
                        id="grp3"
                        opacity="0"
                        transform="translate(52 28)"
                      >
                        <circle
                          className="cir-b"
                          id="oval2"
                          cx="2"
                          cy="7"
                          r="2"
                        />
                        <circle
                          className="cir-a"
                          id="oval1"
                          cx="4"
                          cy="2"
                          r="2"
                        />
                      </g>

                      <g
                        className="grp"
                        id="grp2"
                        opacity="0"
                        transform="translate(44 6)"
                      >
                        <circle
                          className="cir-b"
                          id="oval2"
                          cx="5"
                          cy="6"
                          r="2"
                        />
                        <circle
                          className="cir-a"
                          id="oval1"
                          cx="2"
                          cy="2"
                          r="2"
                        />
                      </g>

                      <g
                        className="grp"
                        id="grp5"
                        opacity="0"
                        transform="translate(14 50)"
                      >
                        <circle
                          className="cir-a"
                          id="oval1"
                          cx="6"
                          cy="5"
                          r="2"
                        />
                        <circle
                          className="cir-b"
                          id="oval2"
                          cx="2"
                          cy="2"
                          r="2"
                        />
                      </g>

                      <g
                        className="grp"
                        id="grp4"
                        opacity="0"
                        transform="translate(35 50)"
                      >
                        <circle
                          className="cir-a"
                          id="oval1"
                          cx="6"
                          cy="5"
                          r="2"
                        />
                        <circle
                          className="cir-b"
                          id="oval2"
                          cx="2"
                          cy="2"
                          r="2"
                        />
                      </g>

                      <g
                        className="grp"
                        id="grp1"
                        opacity="0"
                        transform="translate(24)"
                      >
                        <circle
                          className="cir-a"
                          id="oval1"
                          cx="2.5"
                          cy="3"
                          r="2"
                        />
                        <circle
                          className="cir-b"
                          id="oval2"
                          cx="7.5"
                          cy="2"
                          r="2"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_4_59"
                        x1="59.432"
                        y1="50.3263"
                        x2="9.5359"
                        y2="2.42089"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color={currentSong.color[0]} />
                        <stop offset="1" stop-color={currentSong.color[1]} />
                      </linearGradient>
                    </defs>
                  </svg>
                </label>
              </div>
            </div>
            <div className="col col-md-4 playicon">
              <img alt="PurpleHaze" src={playlist} />
            </div>
            <div className="col col-md-4 playicon share-btn">
              <img alt="PurpleHaze" src={share} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playerinfo;
