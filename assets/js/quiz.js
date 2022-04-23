var quizBtn = document.querySelector(".quiz-btn");

// clean up function
var cleanUp = function() {
    var mainBody = document.querySelector("#main-body")
    console.log(mainBody);
    mainBody.innerHTML = "";
}

// add click event listener to the quiz button to start functions
quizBtn.addEventListener("click", cleanUp);