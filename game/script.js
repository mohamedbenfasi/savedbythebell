$(document).ready(function(){
    goToState(scenario.zero);
});

var changeImage = function(img) {
  $("#my_image").attr("src", img);
};

var changeText = function(txt) {
  $("#my_text").text(txt)
};

var changeButtons = function(buttonList) {
  $("#my_button").empty();
  for (var i = 0; i < buttonList.length; i++) {
    $("#my_button").append("<button onClick=goToState(" + buttonList[i][1] + ")>" + buttonList[i][0] + "</button>");
  };
};

var goToState = function(s) {
  console.log(s);
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};

var scenario = {
  zero: {
    image: "img/Saved_by_the_Bell_logo.png",
    text: "Welcome to Bayside",
    buttons: [["Start","scenario.one"]]
  },
  one: {
    image: "img/ct-saved-by-the-bell-max-restaurant-chicago-review.jpg",
    text: "You finnaly decided to go to the BAL",
    buttons: [["Yes","scenario.two"],["No","scenario.three"]]
  },
  two: {
    image: "img/13301388_10153643416516728_2245964874394631818_o.jpg",
    text: "Your find a message saying to go to Max. What do you want to do?",
    buttons: [["Turn and go to class", "scenario.three"],["Go to Max", "scenario.four"]]
  },
  three: {
    image: "img/tumblr_mraagiwSpe1qzol4do1_1280.png",
    text: "You win",
    buttons: [["Play again","scenario.zero"]]
  },
    four: {
    image: "img/13329482_10153643416551728_1917168832099222692_o.jpg",
    text: "something",
    buttons: [["follow Kelly", "scenario.five"],["follow Jessica", "scenario.five"]]
  },
    five: {
    image: "img/firefox_2017-08-08_00-20-28.png",
    text: "TO BE CONTINUED...",
    buttons: [["Play again","scenario.zero"]]
  }
};
