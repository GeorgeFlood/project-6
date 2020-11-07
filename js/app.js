let keys = document.getElementById('qwerty');
let guess = document.getElementById('phrase');
let startGame = document.querySelector('.btn__reset');
let keyrow = document.querySelector('#qwerty');
let missed = 0;
let tries = document.querySelectorAll('.tries img');
let button = document.querySelectorAll('button');

// Hides intro overlay.
startGame.addEventListener('click', () => {
document.getElementById('overlay').style.display = 'none';
});

// phrases that the player has to go guess through.
let phrases = [
'no pressure no diamonds',
'patients is a super power',
'happy coding',
'our time is limited',
'consistency is key',
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
   if (addPhrase.textContent === ' '){
      addPhrase.className = 'space';
   }else{
       addPhrase.className = 'letter';
     }
   }
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

function checkLetter(button){
let letters = document.querySelectorAll('li');
let match = null;
for (let i = 0; i < letters.length; i++) {
 if(letters.textContent === button.textContent){
    letters[i].className = 'show';
    match = true;
  }
 };
 return match;
}



keyrow.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
         checkLetter(e.target);
        e.target.className = 'chosen';
        e.target.disabled = true;
        let letterFound = checkLetter(event.target);
      if(letterFound !== e.target) {
        tries[missed].src = 'images/lostHeart.png';
        missed ++;
     }
    checkWin();
    }
  });

function checkWin(){
let letter = document.getElementsByClassName('letter');
let show = document.getElementsByClassName('show');
if(letter.length === show.length){
  let result = getElementById('overlay').className = 'win';
  let title = document.getElementsByClassName('title');
  title.textContent = 'Well done, sir!';
  result.style.display = 'flex';
  if (missed >= 4){
   result.className = 'lose';
   title.textContent = `That's too bad old chum, av another go!`;
   result.style.display = 'flex';
  }
 }
};


