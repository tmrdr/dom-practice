console.log("hello world!");

function setInputAsTitle() {
  var title = document.getElementById("title");
  var input = document.getElementsByTagName("input")[0];

  var value = input.value;
  var result = 2 * value;

  title.textContent = result;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

  // attach a click handler to the set title button
  document.getElementById("set-title").addEventListener("click", function() {
    console.log("set title button clicked");
    setInputAsTitle();
  });

  // attach a click handler to the blue button
  document.getElementById("blue").addEventListener("click", function() {
    console.log("blue button clicked");
    var block = document.getElementById("block");
    block.classList.remove("red");
    block.classList.add("blue");
  });

  // attach a click handler to the red button
  document.getElementById("red").addEventListener("click", function() {
    console.log("red button clicked");
    var block = document.getElementById("block");
    block.classList.remove("blue");
    block.classList.add("red");
  });

});
