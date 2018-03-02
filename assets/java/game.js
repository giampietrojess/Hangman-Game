    //DOM elements to "hook" into
    var DOMnewGamebutton = document.getElementById('new-game-button'),
        DOMplaceholders = document.getElementById('placeholders'),
        DOMguessedLetters = document.getElementById('guessed-letters'),
        DOMremainingGuesses = document.getElementById('remaining-guesses'),
        DOMwins = document.getElementById('wins'),
        DOMlosses = document.getElementById('losses'),
        DOMstart = document.getElementById('start');

    // Declaring the Variables

    var randomWords = ["Hawkeye","Iron Man","Spider Man","The Incredible Hulk","Black Widow","Captain America","Thor","Wolverine","Daredevil","Doctor Strange","Black Panther","Deadpool"],
        wins = 0,
        losses = 0,
        guessesLeft = 8,
        gameRunning = false,
        mysteryWord = '',
        mysteryWordPlaceholderArr = [],
        guessedLettersBank = [],
        wrongLettersBank = [];


    // Start the Game function

    function newGame() {

        gameRunning = true;
        guessesLeft = 6;
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
                mysteryWordPlaceholderArr.push('_');
            }
        }
    
        DOMremainingGuesses.textContent = guessesLeft;
        DOMplaceholders.textContent = mysteryWordPlaceholderArr.join('');
        DOMguessedLetters.textContent = wrongLettersBank;

    }
    
    // Add event listener
    DOMnewGamebutton.addEventListener('click', newGame);


    // Add onkeyup event for letter Guess

    document.onkeyup = function(event) {
        console.dir(event);
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            letterGuess(event.key);
        }
    }

    function letterGuess(letter) {
        console.log(letter);
        if (gameRunning === true && guessedLettersBank.indexOf(letter) === -1) {
            //Actual Game functions
            guessedLettersBank.push(letter);
            //Is Guessed Letter in Mystery Word?
            for (var i = 0; i < mysteryWord.length; i++) {
                //converts letters to lower case for comparison
                if (mysteryWord[i].toLowerCase() === letter.toLowerCase()) {

                    mysteryWordPlaceholderArr[i] = mysteryWord[i];
                }        
            }
            DOMplaceholders.textContent = mysteryWordPlaceholderArr.join('');
            checkIncorrect(letter);
        }    
        else {
            if (!gameRunning) {
                alert("Click the New Game Button to Play");
            } else {
            alert("You've already guessed this letter, try another!");
            }
        } 
    }
        
    // Check if Guessed Letter is Incorrect and if not, push to Incorrect Bank

    function checkIncorrect(letter) {
        if (
            mysteryWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 
            &&
            mysteryWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1 )        
        {
            guessesLeft--;
            wrongLettersBank.push(letter);
            DOMguessedLetters.textContent = wrongLettersBank.join(' ');
            DOMremainingGuesses.textContent = guessesLeft;
        }
        checkLoss();
        changeImage();
    }    
    // Check if Win
    function checkWin () {
        if (mysteryWord.toLowerCase() === mysteryWordPlaceholderArr.join('').toLowerCase())
        {
            wins++;
            gameRunning = false; 
            DOMwins.textContent = wins;
            alert("You win! Click the Start button to play again!");
        }
    }

    // Check if Lost

    function checkLoss() {
        if (guessesLeft === 0) {
            losses++;
            gameRunning = false;
            DOMlosses.textContent = losses;
            DOMplaceholders.textContent = mysteryWord;
        }
        checkWin();
    }

    // Image functions

    function changeImage() {
        if (guessesLeft === 5) {
            document.getElementById('hangman').src = "assets/images/6.png";    
        }
        if (guessesLeft === 4) {
            document.getElementById('hangman').src = "assets/images/5.png";    
        }
        if (guessesLeft === 3) {
            document.getElementById('hangman').src = "assets/images/4.png";    
        }
        if (guessesLeft === 2) {
            document.getElementById('hangman').src = "assets/images/3.png";    
        }
        if (guessesLeft === 1) {
            document.getElementById('hangman').src = "assets/images/2.png";    
        } 
        if (guessesLeft === 0) {
            document.getElementById('hangman').src = "assets/images/1.png";    
        }
    }