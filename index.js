const quizDB = [
    {
        question: "Q1: Which direction does the sun rise from?",
        a: "East",
        b: "West",
        c: "North",
        d: "South",
        ans: "ans1",
        img: "img1"
    },
    {
        question: "Q2: How many arms does a starfish have?",
        a: "4",
        b: "7",
        c: "5",
        d: "2",
        ans: "ans3",
        img: "img2"
    },
    {
        question: "Q3: Name the national flower of India?",
        a: "Rose",
        b: "Lotus",
        c: "jasmine",
        d: "daisy",
        ans: "ans2",
        img: "img3"
    },
    {
        question: "Q4: Where is Taj Mahal?",
        a: "Goa",
        b: "Nagpur",
        c: "Dehli",
        d: "Agra",
        ans: "ans4",
        img: "img4"
    },
    {
        question: "Q5: Which animal is know as the 'ship of the desert'?",
        a: "Jiraffe",
        b: "camel",
        c: "Tiger",
        d: "Lion",
        ans: "ans2",
        img: "img5"
    },
    {
        question: "Q6: How many letters are their in the english alphabet",
        a: "22",
        b: "24",
        c: "26",
        d: "30",
        ans: "ans3",
        img: "img6"
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const img = document.querySelector("img");

const answers = document.querySelectorAll('.answer');
let questionCount = 0;
let score = 0;

const showScore = document.querySelector('#showScore');

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    img.src = "Images/" + questionList.img + ".gif";
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false )
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score = score + 2;
    }
    else{
        score = score - 1;
    };
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>Score ${score}/${(quizDB.length) * 2}</h3>
        <button class="btn" onclick="location.reload()">Restart</button>`;

        showScore.classList.remove('scoreArea');
    }
});




   
   