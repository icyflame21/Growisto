var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 3000);
window.addEventListener('load', () => {
  window.scroll(0,0)
})