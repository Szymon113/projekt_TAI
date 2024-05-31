const questions = [
    {
        question: "1. Co oznacza skrót RAM?",
        options: ["Random Access Memory", "Read Access Memory", "Run Access Memory"],
        answer: 0
    },
    {
        question: "2. Który z poniższych to system operacyjny?",
        options: ["Linux", "Python", "HTML"],
        answer: 0
    },
    {
        question: "3. Jak nazywa się proces uruchamiania komputera?",
        options: ["Booting", "Loading", "Starting"],
        answer: 0
    },
    {
        question: "4. Co oznacza skrót GUI?",
        options: ["Graphical User Interface", "General User Interface", "Graphical Utility Interface"],
        answer: 0
    },
    {
        question: "5. Który z poniższych jest przykładem oprogramowania biurowego?",
        options: ["Microsoft Word", "Adobe Photoshop", "Google Chrome"],
        answer: 0
    },
    {
        question: "6. Który z poniższych to przeglądarka internetowa?",
        options: ["Mozilla Firefox", "Linux", "MySQL"],
        answer: 0
    },
    {
        question: "7. Co oznacza skrót URL?",
        options: ["Uniform Resource Locator", "Uniform Resource Link", "Uniform Reference Locator"],
        answer: 0
    },
    {
        question: "8. Który z poniższych to język programowania?",
        options: ["C++", "HTML", "CSS"],
        answer: 0
    },
    {
        question: "9. Co to jest 'phishing'?",
        options: ["Atak socjotechniczny", "Rodzaj wirusa komputerowego", "Oprogramowanie antywirusowe"],
        answer: 0
    },
    {
        question: "10. Jak nazywa się plik, który instaluje oprogramowanie?",
        options: ["Installer", "Uninstaller", "Updater"],
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
