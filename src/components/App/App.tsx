import React, { useState } from 'react';
import './App.scss';
import questions from '../../utils/questions';
import Progress from '../Progress/Progress';
import Result from '../Result/Result';

function App() {
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const question = questions[step];

  const onClickVariant = (index: number) => {
    setStep(step + 1);
    if (index === question.correct) {
        setCorrect(correct + 1);
        console.log(correct);
    }
  }

  const resetResults = () => {
    setStep(0);
    setCorrect(0);
  }

  return (
    <div className="App">
        {step !== questions.length
          ? <Progress step={step} question={question} onClickVariant={onClickVariant}/>
          : <Result correct={correct} resetResults={resetResults}/>
        }
    </div>
  );
}

export default App;
