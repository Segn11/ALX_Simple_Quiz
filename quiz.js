// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Check if an answer is selected
    if (userAnswer) {
        // Explicitly compare the selected answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // Correct answer feedback
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            // Incorrect answer feedback
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedbackElement.textContent = "Please select an answer before submitting.";
    }
}

// Add event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
