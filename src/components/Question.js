import React from 'react';

const Question = ({ question, onAnswer, questionIndex, totalQuestions }) => {
  const { question: questionText, correct_answer, incorrect_answers } = question;
  const options = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div>
      <h3>{`Question ${questionIndex}/${totalQuestions}`}</h3>
      <p dangerouslySetInnerHTML={{ __html: questionText }} />
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option === correct_answer)}>
          <span dangerouslySetInnerHTML={{ __html: option }} />
        </button>
      ))}
    </div>
  );
};

export default Question;
