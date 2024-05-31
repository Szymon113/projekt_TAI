const questions = [
    {
        question: "1. Która zmienna w JavaScript przechowuje wartość logiczną?",
        options: ["Boolean", "Number", "String"],
        answer: 0
    },
    {
        question: "2. Co oznacza 'NaN' w JavaScript?",
        options: ["Not a Number", "Null a Number", "Not a Node"],
        answer: 0
    },
    {
        question: "3. Jaką metodą można zamienić ciąg znaków na liczbę całkowitą w JavaScript?",
        options: ["parseInt()", "toString()", "parseFloat()"],
        answer: 0
    },
    {
        question: "4. Jakie słowo kluczowe jest używane do deklarowania zmiennych w JavaScript?",
        options: ["var", "def", "declare"],
        answer: 0
    },
    {
        question: "5. Co oznacza DOM w kontekście JavaScript?",
        options: ["Document Object Model", "Data Object Model", "Digital Object Model"],
        answer: 0
    },
    {
        question: "6. Jaką metodą można dodać element do końca tablicy w JavaScript?",
        options: ["push()", "pop()", "append()"],
        answer: 0
    },
    {
        question: "7. Co zwraca metoda 'typeof' w JavaScript?",
        options: ["Typ zmiennej", "Wartość zmiennej", "Długość zmiennej"],
        answer: 0
    },
    {
        question: "8. Które z poniższych jest prawidłowym sposobem komentarza w JavaScript?",
        options: ["// Komentarz", "/* Komentarz */", "Oba powyższe"],
        answer: 2
    },
    {
        question: "9. Jaką wartość logiczną zwróci wyrażenie: '2' == 2 w JavaScript?",
        options: ["true", "false", "undefined"],
        answer: 0
    },
    {
        question: "10. Jaką wartość logiczną zwróci wyrażenie: '2' === 2 w JavaScript?",
        options: ["true", "false", "undefined"],
        answer: 1
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
