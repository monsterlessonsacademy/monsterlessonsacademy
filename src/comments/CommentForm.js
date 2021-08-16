import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const hoverClass = isTextareaDisabled ? "" : "hover:bg-blue-600";
  const opacityClass = isTextareaDisabled ? "opacity-70" : "";
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="border border-gray-500 w-full h-20 my-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className={`bg-blue-500 rounded-md text-white px-4 py-2 mr-2 ${hoverClass} ${opacityClass}`}
        disabled={isTextareaDisabled}
      >
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="bg-blue-500 rounded-md text-white px-4 py-2 hover:bg-blue-600"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
