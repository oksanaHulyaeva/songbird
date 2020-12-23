import { nanoid } from 'nanoid';
const idSize = 3;


const Data = [
  {
    category: 'Best classic',
    id: nanoid(idSize),
    content: ['str'],
  },
  {
    category: 'German',
    id: nanoid(idSize),
    content: ['str'],
  },
  {
    category: 'Russian',
    id: nanoid(idSize),
    content: ['str'],
  },
  {
    category: 'Modern',
    id: nanoid(idSize),
    content: ['str'],
  },
  {
    category: 'Modern',
    id: nanoid(idSize),
    content: ['str'],
  },
  {
    category: 'Opera and Ballet',
    id: nanoid(idSize),
    content: ['str'],
  },
]


// const Data = {
//   'Best Classic': [
//     {
//       composer: 'Mozart',
//       composition: 'Symphony No. 40',
//       id: '',
//       img: './assets/img/mozart.jpg',
//       audio: './assets/sounds/best/symphony40.mp3',
//       description: 'Mozart bla bla bla',
//     },
//     {
//       composer: 'Vivaldi',
//       composition: 'Concerto No. 4 in F minor "Winter", RV 297',
//       id: '',
//       img: './assets/img/vivaldi.jpg',
//       audio: './assets/sounds/best/winter.mp3',
//       description: 'Vivaldi bla bla bla',
//     },
//     {
//       composer: 'Wagner',
//       composition: 'Ride of the Valkyries',
//       id: '',
//       img: './assets/img/wagner.jpg',
//       audio: './assets/sounds/best/valkyries.mp3',
//       description: 'Wagner bla bla bla',
//     },
//     {
//       composer: 'Tchaikovsky',
//       composition: 'Swan Lake',
//       id: '',
//       img: './assets/img/tchaikovsky.jpg',
//       audio: './assets/sounds/best/swanlake.mp3',
//       description: 'Tchaikovsky bla bla bla',
//     },
//     {
//       composer: 'Bach',
//       composition: 'Toccata and Fugue in D Minor',
//       id: '',
//       img: './assets/img/bach.jpg',
//       audio: './assets/sounds/best/toccata.mp3',
//       description: 'Bach bla bla bla',
//     },
//     {
//       composer: 'Beethoven',
//       composition: 'Moonlight Sonata',
//       id: '',
//       img: './assets/img/beethoven.jpg',
//       audio: './assets/sounds/best/sonata.mp3',
//       description: 'Beethoven bla bla bla',
//     },
//   ],
//   'German': [
//     {
//       composer: 'Beethoven',
//       composition: 'Fur Elise',
//       id: '',
//       img: './assets/img/beethoven.jpg',
//       audio: './assets/sounds/german/elise.mp3',
//       description: 'Beethoven bla bla bla',
//     },
//     {
//       composer: 'Bach',
//       composition: 'Suite in B minor BWV 1067',
//       id: '',
//       img: './assets/img/bach.jpg',
//       audio: './assets/sounds/german/suite.mp3',
//       description: 'Bach bla bla bla',
//     },
//     {
//       composer: 'Mozart',
//       composition: 'Rondo Alla Turca',
//       id: '',
//       img: './assets/img/mozart.jpg',
//       audio: './assets/sounds/german/turkish.mp3',
//       description: 'Mozart bla bla bla',
//     },
//     {
//       composer: 'Johannes Brahms',
//       composition: 'Hungarian Dance No.5',
//       id: '',
//       img: './assets/img/brahms.jpg',
//       audio: './assets/sounds/german/hungarian.mp3',
//       description: 'Johannes Brahms bla bla bla',
//     },
//     {
//       composer: 'Dmitry Shostakovich',
//       composition: 'Waltz no. 2',
//       id: '',
//       img: './assets/img/shostakovich.jpg',
//       audio: './assets/sounds/german/waltz2.mp3',
//       description: 'Dmitry Shostakovich bla bla bla',
//     },
//     {
//       composer: 'Mikhail Glinka',
//       composition: 'Ruslan and Lyudmila, Overture',
//       id: '',
//       img: './assets/img/glinka.jpg',
//       audio: './assets/sounds/german/ruslan.mp3',
//       description: 'Mikhail Glinka bla bla bla',
//     },
//   ],
//   'Russian': [
//     {
//       composer: 'Sergei Prokofiev',
//       composition: 'Dance of the knights',
//       id: '',
//       img: './assets/img/prokifiev.jpg',
//       audio: './assets/sounds/russian/knights.mp3',
//       description: 'Prokofiev bla bla bla',
//     },
//     {
//       composer: 'Nikolay Rimsky-Korsakov',
//       composition: 'Flight of the bumblebee',
//       id: '',
//       img: './assets/img/rimsky.jpg',
//       audio: './assets/sounds/russian/bumblebee.mp3',
//       description: 'Rimsky-Korsakov bla bla bla',
//     },
//     {
//       composer: 'Pyotr Tchaikovsky',
//       composition: 'Lake In Moonlight',
//       id: '',
//       img: './assets/img/tchaikovsky.jpg',
//       audio: './assets/sounds/russian/moonlight.mp3',
//       description: 'Pyotr Tchaikovsky bla bla bla',
//     },
//     {
//       composer: 'Pyotr Tchaikovsky',
//       composition: 'Waltz of the Flowers',
//       id: '',
//       img: './assets/img/tchaikovsky.jpg',
//       audio: './assets/sounds/russian/flowers.mp3',
//       description: 'Pyotr Tchaikovsky bla bla bla',
//     },
//     {
//       composer: 'Dmitry Shostakovich',
//       composition: 'Waltz no. 2',
//       id: '',
//       img: './assets/img/shostakovich.jpg',
//       audio: './assets/sounds/russian/waltz2.mp3',
//       description: 'Dmitry Shostakovich bla bla bla',
//     },
//     {
//       composer: 'Mikhail Glinka',
//       composition: 'Ruslan and Lyudmila, Overture',
//       id: '',
//       img: './assets/img/glinka.jpg',
//       audio: './assets/sounds/russian/ruslan.mp3',
//       description: 'Mikhail Glinka bla bla bla',
//     },
//   ],
//   'Modern': [
//     {
//       composer: 'Ramin Djawadi',
//       composition: 'Game of Trones',
//       id: '',
//       img: './assets/img/djawadi.jpg',
//       audio: './assets/sounds/modern/trones.mp3',
//       description: 'Ramin Djawadi bla bla bla',
//     },
//     {
//       composer: 'Hans Zimmer',
//       composition: 'Airborne',
//       id: '',
//       img: './assets/img/zimmer.jpg',
//       audio: './assets/sounds/modern/airborne.mp3',
//       description: 'Hans Zimmer bla bla bla',
//     },
//     {
//       composer: 'Ludovico Einaudi',
//       composition: 'Fly',
//       id: '',
//       img: './assets/img/einaudi.jpg',
//       audio: './assets/sounds/modern/fly.mp3',
//       description: 'Wagner bla bla bla',
//     },
//     {
//       composer: 'Ennio Morricone',
//       composition: 'Chi Mai',
//       id: '',
//       img: './assets/img/morricone.jpg',
//       audio: './assets/sounds/modern/chimai.mp3',
//       description: 'Ennio Morricone bla bla bla',
//     },
//     {
//       composer: 'Goran Bregovic',
//       composition: 'Old Home Movie',
//       id: '',
//       img: './assets/img/bregovic.jpg',
//       audio: './assets/sounds/modern/oldhomemovie.mp3',
//       description: 'Goran Bregovic bla bla bla',
//     },
//     {
//       composer: 'Clint Mansell',
//       composition: 'Requiem for a Dream',
//       id: '',
//       img: './assets/img/mansell.jpg',
//       audio: './assets/sounds/modern/requiem.mp3',
//       description: 'Clint Mansell bla bla bla',
//     },
//   ],


// }

export default Data;