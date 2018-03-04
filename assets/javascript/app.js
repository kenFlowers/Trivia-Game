var questions = [{
	"question": "The first mechanical computer designed by Charles Babbage was called ?",
	"option1": "Abacus",
	"option2": "Analytical Engine",
	"option3": "Calculator",
	"option4": "Processor",
	"answer": "2"
}, {
	"question": "Which of the following is the most powerful type of computer ?",
	"option1": "Super-micro",
	"option2": "Super conductor",
	"option3": "Super computer",
	"option4": "Megaframe",
	"answer": "3"
}, {
	"question": "Which is a single integrated circuit?",
	"option1": "Gate",
	"option2": "Mother Board",
	"option3": "Chip",
	"option4": "CPU",
	"answer": "1"
}, {
	"question": "C is ?",
	"option1": "A third generation high level language",
	"option2": "A machine language",
	"option3": "An assembly language",
	"option4": "All of the above",
	"answer": "1"
}, {
	"question": "Web pages are qritten using ?",
	"option1": "FTP",
	"option2": "HTTP",
	"option3": "HTML",
	"option4": "URL",
	"answer": "3"
}, {
	"question": "UNIVAC is an exmaple of",
	"option1": "First generation computer",
	"option2": "Second generation computer",
	"option3": "Third generation computer",
	"option4": "Fourth generation computer",
	"answer": "1"
}, {
	"question": "Which of the following is an example of non volatile memory ?",
	"option1": "VLSI",
	"option2": "LSI",
	"option3": "ROM",
	"option4": "RAM",
	"answer": "3"
}, {
	"question": "Graphic interfaces were first used in a xerox product is called ?",
	"option1": "Ethernet",
	"option2": "Inter LISP",
	"option3": "Small talk",
	"option4": "Zeta LISP",
	"answer": "1"
}, {
	"question": "Find the odd one out?",
	"option1": "ORACLE",
	"option2": "SYBASE",
	"option3": "C",
	"option4": "INFORMIX",
	"answer": "3"
}, {
	"question": "Which computer part controls video output ?",
	"option1": "RAM",
	"option2": "HDD",
	"option3": "GPU",
	"option4": "CPU",
	"answer": "3"
}, ]
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

//var container = $("#quizContainer");
//var qustionEl = $("#question");
//var opt1 = $("opt1");
//var opt2 = $("opt2");
//var opt3 = $("opt3");
//var opt4 = $("opt4");

//var nextButton = $("nextButton");
//var resultCont = $("result");


function loadQuestion (questionIndex){
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + ". " + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert("Please select your answer!");
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion ++;
	if(currentQuestion == totQuestions -1){
		nextButton.textContent = "Finish";
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = "Your Score: " + score;
		return;
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);