var currentQuestion=0
var totalQuestion= 10
var score =0

var quizContainer = document.getElementById('quiz')
var questionElement= document.getElementById('question')
var opt1= document.getElementById('opt1')
var opt2= document.getElementById('opt2')
var opt3= document.getElementById('opt3')
var opt4= document.getElementById('opt4')
var nextButton = document.getElementById('nextButton')
var resultContainer= document.getElementById('result')


function loadQuestion(questionIndex){
    var obj= questions[questionIndex]
    questionElement.textContent= (questionIndex+1)+'. '+ obj.question
    opt1.textContent= obj.option1
    opt2.textContent= obj.option2
    opt3.textContent= obj.option3
    opt4.textContent= obj.option4
}

    

function nextQuestion(){
    var selectedOption= document.querySelector('input[type=radio]:checked')
    if(!selectedOption){
        alert('Please choose your answer!')
        return
    }
    var answer= selectedOption.value
    if(questions[currentQuestion].answer == answer){
        score += 10
    }
    selectedOption.checked = false
        currentQuestion++

    if(currentQuestion == 9){
        nextButton.textContent= 'Finish'
    }
    if(currentQuestion == 10){
        quizContainer.style.display= 'none'
        resultContainer.style.display= ''
        resultContainer.textContent= 'Your Score: '+ score +'/'+ currentQuestion*10

        var restartButton = document.createElement("input")
        var restartButtonAttId = document.createAttribute('id')
        var restartButtonAttOnClick = document.createAttribute('onclick')
        restartButtonAttOnClick.value = "resetGame()";
        restartButtonAttId.value = "restartButton";
        restartButton.setAttributeNode(restartButtonAttId);
        restartButton.setAttributeNode(restartButtonAttOnClick);
        restartButton.type = "button";
        restartButton.value = "Try Again!"
        document.body.appendChild(restartButton);
        
    }
    loadQuestion(currentQuestion)
}


function resetGame() {
    currentQuestion= 0;
    loadQuestion(currentQuestion);
    quizContainer.style.display= ''
    resultContainer.style.display= 'none'
    nextButton.textContent= 'Next'
    var restartBtn = document.getElementById("restartButton")
    restartBtn.remove();
    return
}

loadQuestion(currentQuestion)
