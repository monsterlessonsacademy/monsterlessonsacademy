const selectContainer = document.querySelector(".select-container");
const languages = [
  {
    id: "1",
    name: "Javascript",
  },
  {
    id: "2",
    name: "Typescript",
  },
  {
    id: "3",
    name: "Node",
  },
  {
    id: "4",
    name: "Ruby",
  },
  {
    id: "5",
    name: "Elm",
  },
  {
    id: "6",
    name: "Haskell",
  },
  {
    id: "7",
    name: "Elixir",
  },
  {
    id: "8",
    name: "Java",
  },
];

elSelect(selectContainer, {
  selectedOptionId: "5",
  availableOptions: languages,
  onOptionChange: (option) => {
    console.log("got outside that option changed", option);
  },
});
