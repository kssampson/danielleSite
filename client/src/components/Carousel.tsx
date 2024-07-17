import { useState } from "react";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const rightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const displayedImages = () => {
    const endIndex = (currentIndex + 5) % images.length;
    if (currentIndex < endIndex || endIndex === 0) {
      return images.slice(currentIndex, currentIndex + 5);
    } else {
      return [...images.slice(currentIndex), ...images.slice(0, endIndex)];
    }
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="left-0 top-0 bottom-0 flex items-center z-10">
        <button
          className="bg-gray-900 text-white p-2 rounded-full opacity-50 hover:opacity-100"
          onClick={leftArrowClick}
        >
          {"<"}
        </button>
      </div>
      <div className="relative flex justify-center items-center space-x-2">
        {displayedImages().map((image, index) => (
          <div
            key={index}
            className={`relative ${index === 2 ? "z-20" : "z-10"} ${
              index === 2 ? "transform scale-110" : "transform scale-90"
            } transition-transform duration-300`}
            style={{
              marginTop: index === 2 ? "0px" : "20px",
              marginBottom: index === 2 ? "0px" : "20px",
              opacity: index === 2 ? 1 : 0.6,
            }}
          >
            <div
              className={`h-32 w-32 ${index === 2 ? "rounded-full border-4 border-white" : "rounded-lg border-2 border-white"}`}
              style={{ overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <img
                className={`object-cover h-full w-full ${index === 2 ? "rounded-full" : "rounded-lg"}`}
                src={image.src}
                alt={image.alt}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 flex items-center z-10">
        <button
          className="bg-gray-900 text-white p-2 rounded-full opacity-50 hover:opacity-100"
          onClick={rightArrowClick}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;