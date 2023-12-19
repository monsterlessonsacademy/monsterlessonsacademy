import Button from "./Button";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  override: {
    backgroundColor: "black",
    color: "white",
  },
});

const App = () => {
  return (
    <div>
      <h1>Monsterlessons Academy</h1>
      <Button
        text="foo"
        isHighlighted
        variant="danger"
        style={styles.override}
      />
    </div>
  );
};

export default App;
