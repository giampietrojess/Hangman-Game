    //DOM elements to "hook" into
    var DOMnewGamebutton = document.getElementById('new-game-button'),
        DOMplaceholders = document.getElementById('placeholders'),
        DOMguessedLetters = document.getElementById('guessed-letters'),
        DOMremainingGuesses = document.getElementById('remaining-guesses'),
        DOMwins = document.getElementById('wins'),
        DOMlosses = document.getElementById('losses');
   
    // Options for Random Words

    var randomWords = ["Hawkeye","Iron Man","Spider Man","The Incredible Hulk","Black Widow","Captain America","Thor","Wolverine","Daredevil","Dr. Strange","Black Panther","Deadpool"],
        wins = 0,
        losses = 0,
        guessesLeft = 10,
        gameRunning = false,
        mysteryWord = '',
        mysteryWordPlaceholderArr = [],
        guessedLettersBank = [],
        wrongLettersBank = [];


    // Start the Game function

    function newGame() {

        gameRunning = true;
        guessesLeft = 10;
        guessedLettersBank = [];
        wrongLettersBank = [];
        mysteryWordPlaceholderArr = [];

        //This chooses the new word for each new game
        mysteryWord = randomWords[Math.floor(Math.random() * randomWords.length)];
        
        //This randomly loops through the words in the Random Words Array
        for (var i = 0; i < mysteryWord.length; i++) {
            
            // If there is a space in the mystery word, this pushes a blank space
            if (mysteryWord[i] === ' ') {
                mysteryWordPlaceholderArr.push(' ');
            }
            // Otherwise, each letter is replaced with an underscore
            else {
                mysteryWordPlaceholderArr.push(' _ ');
            }
        }

        DOMremainingGuesses.textContent = guessesLeft;
        DOMplaceholders.textContent = mysteryWordPlaceholderArr.join('');
        DOMguessedLetters.textContent = wrongLettersBox;

    }
    // Add event listener
        DOMnewGamebutton.addEventListener('click', newGame);
        
    // Add onkeyup event for letter Guess

    // Check if Guessed Letter is Correct and if so, push to Blank Space

    // Check if Guessed Letter is Incorrect and if not, push to Incorrect Bank

    // Check if Win

    // Check if Lost