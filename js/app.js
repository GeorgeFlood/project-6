const keys = document.getElementById('qwerty');
const guess = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const keyrow = document.querySelector('#qwerty');
let missed = 0;
const tries = document.querySelectorAll('.tries img');
const button = document.querySelectorAll('button');

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
const getRandomPhraseAsArray = arr => {
let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)].split('');
return randomPhrase;
};

//for loop that will loop through each character, appending it to the li element.
const addPhraseToDisplay = arr => {
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

const checkLetter = button => {
let letters = document.querySelectorAll('li');
let match = null;
for (let i = 0; i < letters.length; i++) {
  if(letters[i].textContent === button.textContent){
    letters[i].className += ' show';
    match += letters[i].textContent;
  }
 }
 return match;
};

const checkWin = () => {
let letter = document.getElementsByClassName('letter');
let show = document.getElementsByClassName('show');
if(letter.length === show.length){
  let result = document.getElementById('overlay');
  result.className = 'win';
  let title = document.querySelector('.title');
  title.textContent = 'Well done, sir!';
  result.style.display = 'flex';
if (missed > 4){
   result.className = 'lose';
   title.textContent = `That's too bad old chum, av another go!`;
   result.style.display = 'flex';
    }
   }
  };

keyrow.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true;
        e.target.style.backgroundColor = 'lightgreen';
        let letterFound = checkLetter(e.target);
    if (!letterFound){
       e.target.style.backgroundColor = 'red';
        missed++;
        tries[missed -1].src = 'images/lostHeart.png';
      }
     }
     checkWin();
  });


console.log(missed);





