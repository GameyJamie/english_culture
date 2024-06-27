function checkAnswers() {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    const answers = {
        q1: 'tradition',
        q2: 'cuisine',
        // Add the correct answers for the rest of the questions
    };
    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const userAnswer = quizForm.elements[question].value;
        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct.`;
}
