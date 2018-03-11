(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  
  if (firstLetter === 'j') {
    goodbyespeaker.speak(names[i]);
  } else {
    hellospeaker.speak(names[i]);
  }
}

})();











// var names =["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; 


// for (var i = 0; i < names.length; i++) {

//   var firstLetter = names[i].charAt(0).toLowerCase();

//     if (firstLetter === 'j') {
//     byeSpeaker (names[i]);
//   } else {
//     helloSpeaker (names[i]);
//   }
// }

// var HelloSpeaker = "Hello";


// var byeSpeaker = "Good Bye";

// function speak(names) {
//   console.log(HelloSpeaker + " " + names);
// }


// function speak(names) {
//   console.log(byeSpeaker + " " + names);
// }

// names ();