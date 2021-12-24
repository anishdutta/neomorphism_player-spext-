import { v4 as uuidv4 } from "uuid";
function chillHop()  {
	return [
		{
			name: "Purple Haze",
			cover:
				"https://i.ibb.co/GT3qytb/codex-omega.png",
			artist: "Jimi Hendrix",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
			color: ["#E2DDFF", "#917CE4"],
      album:"Woodstock",
			id: uuidv4(),
			active: true,
		},
		{
			name: "Daylight",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
			color: ["#EF8EA9", "#ab417f"],
      album:"Woodstock",
			id: uuidv4(),
			active: false,
		},
		{
			name: "Keep Going",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
			color: ["#CD607D", "#c94043"],
      album:"Woodstock",
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nightfall",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
			color: ["#EF8EA9", "#ab417f"],
      album:"Woodstock",
			id: uuidv4(),
			active: false,
		},
		
		//ADD MORE HERE
	];
}

export default chillHop;
