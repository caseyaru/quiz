import questions from '../../utils/questions';

interface ResultProps {
  correct: number,
  resetResults: () => void
}

const Result = ({ correct, resetResults }: ResultProps) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="Иконка" />
      <h2>Вы отгадали {correct} раз из {questions.length}</h2>
      <button onClick={resetResults}>Попробовать снова</button>
    </div>
  );
}

export default Result;