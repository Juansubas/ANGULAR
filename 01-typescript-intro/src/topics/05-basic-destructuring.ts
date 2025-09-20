interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer : AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015
  }
}

const {song, details } = audioPlayer;

const { author } = details;
//Para renombrar
//const {song: cancion, details} = audioPlayer;

console.log('Song :', song);
console.log('Author :', author);

// 3 MIN
export {};