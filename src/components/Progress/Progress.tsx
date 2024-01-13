import React from "react";
import "./Progress.scss";
import { Question } from "../../types/question";
import questions from "../../utils/questions";

interface ProgressProps {
  step: number,
  question: Question,
  onClickVariant: (index: number) => void
}

const Progress = ({ step, question, onClickVariant }: ProgressProps) => {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Progress;
