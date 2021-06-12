import { useState } from "react";
import Question from "./Question";
import questions from "./data";

const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return unshuffledAnswers
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrentAnswersCount] = useState(0);
  const [showResults, setShowResult] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState(
    shuffleAnswers(questions[currentQuestionIndex])
  );

  const nextQuestion = () => {
    const isFinished = currentQuestionIndex > questions.length - 1;
    if (isFinished) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswers(shuffleAnswers(questions[currentQuestionIndex]));
    }
  };

  const restart = () => {
    setShowResult(false);
    setCurrentQuestionIndex(0);
  };

  const onSelectAnswer = (answerText) => {
    if (answerText === questions[currentQuestionIndex].correctAnswer) {
      setCorrentAnswersCount(correctAnswersCount + 1);
    }
    setCurrentAnswer(answerText);
  };

  return (
    <div className="quiz">
      {showResults && (
        <div>
          Results
          <div onClick={restart}>Restart</div>
        </div>
      )}
      {!showResults && (
        <div>
          <Question
            questionEntity={questions[currentQuestionIndex]}
            answers={answers}
            onSelectAnswer={onSelectAnswer}
            currentAnswer={currentAnswer}
          />
          <div onClick={nextQuestion}>Next question</div>
        </div>
      )}
    </div>
  );
}

export default App;
