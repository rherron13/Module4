// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var hellospeaker= {};

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
hellospeaker=function speak(name) {
  console.log("Hello" + " " + name);
}

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;






//  <script href="js/script.js"></script>

// 	<script>
//     var names =["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"]; 


// for (var i = 0; i < names.length; i++) {

//   var firstLetter = names[i].charAt(0).toLowerCase();

//     if (firstLetter === 'j') {
//     speak1(names[i]);
//   } else {
//    speak2 (names[i]);
//   }
// }

// // var helloSpeaker = speak "Hello";


// // var byeSpeaker = speak "Good Bye";

// function speak1(names) {
//   console.log("Good Bye" + " " + names);
// }

// function speak2(names) {
//   console.log( "Hello" + " " + names);
// }







// 	</script> -->