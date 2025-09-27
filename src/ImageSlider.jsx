import { useEffect, useRef, useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const slidesContainerOverflowStyles = {
  height: "100%",
  overflow: "hidden",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  left: "32px",
  transform: "translate(0, -50%)",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  right: "32px",
  transform: "translate(0, -50%)",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};
const dotStyles = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};
const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
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
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div>
        <div style={leftArrowStyles} onClick={goToPrevious}>
          ❰
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
          ❱
        </div>
      </div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((slides, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
