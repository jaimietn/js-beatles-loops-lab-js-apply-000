// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var allBeatles = []; 
  for(var i =0; i < musicians.length; i++) {
    allBeatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return allBeatles;
}

function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var loudFacts = [];
    var i = 0;
     while (i < facts.length) {
        loudFacts.push(facts[i] +"!!!");
        i++;
    }
    return loudFacts;
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return love;
}