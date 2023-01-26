function myColor() {
  var color = document.getElementById("colorPicker").value;
  document.querySelector("#container").style.backgroundColor = color;

  // Take the hex code
  document.getElementById("box2").value = color;
}

document.getElementById("colorPicker").addEventListener("input", myColor);
