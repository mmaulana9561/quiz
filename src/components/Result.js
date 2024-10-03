import React from 'react';

const Result = ({ answers, questions }) => {
  const correctAnswers = answers.filter((answer) => answer).length;

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Incorrect Answers: {questions.length - correctAnswers}</p>
      <p>Total Questions: {questions.length}</p>
    </div>
  );
};

export default Result;
