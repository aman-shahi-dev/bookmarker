export const PlaylistCard = ({ imgSrc, playlistNumber, playlistTitle }) => {
  return (
    <div className="mt-2 mb-2 flex h-80 w-80 flex-col items-center justify-start rounded-xl border border-neutral-700 shadow-[0px_0px_10px_rgba(255,255,255,0.1)] md:h-80 md:w-100">
      <div className="h-2/3 w-full rounded-xl">
        <img
          src={imgSrc}
          alt=""
          className="h-full w-full rounded-t-xl object-cover"
        />
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-start gap-2 py-2 md:py-3">
        <h1 className="mx-auto mt-2 w-fit rounded-full bg-neutral-400 px-3 py-0.5 text-center text-xs font-bold text-black">
          Playlist {playlistNumber}
        </h1>
        <h2 className="md:text-md mt-2 truncate px-2 text-center text-sm font-bold text-wrap">
          {playlistTitle}
        </h2>
      </div>
    </div>
  );
};