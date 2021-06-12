import { useState } from "react";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState([
    {
      text: "Question text",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    },
  ]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const nextQuestion = () => {
    const nextIndex = questionIndex + 1;
    if (nextIndex > questions.length - 1) {
      setIsFinished(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <div className="App">
      {isFinished && <div>Results</div>}
      {!isFinished && (
        <div>
          <Question question={questions[questionIndex]} />
          <div onClick={nextQuestion}>Next question</div>
        </div>
      )}
    </div>
  );
}

export default App;
