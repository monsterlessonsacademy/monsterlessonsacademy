import { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";
import defaultStyle from "./defaultStyle";
import defaultMentionStyle from "./defaultMentionStyle";

const users = [
  {
    id: "jack",
    display: "Jack",
  },
  {
    id: "john",
    display: "john",
  },
];

const fetchUsers = (query, callback) => {
  if (!query) return;

  setTimeout(() => {
    const filteredUsers = users.filter((user) =>
      user.display.toLowerCase().includes(query)
    );
    callback(filteredUsers);
  }, 2000);
};

const SingleLine = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    console.log("onChange", e);
    setValue(e.target.value);
  };
  const onAdd = (e) => {
    console.log("onAdd", e);
  };
  return (
    <div className="single-line">
      <h3>Single line input</h3>

      <MentionsInput
        // singleLine
        value={value}
        onChange={onChange}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
        style={defaultStyle}
      >
        <Mention data={fetchUsers} onAdd={onAdd} style={defaultMentionStyle} />
      </MentionsInput>
    </div>
  );
};

export default SingleLine;
