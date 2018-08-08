'use strict';
// Get the user's name
var userName = prompt ('Welcome to Erin Trivia! Let\'s meet today\'s contestants - contestant #1, please tell us your name.');
console.log ('User was asked their name and responded ' + userName);
alert ('Let\'s give ' + userName + ' a nice round of applause! Ok, ' + userName + ', let\'s get started. I\'m going to ask you 5 questions about Erin. These are all yes/no questions so feel free to answer with y/n or yes/no. Ready?');

// Ask them 5 y/n questions

var answerOne = prompt('Has Erin ever lived outside the United States?').toLowerCase();

if (answerOne === 'y' || answerOne === 'yes') {
  alert('Nailed it! Erin has lived in both East Timor and Sierra Leone.');
} else {
  alert ('Ooh, actually the answer was yes - Erin has lived in East Timor and Sierra Leone. ');
}
console.log ('User was asked \'Has Erin ever lived outside the United States?\' and responded ' + answerOne);

var answerTwo = prompt ('Is Erin allergic to broccoli?').toLowerCase();

if (answerTwo === 'n' || answerTwo === 'no') {
  alert('That is correct! While Erin has been known to jump off a bridge rather than eat broccoli, she is technically not allergic to it.');
} else {
  alert ('I\'m sorry, ' + userName + ', that is incorrect.  While she does hate broccoli with the fire of a thousand suns, she is not allergic to it.');
}
console.log ('User was asked \'Is Erin allergic to broccoli?\' and responded ' + answerTwo);

var answerThree = prompt ('Has Erin ever been to jail?').toLowerCase();

if (answerThree === 'y' || answerThree === 'yes') {
  alert ('Well done, ' + userName + ', that is correct. Erin has never been arrested but she used to visit the jail frequently as a mental health liaison.');
} else {
  alert ('This was a bit of a trick question, actually - Erin HAS been to jail several times as part of her prior job as a Mental Health Jail Liaison. Ok, ok - I promise there won\'t be any more trick questions.');
}
console.log ('User was asked \'Has Erin ever been to jail?\' and responded ' + answerThree);

var answerFour = prompt ('Does Erin own a South Korean National Treasure?').toLowerCase();

if (answerFour === 'y' || answerFour === 'yes') {
  alert ('You\'re darn right she does! Her dog, Norah, is a jindo - South Korea National Treasure #53.');
} else {
  alert ('Ok, ' + userName + ', I kind of feel like this one should have been a gimme given the specificity of the question. Erin\'s dog, Norah, is a jindo and considered a national treasure in her homeland of South Korea.');
}
console.log ('User was asked \'Does Erin own a South Korean National Treasure?\' and responded ' + answerFour);

var answerFive = prompt ('Is Erin\'s favorite genre of book post-apocalyptic fiction?').toLowerCase();

if (answerFive === 'y' || answerFive === 'yes') {
  alert ('Nicely done! Post-apocalyptic fiction is Erin\'s favorite genre of book.  She\'s not morbid - she just likes to be prepared.');
} else {
  alert ('I\'m sorry, that is not correct. Post-apocalyptic fiction is definitely Erin\'s favorite book genre.');
}
console.log ('User was asked \'Is Erin\'s favorite genre of book post-apocalyptic fiction?\' and responded ' + answerFive );

alert ('And that brings us to the end of round one! We\'re going to take a short commercial break and when we come back, we\'ll see how ' + userName + ' does in the challenge round!' );

alert ('And we\'re back! ' + userName + ', are you ready for the challenge round?');

var countriesTraveled = 22;

alert('For your next question, to how many countries has Erin traveled? And, because I like you, ' + userName + ', I\'ll give you a hint - the number is between 10 and 30 - and I\'ll give you 4 chances to get it right.');

var i = 0;

do {
  var answerSix = parseInt(prompt('How many countries do you think Erin has traveled to?'));
  i++;
  if (answerSix === countriesTraveled) {
    alert('Great guess! Erin has traveled to 22 countries so far!');
    i = 4;
  } else if (answerSix > countriesTraveled){
    alert('Ooh - that number is a little too high.');
  } else if (answerSix < countriesTraveled){
    alert('Ooh - that number is too low.');
  } else {prompt('I\'m sorry - I didn\'t understand your response. Please phrase your guess in the form of a number.');
  }
}
while (i<4);

alert ('Now for the final question. I\'ll give you six chances to guess at least one of Erin\'s hobbies.');

var hobbies = ['reading', 'sewing', 'hiking'];

for(i = 0; i < 6; i++) {
  var answerSeven = prompt('What do you think Erin enjoys doing in her free time?').toLowerCase;
  if (answerSeven === hobbies[i]) {
    alert ('Good guess!');
    break;
  }
  else {
    alert ('Nope - that is not one of Erin\'s hobbies.');
  }
}

alert ('Erin\'s hobbies include reading, sewing, and hiking.');
