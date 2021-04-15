var cards = [
  "<img src='images/1.jpg'>",
  "<img src='images/2.jpg'>",
  "<img src='images/3.jpg'>",
  "<img src='images/4.jpg'>",
  "<img src='images/5.jpg'>",
  "<img src='images/6.jpg'>",
  "<img src='images/7.jpg'>",
  "<img src='images/8.jpg'>",
  "<img src='images/1.jpg'>",
  "<img src='images/2.jpg'>",
  "<img src='images/3.jpg'>",
  "<img src='images/4.jpg'>",
  "<img src='images/5.jpg'>",
  "<img src='images/6.jpg'>",
  "<img src='images/7.jpg'>",
  "<img src='images/8.jpg'>"
];


cards.sort(function() {
  return 0.5 - Math.random()
});

var text = "";
var i;
for (i = 0; i < cards.length; i++) {
  text += cards[i];
}

document.getElementById("card1").innerHTML = cards[0]
document.getElementById("card2").innerHTML = cards[1]
document.getElementById("card3").innerHTML = cards[2]
document.getElementById("card4").innerHTML = cards[3]
document.getElementById("card5").innerHTML = cards[4]
document.getElementById("card6").innerHTML = cards[5]
document.getElementById("card7").innerHTML = cards[6]
document.getElementById("card8").innerHTML = cards[7]
document.getElementById("card9").innerHTML = cards[8]
document.getElementById("card10").innerHTML = cards[9]
document.getElementById("card11").innerHTML = cards[10]
document.getElementById("card12").innerHTML = cards[11]
document.getElementById("card13").innerHTML = cards[12]
document.getElementById("card14").innerHTML = cards[13]
document.getElementById("card15").innerHTML = cards[14]
document.getElementById("card16").innerHTML = cards[15]





var cardsOpen = [];
var divId = [];
var cardsMatch = [];
var nClicks = [];




window.onclick = e => {
  nClicks.push(e.target.id)


  var targetId = []
  targetId.push(e.target.id)

  if (e.target.classList == "card_front") {
    document.getElementById(targetId[0]).classList.add("closefront")
    document.getElementById(targetId[0]).nextElementSibling.classList.add("openback")
    cardsOpen.push(document.getElementById(targetId[0]).nextElementSibling.querySelector("img").src);
    divId.push(e.target.id);
  }

  if (cardsOpen.length == 2 && cardsOpen[0] == cardsOpen[1]) {
    cardsMatch.push(divId[0])
    cardsMatch.push(divId[1])
    divId.length = 0;
    cardsOpen.length = 0;
    console.log(cardsMatch)

  } else if (cardsOpen.length == 2 && cardsOpen[0] !== cardsOpen[1])
    setTimeout(function() {
      document.getElementById(divId[0]).classList.toggle("closefront")
      document.getElementById(divId[0]).nextElementSibling.classList.toggle("openback")
      document.getElementById(divId[1]).classList.toggle("closefront")
      document.getElementById(divId[1]).nextElementSibling.classList.toggle("openback")
      divId.length = 0;
      cardsOpen.length = 0;
    }, 500);

  var y = cardsMatch.length
  var z = y == 16;

  if (z == true) {
    document.getElementById("won").innerHTML = "You won";
    nClicks.length = 0;
    cardsMatch.length = 0;
  } else {
    document.getElementById("nClicks").innerHTML = "Clicks: " + nClicks.length;
  }
}

// localStorage.clear();
