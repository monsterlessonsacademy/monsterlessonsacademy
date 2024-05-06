import NotValidChild from "./NotValidChild";

function App() {
  return (
    <>
      <NotValidChild body={<div>foo</div>} />
    </>
  );
}

export default App;
