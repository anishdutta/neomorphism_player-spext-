import "./css/style.css";
import "./css/responsive.css";
import Playerinfo from "./components/player-info";
import Player from "./components/Player";
import { useState, useRef } from "react";
import data from "./data";
import styled from "styled-components";

function App() {
  const audioRef = useRef(null);


  const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

  const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

  const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
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

		if (isPlaying) {
			audioRef.current.play();
		}
	};



  

  return (
    <SongImg2 color={currentSong.color[0]}>
      <div className="container myPlayer">
      <Playerinfo   currentSong={currentSong} />
      <Player
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}
      setCurrentSong={setCurrentSong}
      audioRef={audioRef}
      songInfo={songInfo}
      setSongInfo={setSongInfo}
      songs={songs}
      setSongs={setSongs}/>
      <audio
				onLoadedMetadata={updateTimeHandler}
				onTimeUpdate={updateTimeHandler}
				onEnded={songEndHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>
    </div>
    </SongImg2>  
    
  ) ;
}

const  SongImg2 = styled.div`
width: 100%;
height: 100vh !important;
position: absolute;
top:0;

background-color: ${props => props.color};
`

export default App;
