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

//Destructuring en arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

//Sin destructuracion 
const trunks = dbz[3] || "No hay personaje";

//Con destructuracion
const [ p1, p2, p3 ] = dbz;
console.log('Personaje 3 :', p3);

//Otra forma mejor aun y mas compacta

const [ , , freezer ]: string[] = ['Goku', 'Vegeta', 'Freezer'];
console.error('Personaje 3:', freezer);

//Poniendo valores por defecto para evitar undefined
const [ , , sandia = 'Not found' ]: string[] = ['manzana', 'pera'];

console.log('La sandia:', sandia);


export {};