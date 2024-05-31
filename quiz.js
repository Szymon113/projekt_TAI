const questions = [
    {
        question: "1. Co oznacza skrót HTML?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        answer: 0
    },
    {
        question: "2. Który język jest używany do stylizacji stron internetowych?",
        options: ["HTML", "CSS", "JavaScript"],
        answer: 1
    },
    {
        question: "3. Co to jest DOM?",
        options: ["Document Object Model", "Data Object Model", "Digital Object Model"],
        answer: 0
    },
    {
        question: "4. Co oznacza skrót CSS?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
        answer: 0
    },
    {
        question: "5. Który z poniższych to język programowania?",
        options: ["HTML", "CSS", "Python"],
        answer: 2
    },
    {
        question: "6. Co oznacza skrót HTTP?",
        options: ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol"],
        answer: 0
    },
    {
        question: "7. Która metoda HTTP jest używana do pobierania danych z serwera?",
        options: ["GET", "POST", "PUT"],
        answer: 0
    },
    {
        question: "8. Co oznacza skrót SQL?",
        options: ["Structured Query Language", "Simple Query Language", "Structured Question Language"],
        answer: 0
    },
    {
        question: "9. Który z poniższych jest systemem zarządzania bazami danych?",
        options: ["MySQL", "HTML", "CSS"],
        answer: 0
    },
    {
        question: "10. Co oznacza skrót API?",
        options: ["Application Programming Interface", "Application Program Interface", "Application Protocol Interface"],
        answer: 0
    }
];

window.onload = function() {
    const quizForm = document.getElementById('quizForm');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.classList.add('question');
        
        const questionText = document.createElement('p');
        questionText.textContent = q.question;
        div.appendChild(questionText);
        
        q.options.forEach((option, i) => {
            const label = document.createElement('label');
            label.textContent = option;
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'question' + index;
            input.value = i;
            label.prepend(input);
            div.appendChild(label);
        });
        
        quizForm.appendChild(div);
    });
};

function checkAnswers() {
    const quizForm = document.getElementById('quizForm');
    let score = 0;
    
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });
    
    const result = document.getElementById('result');
    result.textContent = `Twój wynik to: ${score} / ${questions.length}`;
}
