const words = ['lebanon', 'beirut', 'sefactory', 'fsw', 'software', 'engineer', 'developer', 'frontend', 'backend'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let guessesLeft = 6;

const wordEl = document.querySelector('#word');
const guessesLeftEl = document.querySelector('#guesses-left');
const guessedLettersEl = document.querySelector('#guessed-letters');
const guessInput = document.querySelector('#guess');
const guessButton = document.querySelector('button[type="submit"]');
const resetButton = document.querySelector('#reset');

function updateWord() {
    const letters = selectedWord.split('');
    // Map over each letter in the array and replace it with an underscore (_) if it hasn't been guessed yet,
    // or with the actual letter if it has been guessed
    const displayedLetters = letters.map(letter => guessedLetters.includes(letter) ? letter : '_');

    // Join the displayed letters back into a string separated by spaces
    const displayedWord = displayedLetters.join(' ');

    // Update the content of the HTML element with the ID "word" to display the new word
    wordEl.textContent = displayedWord;
}


function updateGuessesLeft() {
    guessesLeftEl.textContent = guessesLeft;
}

function updateGuessedLetters() {
    guessedLettersEl.textContent = guessedLetters.join(', ');
}

function handleGuess(event) {
    event.preventDefault(); //executes code instead of submitting the form and reloading the page when clicking submit
    const guess = guessInput.value.toLowerCase();
    guessInput.value = '';//clears the value of the guessInput to guess again
    if (guessedLetters.includes(guess)) {
        alert('You already guessed that letter!');
    } else if (selectedWord.includes(guess)) {
        guessedLetters.push(guess);
        updateWord();
        if (!wordEl.textContent.includes('_')) {
            alert('Congratulations, you won!');
            guessButton.disabled = true;
        }
    } else {
        guessedLetters.push(guess);
        guessesLeft--;
        updateGuessesLeft();
        if (guessesLeft === 0) {
            alert(`Sorry, you lost! The word was ${selectedWord}.`);
            guessButton.disabled = true;
        }
    }
    updateGuessedLetters();
}

function handleReset() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    guessesLeft = 6;
    updateWord();
    updateGuessesLeft();
    updateGuessedLetters();
    guessButton.disabled = false;
}

guessButton.addEventListener('click', handleGuess);
resetButton.addEventListener('click', handleReset);

updateWord();
updateGuessesLeft();
updateGuessedLetters();