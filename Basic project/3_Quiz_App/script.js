const quizData = [
    {
        question: "Which language runs in a web browser",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for ?",
        a: "Cascading Style Sheet",
        b: "Creative Styling Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        correct: "a",
    },
    {
        question: "What does HTML stand for ?",
        a: "Happy Tongue Markup Language",
        b: "Hairy Tongue Markup Language",
        c: "Hyper Text Markup Language" ,
        d: "None of the above",
        correct: "c",
    },
    {
        question: " Will You Hire me...??  ",
        a: "Yes",
        b: "May be latter",
        c: "Next time",
        d: "no	",
        correct: "a"
    },
];  //this is object of array

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if (answer === quizData[currentQuiz].correct) {
            score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length){
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>You answerd ${score}/${quizData.length} questions correctly</h2>
        <button onclick = "location.reload()">Realod</button>
        `
    }
  }
})

