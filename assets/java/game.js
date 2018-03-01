    //DOM elements to "hook" into
    var newGamebutton = document.getElementById('new-game');
        placeholders = document.getElementById('placeholders');
        letterGuessed = document.getElementById('letter-guessed');
        remainingGuesses = document.getElementById('remaining-guesses');
        wins = document.getElementById('wins');
        loses = document.getElementById('losses');
   
    // Options for Random Words

    var randomWords = ["Hawkeye","Iron Man","Spider Man","The Incredible Hulk","Black Widow","Captain America","Thor","Wolverine","Daredevil","Dr. Strange","Black Panther","Deadpool"]
        wins = 0;
        losses = 0;
        guessesLeft = 10;
        gameRunning = false;
        mysteryWord = '';
        mysteryWordPlaceholderArr = [];
        guessedLettersBox = [];
        wrongLettersBox = [];


    // Start the Game function

    function newGame() {

        gameRunning = true;
        guessesLeft = 10;
        guessedLettersBox = [];
        wrongLettersBox = [];
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
                mysteryWordPlaceholderArr.push('_');
            }

        }

        remainingGuesses.textContent = guessesLeft;
        placeholders.textContent = mysteryWordPlaceholderArr.join('');
        letterGuessed.textContent = wrongLettersBox;


    // Add event listener

    // Add onkeyup event for letter Guess

    // Check if Guessed Letter is Correct and if so, push to Blank Space

    // Check if Guessed Letter is Incorrect and if not, push to Incorrect Bank

    // Check if Win

    // Check if Lose