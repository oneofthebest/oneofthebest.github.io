var myHeading1 = document.querySelector('h2');
myHeading1.textContent = 'h2 - My top level heading changed from JS :-)';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'dog2.jpg') {
      myImage.setAttribute ('src','dog.jpg');
    } else {
      myImage.setAttribute ('src','dog2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please say something:');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'h2 - Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'h2 - Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}