import React, { useState, useEffect } from 'react';
import Question from './Question';
import Timer from './Timer';
import Result from './Result';

const Quiz = ({ username }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [timerOver, setTimerOver] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('quizData'));
    if (savedData && !timerOver) {
      setQuestions(savedData.questions);
      setCurrentQuestion(savedData.currentQuestion);
      setAnswers(savedData.answers);
    } else {
      fetchQuestions();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizData', JSON.stringify({
      questions,
      currentQuestion,
      answers
    }));
  }, [questions, currentQuestion, answers]);

  const fetchQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
    const data = await response.json();
    setQuestions(data.results);
  };

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleTimerEnd = () => {
    setTimerOver(true);
    setIsQuizFinished(true);
  };

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      {isQuizFinished ? (
        <Result answers={answers} questions={questions} />
      ) : (
        <div>
          <Timer onEnd={handleTimerEnd} />
          {questions.length > 0 && (
            <Question 
              question={questions[currentQuestion]} 
              onAnswer={handleAnswer} 
              questionIndex={currentQuestion + 1} 
              totalQuestions={questions.length} 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
