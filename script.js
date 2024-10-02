const questions = [
  { question: "¿Cuál es la capital de República Dominicana?", answer: "Santo Domingo" },
  { question: "¿En qué año se independizó República Dominicana?", answer: "1844" },
  { question: "¿Quién fue el Padre de la Patria?", answer: "Juan Pablo Duarte" },
  // Agrega aquí las 97 preguntas restantes
];

let currentQuestion = 0;
let time = 300; // 5 minutos en segundos (5*60)
let timerInterval;

document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('submit-answer').addEventListener('click', submitAnswer);
document.getElementById('restart-game').addEventListener('click', restartGame);
document.getElementById('share-game').addEventListener('click', shareGame);

function startGame() {
  // Escondemos el botón de empezar, mostramos el campo de respuesta y el botón de "Responder"
  document.getElementById('start-game').style.display = 'none';
  document.getElementById('restart-game').style.display = 'none';
  document.getElementById('share-game').style.display = 'none';
  document.getElementById('answer').style.display = 'inline-block';
  document.getElementById('submit-answer').style.display = 'inline-block';
  document.getElementById('result-message').innerText = "";

  startTimer();
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestion < questions.length) {
    document.getElementById('question').innerText = questions[currentQuestion].question;
    document.getElementById('answer').value = ""; // Limpiamos el campo de respuesta
  } else {
    endGame(true); // Si responde todas las preguntas, gana
  }
}

function submitAnswer() {
  const userAnswer = document.getElementById('answer').value.trim();
  const correctAnswer = questions[currentQuestion].answer;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    currentQuestion++;
    loadQuestion();
  } else {
    endGame(false); // Si responde mal, termina el juego
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    time--;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('time').innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    
    if (time <= 0) {
      clearInterval(timerInterval);
      endGame(false); // Si se acaba el tiempo, termina el juego
    }
  }, 1000);
}

function endGame(won) {
  clearInterval(timerInterval);
  if (won) {
    document.getElementById('question').innerText = "¡Ganaste!";
  } else {
    document.getElementById('question').innerText = "Perdiste. ¿Quieres jugar de nuevo?";
  }
  // Escondemos el campo de respuesta y el botón de "Responder"
  document.getElementById('answer').style.display = 'none';
  document.getElementById('submit-answer').style.display = 'none';
  document.getElementById('restart-game').style.display = 'inline-block';
  document.getElementById('share-game').style.display = 'inline-block';
}

function restartGame() {
  currentQuestion = 0;
  time = 300;
  document.getElementById('result-message').innerText = "";
  startGame();
}

function shareGame() {
  const url = window.location.href;
  const text = "¡Intenta superar mi puntuación en el juego de Cultura Dominicana! " + url;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
}

