var headersToAnimate = ["I am a Full Stack Devloper", "I am a React devloper", "I am Frontend devloper", "software Engineer", "I am Mearn stack devloper"];
var startReversAnimationAfter = 500; //ms

function reverseAnimation(headerIndex){
  var i = headersToAnimate[headerIndex].length -1, delay = 0;
  for (; i >= 0 ; i--, delay++) {
    let string = headersToAnimate[headerIndex].substr(0, i);
    setTimeout('document.getElementById("Header").innerHTML = \'' + string + '\';', 100 * delay);
  }
  
   setTimeout(function(){ animateHeaders(headerIndex + 1)}, 100 * delay + startReversAnimationAfter);
}
function animateHeaders(headerIndex){
  var i =0;
  if(headerIndex ==  headersToAnimate.length){
    headerIndex = 0;
  }
  for (; i < headersToAnimate[headerIndex].length; i++) {
    let string = headersToAnimate[headerIndex][i]
    setTimeout('document.getElementById("Header").innerHTML += \'' + string + '\';', 100 * i);
  }
 
 setTimeout(function(){ reverseAnimation(headerIndex)}, 100 * i + startReversAnimationAfter);
}

animateHeaders(0)

