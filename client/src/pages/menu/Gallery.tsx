import { useState } from "react";
import GalleryModal from "../../components/GalleryModal";

type Props = {
  images: { src: string, alt: string }[];
};

const Gallery = ({ images }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClick = (idx: number) => {
    setIsOpen(!isOpen);
    setCurrentIndex(idx);
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <main className="w-full h-screen overflow-y-scroll pt-64 px-4 relative">
      <section className={`grid grid-cols-3 gap-1 ${isOpen ? 'opacity-5' : ' '}`}>
        {images.map((image, idx) => (
          <div key={idx} className="items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full hover:opacity-70 cursor-pointer"
              onClick={() => handleClick(idx)}
            />
          </div>
        ))}
      </section>
        {isOpen && (
          <GalleryModal images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} closeModal={closeModal}/>
        )}
    </main>
  );
};

export default Gallery;
