


function display(value)
{
  document.getElementById("textarea").value+=value
}


function reset()
{
  document.getElementById("textarea").value=""
}

function calculate()
{
  var value = document.getElementById("textarea").value
  var answer = eval(value)
  document.getElementById("textarea").value=answer
}

function toggle()
{
 var value = document.getElementById("textarea").value
 var toggle = value * (-1)
 document.getElementById("textarea").value=toggle
}

function remove()
{
  var value = document.getElementById("textarea").value
  var newValue = value.slice(0, -1);
  document.getElementById("textarea").value=newValue
}
