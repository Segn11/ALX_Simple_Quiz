// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Retrieve the selected answer from the radio buttons
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element to display results
    const feedback = document.getElementById('feedback');

    // Check if an option is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "red";  // Styling the feedback in case no answer is selected
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare the selected answer to the correct one without using "if (userAnswer === correctAnswer)"
    switch(userAnswer) {
        case correctAnswer:
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";  // Styling the feedback for a correct answer
            break;
        default:
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";  // Styling the feedback for an incorrect answer
            break;
    }
}

// Add an event listener to the submit button to call checkAnswer when clicked
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
