const question = [
  {
    qn: "Which of the following is markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaSctipt",
    d: "PHP",
    correct: "a",
  },

  {
    qn: "Which is the stylish language?",
    a: "HTML",
    b: "CSS",
    c: "JavaSctipt",
    d: "PHP",
    correct: "b",
  },
];

let index = 0;
let total = question.length;
let right = 0,
  wrong = 0;
const quesbox = document.getElementById("quesbox");
//for the options
const optionsInput = document.querySelectorAll(".option");
const loadquestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();

  const data = question[index];
  console.log(data);
  quesbox.innerText = `${index + 1})${data.qn}`;

  //putting the options
  optionsInput[0].nextElementSibling.innerText = data.a;
  
  optionsInput[1].nextElementSibling.innerText = data.b;

  optionsInput[2].nextElementSibling.innerText = data.c;

  optionsInput[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = question[index];
  const ans = getAnswer();
  // console.log(ans, data.correct);
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquestion();
  return;
};
const getAnswer = () => {
  let answer;

  optionsInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  optionsInput.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <h2>Thank You for playing the quiz</h2>
  <h2>${right}/${total} are correct</h2>`;
};
loadquestion();
