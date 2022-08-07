//TIMERS ARE NOT GOING WELL AND SOUND SHOULD BE OF LESS TIME
var questions = [
  'select even numbers from the grid:-', 'Number of days in a month could be?',
  'Select Multiples of 5:-', 'Select numbers greater than 45:-',
  'Select numbers that are not multiple of 3:-', 'select numbers less than 56:-',
  'select all multiples of 12:-', 'select numbers that are multiples of 9:-', 'select all odd numbers:-']
var scoretext = document.querySelector('.scoring span')
var flag=true;
const sound=new Audio('images&sounds/wrong.mp3')
const sound2=new Audio('images&sounds/right.mp3')
const sound3= new Audio('images&sounds/queschange.mp3')
var timing = document.querySelector('.timing span')
var timingval = 11;
var count = 0;
var score = 0;
var i = 0;
function gaintime() {
  if(flag==false){
    clearTimeout(t2)
  }
  else{
  const t2=setTimeout(() => {
    if (timingval == 0) {
      timingval = 11;
    }
    timingval = timingval - 1;
    timing.textContent = timingval;
    gaintime()
  }, 1000)
}
}
function start() {
  const t = setTimeout(() => {
    if (count != 10) {
      sound3.play()
      count = count + 1;
      let index = Math.floor(Math.random() * 9);
      document.querySelector('.ques span').textContent ="Task "+ count +":  "+ questions[index]
      i = index;
      start()
    }
    else {
      clearTimeout(t)
      window.alert("Game ended " + " Your final score: " + score)
      //HERE SCORE WILL BE SENT TO DATABASE
      flag=false;
      document.querySelector('.ques span').textContent=''
      timing.textContent=''
    }
  }, 11000)
}
start()
gaintime()
const keys = document.querySelectorAll('.btn')
var keyarray = Array.from(keys)
keyarray.forEach((key) => {
  key.addEventListener('click', () => {
    let num = parseInt(key.innerHTML)
    if (i == 0) {
      if (num % 2 == 0) {
        sound2.play()
        score = score + 10;
        key.innerHTML=''
        scoretext.textContent = score;
      }
      else {
        sound.play()
        score = score - 10;
        scoretext.textContent = score;
      }
    }
    else if (i == 1) {
      if (num == 31 || num == 28 || num == 30 || num == 29) {
        sound2.play()
        score = score + 10;
        key.innerHTML=''
        scoretext.textContent = score;
      }
      else {
        sound.play()
        score = score - 10;
        scoretext.textContent = score;
      }
    }
    else if (i == 2) {
      if (num % 5 === 0) {
        sound2.play()
        score = score + 10;
        key.innerHTML=''
        scoretext.textContent = score;
      }
      else {
        sound.play()
        score = score - 10;
        scoretext.textContent = score;
      }
    }
    else if (i == 3) {
      if (num > 45) {
        sound2.play()
        score = score + 10;
        key.innerHTML=''
        scoretext.textContent = score;
      }
      else {
        sound.play()
        score = score - 10;
        scoretext.textContent = score;
      }
    }
    else if (i == 4) {
      if (num % 3 != 0) {
        sound2.play()
        score = score + 10;
        key.innerHTML=''
        scoretext.textContent = score;
      }
      else {
        sound.play()
        score = score - 10;
        scoretext.textContent = score;
      }
    }
    else if (i == 5) {
      if (num < 56) {
        sound2.play()
        score = score + 10;
        key.innerHTML=''
        scoretext.textContent = score;
      }
      else {
        sound.play()
        score = score - 10;
        scoretext.textContent = score;
      }
    }
    else if (i == 6) {
      if (num % 12 == 0) {
        sound2.play()
        score = score + 10;
        key.innerHTML=''
        scoretext.textContent = score;
      }
      else {
        sound.play()
        score = score - 10;
        scoretext.textContent = score;
      }
    }
    else if (i == 7) {
      if (num % 9 == 0) {
        sound2.play()
        score = score + 10;
        key.innerHTML=''
        scoretext.textContent = score;
      }
      else {
        sound.play()
        score = score - 10;
        scoretext.textContent = score;
      }
    }
    else if(i==8) {
      if (num % 2 != 0) {
        sound2.play()
        score = score + 10;
        key.innerHTML=''
        scoretext.textContent = score;
      }
      else {
        sound.play()
        score = score - 10;
        scoretext.textContent = score;
      }
    }
  })
})
















