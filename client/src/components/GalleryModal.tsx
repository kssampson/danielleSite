import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  closeModal: () => void;
};

const GalleryModal = ( { images, currentIndex, setCurrentIndex, closeModal }: Props ) => {

  const leftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const rightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="relative">
        <div className="px-14 ">
          <img className="w-full h-auto max-h-" src={images[currentIndex].src} alt={images[currentIndex].alt}/>
        </div>
          <IoMdClose className="absolute right-16 overflow-y-scroll top-2 cursor-pointer" onClick={closeModal}/>
      </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex px-6">
          <button onClick={leftArrowClick}>
            <FaArrowCircleLeft />
          </button>
          <button onClick={rightArrowClick}>
            <FaArrowCircleRight />
          </button>
        </div>
    </div>
  );
};

export default GalleryModal;