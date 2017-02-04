(function (window) {
  var byeSpeaker = {};  
  //byeSpeaker.name= "Yaakov";
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (name) {
    console.log(speakWord +" "+ name);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
