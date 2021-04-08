// ADD TAKS ON ENTER KEY PRESS (SUBMIT FORM)
var taskname = document.getElementById("task").value
var list = document.querySelector('#list')
var form = document.querySelector('form')
var item = document.querySelector('#task')

form.addEventListener('submit', function(e) {
  e.preventDefault();
  list.innerHTML += '<li>' + item.value + '</li>';
  store();
  item.value = "";
}, false)





// ADD TASK WHEN BUTTON PRESSED (BUTTON)
function addToList() {
  var taskname = document.getElementById("task").value
  var list = document.querySelector('#list')
  var item = document.querySelector('#task')
  var form = document.querySelector('form')

  if (taskname.length != 0) {
    list.innerHTML += '<li>' + item.value + '</li>';
    store();


    var hideCloseBtn = document.getElementById("btnClose")
    hideCloseBtn.classList.add("hide")


    document.getElementById("task").value = ""
    document.getElementById("task").classList.remove("warning")

    var showtodo = document.getElementById("mytodo")
    showtodo.classList.remove("hide")
    var todotext = document.getElementById("tasklisttext")
    todotext.classList.add("hide")
  } else {
    document.getElementById("task").classList.add("warning")
  }
}



//  DELETE FUNCTIONALITY
var ul = document.querySelector('ul')
list.addEventListener('click', function(e) {
  var t = e.target;
  if (t.classList.contains('checked')) {
    t.parentNode.removeChild(t);
    ul.classList.remove('checked')
  } else {
    t.classList.add('checked');
    ul.classList.remove('checked')
  }
  store();
}, false)




var tododiv = document.getElementById("mytodo")
tododiv.addEventListener("click", deleteitem)

function deleteitem(e) {
  const element = e.target
  if (element.classList[0] == "button") {
    element.parentElement.remove()
  }
}

function hide() {
  var hidelisttext = document.getElementById("tasklisttext")
  hidelisttext.classList.add("hide")
  var showadd = document.getElementById("todo_input")
  showadd.classList.remove("hide")
  var hidetogglebtn = document.getElementById("hidetoggle")
  hidetogglebtn.classList.add("hide")
  var hidetasklist = document.getElementById("tasklist")
  hidetasklist.classList.add("hide")
  var showinput = document.getElementById("task")
  showinput.classList.remove("hide")
}


var today = new Date().toISOString().split('T')[0]
var date = document.getElementById("date")
date.innerHTML = today;

setInterval(function() {
  var time = new Date()
  var hours = String(time.getHours()).padStart(2, "0");
  var minutes = String(time.getMinutes()).padStart(2, "0");
  time = hours + " : " + minutes
  document.getElementById("time").innerHTML = time
}, 1000);


link = "https://api.openweathermap.org/data/2.5/weather?q=Almaty&units=metric&appid=de87a285760f8307389edf8362771a1e"

var request = new XMLHttpRequest();
request.open("GET", link, true)
request.onload = function() {
  var obj = JSON.parse(this.response)
  document.getElementById("location").innerHTML = obj.name;
  document.getElementById("temp").innerHTML = obj.main.temp
  var iconcode = obj.weather[0].icon;
  var iconimg = ("<img src='http://openweathermap.org/img/w/" + iconcode + ".png'>");
  document.getElementById("icon").innerHTML = iconimg
}
if (request.status == 200) {
  console.log("error");
} else {
  request.send();
}



function closeAdd() {
  var hideadd = document.getElementById("todo_input")
  hideadd.classList.add("hide")
  var showlist = document.getElementById("mytodo")
  showlist.classList.remove("hide")
  var showtogglebtn = document.getElementById("hidetoggle")
  showtogglebtn.classList.remove("hide")
  var showtasktext = document.getElementById("tasklisttext")
  showtasktext.classList.remove("hide")
  var showtasklist = document.getElementById("tasklist")
  showtasklist.classList.remove("hide")
  var hideinput = document.getElementById("input")
  hideinput.classList.add("hide")

}



document.onreadystatechange = function() {
  var state = document.readyState
  if (state == 'interactive') {
    document.getElementById('time').classList.add("hide");
    document.getElementById('date').classList.add("hide");
    document.getElementById('timeloading').classList.remove("hide");
  } else if (state == 'complete') {
    setTimeout(function() {
      document.getElementById('timeloading').classList.add("hide");
      document.getElementById('time').classList.remove("hide");
      document.getElementById('date').classList.remove("hide");
    }, 800);
  }
}


// document.getElementById('task').addEventListener('click', e => {
//   if(e.target.selectionStart === 0){
//     var hideCloseBtn = document.getElementById("btnClose")
//     hideCloseBtn.classList.add("hide")
//     var showAddBtn = document.getElementById("btnAdd")
//     showAddBtn.classList.remove("hide")
//
//   } else {
//     console.log("not sure")
//
//   }
// })


