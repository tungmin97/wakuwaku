export default function DetailTrailer({ trailer }) {
  return (
    <div className="mb-10">
      <h2 className="text-textPrimary text-base font-semibold mb-3">Trailer</h2>
      <div className="aspect-video relative">
        <iframe
          className="w-full h-full rounded"
          src={`https://www.youtube.com/embed/${trailer.id}?autoplay=0&mute=1&modestbranding`}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
