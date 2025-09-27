import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "http://localhost:5173/image-1.webp", title: "image-1" },
    { url: "http://localhost:5173/image-2.webp", title: "image-2" },
    { url: "http://localhost:5173/image-3.webp", title: "image-3" },
    { url: "http://localhost:5173/image-4.webp", title: "image-4" },
    { url: "http://localhost:5173/image-5.webp", title: "image-5" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
    </div>
  );
};

export default App;
