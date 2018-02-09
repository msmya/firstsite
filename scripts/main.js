
//Picture flipping code
var myImage = document.querySelector('img');

myImage.onclick = function(msmya) {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fufu.jpg') {
      myImage.setAttribute ('src','images/fufu2.jpg');
    } else {
      myImage.setAttribute ('src','images/fufu.jpg');
    }
  }

 //Custom user name
var myButton = document.getElementById('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'IM A STRONG WOMAN, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'IM A STRONG WOMAN, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
