
const SpotIFrame = () => {
  return (
    <>
      <iframe
        className="h-20 mr-4"
        style={{ borderRadius: '12px', border: 'none', marginBottom: '16px' }}
        src="https://open.spotify.com/embed/track/58LB2R5wGsKjJxk6Vo6xmU?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
};

export default SpotIFrame;
