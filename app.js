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
    qn: "Which of the following is the stylish language?",
    a: "HTML",
    b: "CSS",
    c: "JavaSctipt",
    d: "PHP",
    correct: "b",
  },
  {
    qn: "Who is the father of computer?",
    a: "Newton",
    b: "Charles Babbage",
    c: "Einestine",
    d: "Lord Buddha",
    correct: "b",
  },
  {
    qn: "Who is the PM of Nepal?",
    a: "KP baa",
    b: "Prachanda",
    c: "Dr.Bhattrai",
    d: "Deuba",
    correct: "b",
  },
  {
    qn: "Capital city of Nepal?",
    a: "Kathmand",
    b: "Pokhara",
    c: "Dharan",
    d: "Butwal",
    correct: "a",
  },
  {
    qn: "Who is the GOAT of cricket?",
    a: "Virat Kohli ",
    b: "Babar Azam",
    c: "Rohit Sharma",
    d: "Nabin Khanal",
    correct: "d",
  },
  {
    qn: "Who is Nabin Khanal?",
    a: "I dont Know",
    b: "Mr.Leggy",
    c: "Mr.pacer",
    d: "All-rounder",
    correct: "d",
  },
  {
    qn: "Birko maa la ko chini maa kasari pasyo kamila?",
    a: "Nai malai tha xaina",
    b: "Nischal lai tha hola",
    c: "Swostima lai tha hola",
    d: "Afno kam gar na khuru khuru",
    correct: "d",
  },
  {
    qn: "Who is the King of Cricket?",
    a: "Virat Kohli",
    b: "Babar Azam",
    c: "Sandeep Lamichhane",
    d: "ABD",
    correct: "a",
  },
  {
    qn: "Who is the father of computer?",
    a: "Newton",
    b: "Charles Babbage",
    c: "Einestine",
    d: "Lord Buddha",
    correct: "b",
  },
  {
    qn: "Who is the father of computer?",
    a: "Newton",
    b: "Charles Babbage",
    c: "Einestine",
    d: "Lord Buddha",
    correct: "b",
  },
  {
    qn: "Height of Mount Everest?",
    a: "8848m",
    b: "8848.9m",
    c: "8849m",
    d: "None of the above",
    correct: "c",
  },
  {
    qn: "Who is the father of Buddha?",
    a: "Śuddhodana",
    b: "Janak",
    c: "Krishna",
    d: "Mayadevi",
    correct: "a",
  },
  {
    qn: "Where is Supa Deurali Located?",
    a: "USA",
    b: "Arghakhanchi",
    c: "Hamro sundar Arghakhanchi",
    d: "All",
    correct: "d",
  },
  {
    qn: "Who is the GOAT of Football?",
    a: "Messi",
    b: "Ronaldo",
    c: "Kiran",
    d: "Neymar",
    correct: "c",
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
  <h2>${right}/${total} are correct</h2>
  <h2>Virat Kohli , Sandeep Lamichhane and MD Amir are the GOAT of cricket.Thank You!!!</h2>
  
  
  `;
  
};
loadquestion();
