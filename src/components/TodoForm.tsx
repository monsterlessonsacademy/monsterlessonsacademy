import React, { useState } from "react";

interface ToDoFormProps {
  onAdd: (task: string) => Promise<void>;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ onAdd }) => {
  const [task, setTask] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      await onAdd(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoForm;
