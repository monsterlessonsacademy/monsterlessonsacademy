import CreatableSelect from "react-select/creatable";

const App = () => {
  const options = [
    { value: "jack", label: "Jack" },
    { value: "john", label: "John" },
    { value: "mike", label: "Mike" },
  ];
  const handleChange = (newValue, actionMeta) => {
    console.log("handleChange", newValue, actionMeta);
    if (actionMeta.action === "create-option") {
      console.log("!!!", newValue);
    }
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.log("handleInputChange", inputValue, actionMeta);
  };
  return (
    <CreatableSelect
      options={options}
      isMulti
      onChange={handleChange}
      onInputChange={handleInputChange}
    />
  );
};

export default App;
