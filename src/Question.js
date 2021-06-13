import Answer from "./Answer";

const Question = ({
  questionEntity,
  onSelectAnswer,
  currentAnswer,
  answers,
}) => {
  return (
    <div>
      <div className="question">{questionEntity.question}</div>
      <div className="answers">
        {answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={currentAnswer}
            correctAnswer={questionEntity.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
