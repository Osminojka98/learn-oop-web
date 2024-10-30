import React, { useState } from 'react';
import './TestQuestion.scss'; // Импортируем стили

const questions = [
  {
    question: "Какое ключевое слово используется для создания класса в JavaScript?",
    options: ["object", "class", "new"],
    answer: "class"
  },
  {
    question: "Как называется принцип ООП, заключающийся в скрытии данных?",
    options: ["Полиморфизм", "Инкапсуляция", "Наследование"],
    answer: "Инкапсуляция"
  },
  // Добавьте остальные вопросы
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: option });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    let finalScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setShowResult(true);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>Ваш результат: {score} из {questions.length}</h2>
        </div>
      ) : (
        <div>
          <h2 className="question-title">
            Вопрос {currentQuestion + 1}/{questions.length}
          </h2>
          <p className='quest'>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="option">
              <label>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedAnswers[currentQuestion] === option}
                  onChange={() => handleAnswer(option)}
                />
                {option}
              </label>
            </div>
          ))}
          <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
            Следующий
          </button>
          {currentQuestion === questions.length - 1 && (
            <button onClick={handleFinish}>Закончить тест</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
