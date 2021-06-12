import Answer from "./Answer";

const Question = ({ question }) => {
  return (
    <div>
      <div>{question.text}</div>
      <div>
        {question.answers.map((answer) => (
          <Answer answerText={answer} key={answer} />
        ))}
      </div>
    </div>
  );
};

export default Question;
