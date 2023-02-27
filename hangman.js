const words = ['lebanon', 'beirut'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let guessesLeft = 6;

const wordEl = document.querySelector('#word');
const guessesLeftEl = document.querySelector('#guesses-left');
const guessedLettersEl = document.querySelector('#guessed-letters');
const guessInput = document.querySelector('#guess');
const guessButton = document.querySelector('button[type="submit"]');
const resetButton = document.querySelector('#reset');

