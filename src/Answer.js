const Answer = ({ answerText, index, onSelectAnswer, answered }) => {
  console.log("answered", answered);
  const letterMapping = ["A", "B", "C", "D"];
  return (
    <div className="answer" onClick={() => onSelectAnswer(answerText)}>
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
