/* MEDICAL ASSESSMENT */
var assessmentNextButton = document.querySelector('#assessment-next');
var initialQuestion = document.querySelector('#initial-question');
var subsequentQuestions = document.querySelector('#subsequent-questions');
var subseqQuesText = document.querySelector('#subseq-ques-text')

// hide intial question once aswered
// and show template for subsequent questions 
assessmentNextButton.addEventListener('click', function (e) {
   e.preventDefault();
   initialQuestion.setAttribute('hidden', 'true');
   subsequentQuestions.removeAttribute('hidden');
   nextQuestion();
});

// Yes, No, Skip buttons
var yesBtn = document.querySelector('#yes-btn');;
var noBtn = document.querySelector('#no-btn');;
var skipBtn = document.querySelector('#skip-btn');;
yesBtn.addEventListener('click', nextQuestion);
noBtn.addEventListener('click', nextQuestion);
skipBtn.addEventListener('click', nextQuestion);

// random questions
var randomQuestions = ["Do you have a fever?","Do you have chills?","Have you had this problem more than 72 hours?","Do you have diarrhea?","Have you lost weight?","Do you have general weakness?","Do you feel tired?","Do you have swollen glands?"];
var count = 0;

// keep track of count and set correct question
function nextQuestion(){
   if ((count > 0) && (count < randomQuestions.length)){
      subseqQuesText.textContent = randomQuestions[count];
      count += 1;
   }
   // reset count 
   else {
      count = 0;
      subseqQuesText.textContent = randomQuestions[count];
      count += 1;
   }
}