var specifiedElement = document.getElementById('task');
document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);
  if (isClickInside) {
    console.log('You clicked inside')
    var hideCloseBtn = document.getElementById("btnClose")
    hideCloseBtn.classList.add("hide")
    var showAddBtn = document.getElementById("btnAdd")
    showAddBtn.classList.remove("hide")
  } else {
    console.log('You clicked outside')
    var hideAddBtn = document.getElementById("btnAdd")
    hideAddBtn.classList.add("hide")
    var btn2 = document.getElementById("btnClose")
    btn2.classList.remove("hide")


  }
});



// Random words

setInterval(function() {
  var things = [
    'Rock',
    'Paper',
    'Scissor',
    'I am successful in whatever I do',
    'I plan my work and work my plan',
    'I focus on what is truly essential',
    'I will make the most of new opportunities',
    'Good flows to me, good flows from me',
    'I feel wonderful and alive',
    'I feel the joy of abundance',
    'I speak with confidence and calm assurance',
    'The universe provides for my every want and need',
    'I am healthy and happy',
    'I have a lot of energy',
    'I radiate happiness',
    'I am successful in whatever I do',
    'Everything is getting better every day',
    'My mind is calm',
    'I am always on the path of success & victory',
    'I am peace with myself',
    'I find peace and joy in all aspects of my life',
    'I have value and I matter',
    'I am a success in all that I do',
    'I am happy',
    'I feel joy, love, and abundance',
    'I am one with my inner child',
    'I am amazing',
    'I can do anything',
    'I am prepared to succeed',
    'Positivity is a choice',
    'I am fabulous, funny, and giving',
    'I am outstanding',
    'I am unique and special and most importantly I am me',
    'I am financially free',
    'I am perfect exactly as I am',
    'I focus on what is truly essential',
    'I make positive healthy choices',
    'I am in control of my reactions',
    'I find all solutions within me',
    'All is well in my life',
    'I will make the most of new opportunities',
    'I organize my priorities with clarity',
    'I forgive myself',
    'I am forgiven',
    'I will always be there for myself',
    'I enjoy the variety of life',
    'I am my own guru',
    'I take good care of myself',
    'I am patient with myself',
    'I let go of my past',
    'I am evolving eternally',
    'I know I can always upgrade',
    'There is a gift for me in everything that I experience',
    'I follow my inner guidance',
    'I appreciate my physical body',
    'I treat my body well',
    'I take it easy',
    'I make room for fun and playfulness',
    'I appreciate intimacy',
    'I am very good at letting go',
    'I am grateful for my life',
    'I love being myself',
    'Time is on my side',
    'I surrender to love',
    'I invite bliss',
    'I learn from my past',
    'I am good at walking the talk',
    'I enjoy being taken good care of by the universe',
    'I create my reality on a continuous basis',
    'My body is healthy',
    'I am superior to negative thoughts and low actions',
    'I forgive those who have harmed me in my past and peacefully detach from them',
    'I possess the qualities needed to be extremely successful',
    'My business is growing, expanding, and thriving',
    'My ability to conquer my challenges is limitless',
    'My potential to succeed is infinite',
    'I am courageous and I stand up for myself',
    'My thoughts are filled with positivity and my life is plentiful with prosperity',
    'I am blessed with an incredible family and wonderful friends',
    'I am a powerhouse',
    'My future is an ideal projection of what I envision now',
    'I radiate beauty, charm, and grace',
    'I am conquering my illness',
    'I wake up today with strength in my heart and clarity in my mind',
    'My fears of tomorrow are simply melting away',
    'My life is just beginning',
    'The assertion that something exists or is true',
    'I always have everything I need to be happy',
    'I live a positive life and only attract the best in my life',
    'I am peacefully allowing my life to unfold',
    'Today, and every day, I choose to be happy',
    'I am fun energetic and people love me for it',
    'My life overflows with happiness and love',
    'Today is rich with opportunity and I open my heart to receive them',
    'I take the time to show my friends that I care about them',
    'I am thankful that I get to live another day',
    'I see the world with beauty and color',
    'I deserve whatever good comes my way today',
    'I believe in myself',
    'I radiate confidence, certainty and optimism',
    'I courageously open and move through every door of opportunity',
    'I am in charge of my life',
    'I have the power to love my dreams',
    'My mind has unlimited power',
    'I stand up for what I believe in',
    'I act with courage and confidence',
    'I love myself more everyday',
    'I am blessed with an incredible family and wonderful friends',
  ];
  var thing = things[Math.floor(Math.random() * things.length)];
  document.getElementById("quote").innerHTML = thing
}, 300000);









// STORE AND RETREAVE VALUES FROM LOCAL STORAGE
function store() {
  window.localStorage.myitems = list.innerHTML;
}

function getValues() {
  var storedValues = window.localStorage.myitems;
  if (!storedValues) {
    list.innerHTML = '<li>There is nothing to do here</li>';
  } else {
    list.innerHTML = storedValues;
  }
}
getValues();
