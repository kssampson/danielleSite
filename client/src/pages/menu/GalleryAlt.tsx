

type Props = {
  gallery: { src: string }[];
};

const GalleryAlt = ({ gallery }: Props) => {
  return (
    <div className="gallery-container pt-16">
      <main className="grid grid-cols-gallery gap-4 p-4">
        {gallery.map((image, idx) => (
          <div key={idx} className="relative overflow-hidden">
            <img
              src={image.src}
              alt={`Image ${idx + 1}`}
              className="object-cover rounded-lg cursor-pointer w-full h-full"
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export default GalleryAlt;
