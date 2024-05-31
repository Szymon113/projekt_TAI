const questions = [
    {
        question: "1. Co oznacza skrót CPU?",
        options: ["Central Processing Unit", "Central Process Unit", "Central Programming Unit"],
        answer: 0
    },
    {
        question: "2. Jak nazywa się najmniejsza jednostka informacji w komputerze?",
        options: ["Bit", "Byte", "Nibble"],
        answer: 0
    },
    {
        question: "3. Który z poniższych to język programowania używany do analizy danych?",
        options: ["Python", "HTML", "CSS"],
        answer: 0
    },
    {
        question: "4. Co oznacza skrót HDD?",
        options: ["Hard Disk Drive", "High Density Drive", "Hybrid Disk Drive"],
        answer: 0
    },
    {
        question: "5. Który z poniższych jest przykładem oprogramowania typu open source?",
        options: ["Linux", "Microsoft Windows", "Adobe Photoshop"],
        answer: 0
    },
    {
        question: "6. Co to jest firewall?",
        options: ["Oprogramowanie zabezpieczające sieć", "Rodzaj wirusa komputerowego", "Urządzenie do przechowywania danych"],
        answer: 0
    },
    {
        question: "7. Jak nazywa się proces odzyskiwania danych z uszkodzonego nośnika?",
        options: ["Data recovery", "Data backup", "Data transfer"],
        answer: 0
    },
    {
        question: "8. Co oznacza skrót SSD?",
        options: ["Solid State Drive", "Super Speed Drive", "Static Storage Drive"],
        answer: 0
    },
    {
        question: "9. Jak nazywa się proces tworzenia kopii zapasowych danych?",
        options: ["Backup", "Restore", "Recovery"],
        answer: 0
    },
    {
        question: "10. Który z poniższych to popularny system kontroli wersji?",
        options: ["Git", "FTP", "HTTP"],
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
