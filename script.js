const Questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Element",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is the largest populated country in the world?",
        answers:[
            {text:"india",correct:false},
            {text:"USA",correct:false},
            {text:"China",correct:true},
            {text:"South Africa",correct:false},
        ]
    },
    {
        question:"Capital of india?",
        answers:[
            {text:"delhi",correct:true},
            {text:"mumbai",correct:false},
            {text:"uttar pradesh",correct:false},
            {text:"lukcnow",correct:false},
        ]
    },
    {
        question:"which country has the currency value high?",
        answers:[
            {text:"UK",correct:false},
            {text:"USA",correct:false},
            {text:"Itly",correct:false},
            {text:"Qatar",correct:true},
        ]
    },
    
]

const questionElement=document.querySelector("#question");
const answerElement=document.querySelector("#answer-button");
const nextButton=document.querySelector("#next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();



}

function showQuestion(){
    resetState();
    let currentQuestion=Questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML= questionNo+". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        button.addEventListener("click", selectAnswer);
        
    });




}

function resetState(){
    // nextButton.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e){
    const selectButton=e.target;
    const iscorrect=selectButton.dataset.correct==="true";
    if(iscorrect){
        selectButton.classList.add("correct");
        score++;
    }
    else{
        selectButton.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You have scored ${score} out of ${Questions.length}!`;
    nextButton.innerHTML="play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<Questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<Questions.length)
        {
            handleNextButton();
        }
    else{
        startQuiz();
    }
})
startQuiz();