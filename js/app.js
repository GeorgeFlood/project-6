let keys = document.getElementById('qwerty');
let guess = document.getElementById('phrase');
let startGame = document.querySelector('.btn__reset');
let keyrow = document.querySelector('#qwerty');
let missed = 0;
let tries = document.querySelectorAll('.tries img');

// Hides intro overlay.
startGame.addEventListener('click', () => {
document.getElementById('overlay').style.display = 'none';
});

// phrases that the player has to go guess through.
let phrases = [
'happy lockdown',
'alpha only',
'covid bandit',
'eminem goat',
'damnnn javascript',
];

//creating a function to randomize the phrases
function getRandomPhraseAsArray(arr){
let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)].split('');
return randomPhrase;
};

//for loop that will loop through each character, appending it to the li element.
function addPhraseToDisplay(arr){
for (let i = 0; i < arr.length; i++){
	let addPhrase = document.createElement('li');
	addPhrase.textContent = arr[i];
	let phraseUL = document.querySelector(`#phrase ul`);
	phraseUL.appendChild(addPhrase);
   if (arr[i].textContent === ' '){
      addPhrase.className = 'space';
   }else{
       addPhrase.className = 'letter';
     }
   }
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

function checkLetter(button){
let letters = document.querySelector('.letter');
let match = null;
for (let i = 0; i < letters.length; i++) {
 if(letters[i].textContent === button.textContent){
    match = true;
    letters.textContent = letters[i];
    letter[i].classList.add('show');
  }
 }
 return match;
};

keyrow.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        e.target.disabled = true;
        let letterFound = checkLetter(event.target);
      if(letterFound !== e.target) {
        tries[missed].src = 'images/lostHeart.png';
        missed += 1;
     }
    }
  });




