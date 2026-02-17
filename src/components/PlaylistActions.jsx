import { Link } from "react-router-dom";

export const PlaylistActions = () => {
  return (
    <div className="mt-10 flex h-15 w-80 items-center justify-evenly gap-4 md:w-120">
      <Link to="/generate-playlist" className="flex h-full w-1/2 items-center justify-center rounded-full bg-yellow-400 px-2 text-sm font-bold text-black hover:bg-yellow-500 active:scale-95 md:text-xl">
        Generate Playlist
      </Link>
      <Link to="/my-playlists" className="flex h-full w-1/2 items-center justify-center rounded-full bg-yellow-400 px-2 text-sm font-bold text-black hover:bg-yellow-500 active:scale-95 md:text-xl">
        My Playlists
      </Link>
    </div>
  );
};
