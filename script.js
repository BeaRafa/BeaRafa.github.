const questions = [
    {
        question: "____, the meeting was a success.",
        options: ["Please", "But", "In short", "Somethimes"],
        answer: "In short"
    },
    {
        question: "The committee reviewed all the data; ____ they made a decision to proceed with the proposal.",
        options: ["but", "somethimes", "of course", "to sum up"],
        answer: "to sum up"
    },
    {
        question: "The main points have been covered, ____ we can move to the next topic.",
        options: ["to summarize", "for", "for example", "because"],
        answer: "to summarize"
    },
    {
        question: "The research findings are consistent with previous studies; ____ the hypothesis was supported.",
        options: ["nevertheless", "to wrap up", "but", "more over"],
        answer: "to wrap up"
    },
    {
        question: "The report is comprehensive and detailed; ____ it covers all the necessary aspects of the topic.",
        options: ["for example", "otherwise", "briefly", "so"],
        answer: "briefly"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.innerText = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        if (option.innerText === correctAnswer) {
            option.classList.add('correct');
        } else if (option.innerText === selectedOption) {
            option.classList.add('incorrect');
        }
    });

    document.getElementById('result').innerText = selectedOption === correctAnswer
        ? 'Correct!'
        : 'Incorrect!';

    document.getElementById('next-button').style.display = 'block';
}

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('result').innerText = '';
        document.getElementById('next-button').style.display = 'none';
    } else {
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('result').innerText = 'End of the game!';
        document.getElementById('next-button').style.display = 'none';
    }
});

loadQuestion();
