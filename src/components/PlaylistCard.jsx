export const PlaylistCard = ({ imgSrc, playlistNumber, playlistTitle }) => {
  return (
    <div className="flex h-full max-h-60 w-full flex-col items-center justify-start rounded-xl border border-neutral-700 bg-linear-to-br from-yellow-500 to-yellow-700 shadow-[0px_0px_10px_rgba(255,255,255,0.1)] p-2">
      <div className="h-full max-h-30 w-full rounded-xl px-4 py-2">
        <img
          src={imgSrc}
          alt=""
          className="h-full w-full rounded-xl border border-yellow-600 object-cover shadow-2xl shadow-yellow-100"
        />
      </div>
      <div className="flex flex-col items-center justify-evenly p-2">
        <h1 className="mx-auto mb-2 w-fit rounded-full bg-neutral-600 px-3 py-1 text-center text-xs font-bold text-white">
          Playlist {playlistNumber}
        </h1>
        <h2 className="mb-4 truncate px-2 text-center text-sm font-bold text-wrap">
          {playlistTitle}
        </h2>
      </div>
    </div>
  );
};
