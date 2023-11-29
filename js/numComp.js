document.addEventListener('DOMContentLoaded', function () {
    var speechBubbles = document.querySelectorAll('.speech-bubble');

    speechBubbles.forEach(function (bubble) {
      var textParts = bubble.querySelectorAll('.text-part');
      var currentIndex = 0;

      bubble.addEventListener('click', function () {
        textParts[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % textParts.length;
        textParts[currentIndex].style.display = 'inline';
      });
    });
  

});

function checkAnswer1() {
    var userInput = document.getElementById('userInput').value;
    var correctAnswer = "1*100 + 8*10 + 0*1";

    if (userInput === correctAnswer) {
        document.getElementById('resultMessage').innerText = "Parabéns! Resposta correta!";
    } else {
        document.getElementById('resultMessage').innerText = "Ops! Tente novamente.";
    }
}

function checkAnswer2() {
  var userInput = document.getElementById('userInput2').value;
  var correctAnswer = "5";

  if (userInput === correctAnswer) {
      document.getElementById('resultMessage2').innerText = "Parabéns! Resposta correta!";
  } else {
      document.getElementById('resultMessage2').innerText = "Ops! Tente novamente.";
  }
}
