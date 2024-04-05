import Calendar from "./Calendar";

const App = () => {
  const meetings = {
    "2024-04-05": ["Drink Coffee", "Learn React", "Sleep"],
    "2024-04-06": ["Drink Coffee", "Learn Angular", "Sleep"],
  };
  return <Calendar meetings={meetings} />;
};

export default App;
