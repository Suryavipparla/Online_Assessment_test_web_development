const timerElement = document.getElementById('timer');
let timerValue = 30 * 60;
setInterval(() => {
  const minutes = Math.floor(timerValue / 60);
  const seconds = timerValue % 60;
  timerElement.textContent = `${minutes}:${seconds}`;
  timerValue--;
  if (timerValue < 0) {
    submitTest();
  }
}, 1000);

const questions = [
    {
      "question": "What does HTML stand for?",
      "a": "Hyper Text Markup Language",
      "b": "Hyperlinks and Text Markup Language",
      "c": "Home Tool Markup Language",
      "d": "Hyper Tool Markup Language",
      "correct_ans": "a"
    },
    {
      "question": "Which of the following is NOT a valid HTML element?",
      "a": "div",
      "b": "span",
      "c": "section",
      "d": "article",
      "correct_ans": "b"
    },
    {
      "question": "Which of the following is NOT a valid CSS property?",
      "a": "background-color",
      "b": "font-size",
      "c": "text-shadow",
      "d": "border-radius",
      "correct_ans": "c"
    },
    {
      "question": "Which of the following is NOT a valid JavaScript data type?",
      "a": "string",
      "b": "boolean",
      "c": "function",
      "d": "array",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid JavaScript loop?",
      "a": "for",
      "b": "while",
      "c": "do-while",
      "d": "foreach",
      "correct_ans": "d"
    },
    {
      "question": "What does CSS stand for?",
      "a": "Cascading Style Sheets",
      "b": "Computer Style Sheets",
      "c": "Colorful Style Sheets",
      "d": "Creative Style Sheets",
      "correct_ans": "a"
    },
    {
      "question": "Which of the following is NOT a valid CSS unit?",
      "a": "px",
      "b": "em",
      "c": "vh",
      "d": "pt",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid CSS property for text styling?",
      "a": "text-align",
      "b": "text-transform",
      "c": "text-shadow",
      "d": "text-style",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid CSS property for box styling?",
      "a": "margin",
      "b": "padding",
      "c": "border",
      "d": "outline",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid CSS property for layout?",
      "a": "display",
      "b": "position",
      "c": "float",
      "d": "align",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid CSS property for background styling?",
      "a": "background-color",
      "b": "background-image",
      "c": "background-size",
      "d": "background-shadow",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid CSS property for animation?",
      "a": "animation-name",
      "b": "animation-duration",
      "c": "animation-timing-function",
      "d": "animation-color",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid CSS property for transition?",
      "a": "transition-property",
      "b": "transition-duration",
      "c": "transition-timing-function",
      "d": "transition-color",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid HTML5 semantic element?",
      "a": "header",
      "b": "footer",
      "c": "nav",
      "d": "content",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid HTML5 form input type?",
      "a": "text",
      "b": "number",
      "c": "email",
      "d": "date",
      "correct_ans": "b"
    },
    {
      "question": "Which of the following is NOT a valid HTML5 form attribute?",
      "a": "required",
      "b": "placeholder",
      "c": "maxlength",
      "d": "validate",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid HTML5 media element?",
      "a": "audio",
      "b": "video",
      "c": "image",
      "d": "source",
      "correct_ans": "c"
    },
    {
      "question": "Which of the following is NOT a valid HTML5 API?",
      "a": "Geolocation API",
      "b": "Canvas API",
      "c": "Web Storage API",
      "d": "WebGL API",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid HTML5 semantic element?",
      "a": "header",
      "b": "footer",
      "c": "nav",
      "d": "content",
      "correct_ans": "d"
    },
    {
      "question": "Which of the following is NOT a valid HTML5 form input type?",
      "a": "text",
      "b": "number",
      "c": "email",
      "d": "date",
      "correct_ans": "b"
    }

  ]

  window.onload = function() {
    const name = localStorage.getItem("loggedin");
    if (!name) {
      window.location.href = "index.html";
    }
  }
  
  let currentQuestion = 0;
  let answers = [];
  
  function displayQuestion() {
    const question = questions[currentQuestion];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
      <h3 class="border-bottom pb-2">${question.question}</h3>
      <div class="form-check mt-4">
        <input class="form-check-input" type="radio" name="answer-${currentQuestion}" id="answer-a" value="a" ${isAnswered('a')}>
        <label class="form-check-label" for="answer-a">${question.a}</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="answer-${currentQuestion}" id="answer-b" value="b" ${isAnswered('b')}>
        <label class="form-check-label" for="answer-b">${question.b}</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="answer-${currentQuestion}" id="answer-c" value="c" ${isAnswered('c')}>
        <label class="form-check-label" for="answer-c">${question.c}</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="answer-${currentQuestion}" id="answer-d" value="d" ${isAnswered('d')}>
        <label class="form-check-label" for="answer-d">${question.d}</label>
      </div>
    `;
  }
  
  function isAnswered(option) {
    const answered = answers.find(ans => ans.qno === currentQuestion);
    if (answered && answered.res === option) {
      return 'checked';
    }
    return '';
  }
  
  displayQuestion();
  
  function nextQuestion() {
    const answer = document.querySelector(`input[name="answer-${currentQuestion}"]:checked`);
    if (answer) {
        answers = answers.filter((ans) => ans.qno != currentQuestion);
      answers.push({qno:currentQuestion,res:answer.value});
    } 
    
    if (currentQuestion == questions.length-1) {
      return;
    }
    currentQuestion++;
    displayQuestion();
   
  }

  function prevQuestion() {
    if (currentQuestion == 0) {
      return;
    }
    currentQuestion--;
    displayQuestion();
  }
  
  
  function submitTest() {
    // diaplay verytin npne except result container
    document.getElementById('question-container').remove();
    document.getElementById('submit-btn').remove();
    document.getElementById('next-btn').remove();
    document.getElementById('prev-btn').remove();
    document.getElementById('top-right-div').remove();
   const resultdiv = document.getElementById('result-container');
    resultdiv.innerHTML = `
    <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <h3 class="border-bottom pb-2">Your Score is: ${calculteScore()} / ${questions.length}</h3>
          <div class="text-center">
            <img src="vignanlogo.jpg" width="300" height="100" class="img-fluid" alt="Certificate">
          </div>
          <p class="text-center mt-4">This is to certify that</p>
          <h4 class="text-center">${localStorage.getItem("name")|| "STUDENT"}</h4>
          <p class="text-center">has successfully completed the quiz on Web Technologies</p>
        </div>
      </div>
      <div class="text-center mt-4 row">
      <button id="logout-btn" onclick="logout()" class="btn btn-danger mt-4 rounded-pill mr-2 ">Logout</button>
        <button id="print-btn" class="btn btn-primary mt-4 rounded-pill mr-2 " onclick="printCertificate()">Print Certificate</button>
        </div
    </div>
  </div>
</div>

    `;


  }

function calculteScore(){
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (questions[answers[i].qno]["correct_ans"] === answers[i].res) {
        score++;
        }
    }
    return score;
}
function logout() {
    localStorage.removeItem('loggedin');
    localStorage.removeItem('name');
    window.location.href = "index.html";
}
function printCertificate() {
    // display none the buttons
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('print-btn').style.display = 'none';
    window.print();
    // display the buttons
    document.getElementById('logout-btn').style.display = 'block';
    document.getElementById('print-btn').style.display = 'block';
}



 