// Import stylesheets
import './style.css';

function inner(x) {
  function outter(y) {
    return x + y;
  }
  return outter;
}
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Mern-JS-1</h1>`;
