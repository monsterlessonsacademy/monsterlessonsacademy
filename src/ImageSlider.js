import { useState } from "react";

const slideStyles = {
  width: "100%",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div>
        <div onClick={goToPrevious}>Arrow left</div>
        <div onClick={goToNext}>Arrow right</div>
      </div>
      <div>
        {slides.map((slide, slideIndex) => (
          <div key="slideIndex">
            {slideIndex === currentIndex && (
              <img src={slide.url} alt={slide.title} style={slideStyles} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
