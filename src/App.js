import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [{ url: "http://localhost:3000/image-1.jpg", title: "beach" }];
  const containerStyles = {
    width: "500px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
