import { useState } from "react";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

const GridCarousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState(images);

  return (
    <section className="grid grid-cols-10 grid-rows-10 gap-[1vw]">
        <div className="col-start-1 col-span-2 row-start-1 row-span-1">
            <img src={images[0].src} alt="Image 1" className="object-cover object-center w-20 h-20"/>
        </div>

        <div className="col-start-2 col-span-1">
            <img src={images[1].src} alt="Image 2" className="object-cover object-center w-20 h-20"/>
        </div>

        <div className="col-start-1 col-span-1 row-start-2 row-span-1">
            <img src={images[2].src} alt="Image 3" className="object-cover object-center w-20 h-20"/>
        </div>

        <div className="col-start-2 col-span-1 row-start-2 row-span-1">
            <img src={images[3].src} alt="Image 4" className="object-cover object-center w-20 h-20"/>
        </div>

        <div >
            <img src={images[4].src} alt="Image 5" className="object-cover object-center w-20 h-20"/>
        </div>
    </section>
  )
};

export default GridCarousel;
