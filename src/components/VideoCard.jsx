export const VideoCard = ({ imgSrc, videoNumber, videoTitle }) => {
  return (
    <div className="mt-2 mb-2 h-60 w-50 rounded-xl border border-neutral-700 shadow-[0px_0px_10px_rgba(255,255,255,0.1)]">
      <img
        src={imgSrc}
        alt=""
        className="h-2/3 w-full rounded-xl object-cover"
      />
      <h1 className="mt-2 text-center">Video {videoNumber}</h1>
      <h2 className="mt-2 text-center">{videoTitle}</h2>
    </div>
  );
};
