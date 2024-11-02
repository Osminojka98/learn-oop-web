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
  {
    question: "Как называется принцип ООП, позволяющий объекту принимать разные формы?",
    options: ["Полиморфизм", "Инкапсуляция", "Абстракция"],
    answer: "Полиморфизм"
  },
  {
    question: "Как называется процесс, при котором класс наследует свойства другого класса?",
    options: ["Наследование", "Инкапсуляция", "Полиморфизм"],
    answer: "Наследование"
  },
  {
    question: "Какой метод вызывается при создании экземпляра класса?",
    options: ["constructor", "initialize", "create"],
    answer: "constructor"
  },
  {
    question: "Какое ключевое слово используется для наследования класса в JavaScript?",
    options: ["inherits", "extends", "implements"],
    answer: "extends"
  },
  {
    question: "Как называется механизм, позволяющий создавать шаблон для объектов?",
    options: ["Класс", "Объект", "Функция"],
    answer: "Класс"
  },
  {
    question: "Что позволяет создать защищенные свойства и методы в классе?",
    options: ["Приватные поля", "Публичные методы", "Конструктор"],
    answer: "Приватные поля"
  },
  {
    question: "Какой метод применяется для преобразования объекта в строку?",
    options: ["toString", "toJSON", "convert"],
    answer: "toString"
  },
  {
    question: "Как называется принцип ООП, заключающийся в создании универсальных методов, работающих с разными объектами?",
    options: ["Полиморфизм", "Наследование", "Абстракция"],
    answer: "Полиморфизм"
  },
  {
    question: "Как в JavaScript обозначается приватное поле класса?",
    options: ["_", "#", "$"],
    answer: "#"
  },
  {
    question: "Какое ключевое слово используется для создания экземпляра класса?",
    options: ["new", "create", "instanceof"],
    answer: "new"
  },
  {
    question: "Какой метод вызывается автоматически при обращении к объекту в строковом контексте?",
    options: ["toString", "valueOf", "toJSON"],
    answer: "toString"
  },
  {
    question: "Как называется метод, который возвращает примитивное значение объекта?",
    options: ["valueOf", "toString", "convert"],
    answer: "valueOf"
  },
  {
    question: "Как в JavaScript создается наследуемый класс?",
    options: ["class MyClass extends ParentClass", "class MyClass inherit ParentClass", "class MyClass parent ParentClass"],
    answer: "class MyClass extends ParentClass"
  },
  {
    question: "Какой метод вызывается при использовании оператора сложения с объектом?",
    options: ["valueOf", "toString", "sum"],
    answer: "valueOf"
  },
  {
    question: "Какое ключевое слово используется для обращения к текущему экземпляру класса?",
    options: ["this", "self", "class"],
    answer: "this"
  },
  {
    question: "Какой принцип ООП позволяет скрыть детали реализации и предоставлять только интерфейс?",
    options: ["Абстракция", "Наследование", "Инкапсуляция"],
    answer: "Абстракция"
  },
  {
    question: "Какой метод JavaScript используется для создания прототипного наследования?",
    options: ["Object.create", "Object.assign", "Object.clone"],
    answer: "Object.create"
  },
  {
    question: "Что возвращает метод constructor в JavaScript?",
    options: ["Ссылку на класс", "Ссылку на объект", "Имя функции"],
    answer: "Ссылку на класс"
  },
  {
    question: "Какой метод JavaScript применяется для проверки, принадлежит ли объект определенному классу?",
    options: ["instanceof", "typeof", "isPrototypeOf"],
    answer: "instanceof"
  },
  {
    question: "Какой метод JavaScript применяется для копирования свойств из одного объекта в другой?",
    options: ["Object.assign", "Object.copy", "Object.create"],
    answer: "Object.assign"
  },
  {
    question: "Какой метод позволяет сделать глубокое копирование объекта?",
    options: ["JSON.parse(JSON.stringify())", "Object.assign", "Object.create"],
    answer: "JSON.parse(JSON.stringify())"
  },
  {
    question: "Какой тип данных используется для хранения экземпляра класса?",
    options: ["Object", "Array", "Class"],
    answer: "Object"
  },
  {
    question: "Что произойдет, если в классе не определить метод constructor?",
    options: ["Он будет создан автоматически", "Класс не будет работать", "Будет ошибка"],
    answer: "Он будет создан автоматически"
  }
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
