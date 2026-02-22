import { VideoCard } from "../components/VideoCard";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import {
  generateAndSavePlaylist,
  fetchPlaylistVideos,
} from "../store/playlistSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { extractPlaylistId } from "../services/youtube";
import { toast } from "react-toastify";

export const GeneratePlaylist = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  // 1. Grab data from Redux
  const { loading, userPlaylists } = useSelector((state) => state.playlists);
  const { userData } = useSelector((state) => state.auth);

  // 2. Fetch existing playlists when Aman logs in or the page loads
  useEffect(() => {
    if (userData?.$id) {
      dispatch(fetchPlaylistVideos(userData?.$id));
    }
  }, [dispatch, userData]);

  const handleGenerate = async (e) => {
    e.preventDefault();

    const playlistId = extractPlaylistId(url);
    if (!playlistId)
      return toast.error("Please enter a valid Youtube playlist link");

    const alreadyExists = userPlaylists?.find(
      (p) => p.playlistId === playlistId,
    );

    if (alreadyExists)
      return toast.error("You have already added this playlist!");

    const result = await dispatch(
      generateAndSavePlaylist({ url, userId: userData.$id }),
    );

    if (generateAndSavePlaylist.fulfilled.match(result)) {
      setUrl("");
      toast.success("Playlist generated and added to your courses! ✅");
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      {/* Search & Input Header */}
      <form
        onSubmit={handleGenerate}
        className="relative mt-2 flex w-full flex-col items-center justify-center gap-4 px-4 py-2 md:mt-4 md:flex-row md:px-10 md:py-4"
      >
        <Link
          to="/"
          className="left-10 rounded-full bg-yellow-400 p-2 text-black hover:bg-yellow-500 active:scale-95 md:absolute lg:left-20"
        >
          <IconArrowLeft />
        </Link>

        <input
          placeholder="Paste Youtube playlist link here..."
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="flex w-full max-w-lg rounded-full bg-yellow-400 px-6 py-2 text-black placeholder:text-neutral-700 focus:bg-yellow-500 focus:ring-2 focus:ring-black focus:outline-none"
        />

        <button
          disabled={loading}
          type="submit"
          className="cursor-pointer rounded-full bg-[#3A3A3A] px-8 py-3 font-bold text-white transition hover:bg-[#2A2A2A] active:scale-95 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Playlist"}
        </button>
      </form>

      <hr className="mx-10 border-neutral-800" />

      {/* Dashboard Grid: Showing previous playlists */}
      <div className="flex flex-col p-4 md:px-10">
        <h2 className="font-nabla mb-6 text-2xl md:text-4xl">My Courses</h2>

        {userPlaylists.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {userPlaylists.map((course, index) => (
              <Link
                to={`/playlist/${course.playlistId}`}
                key={course.$id || index}
              >
                <VideoCard
                  imgSrc={course.thumbnail}
                  videoNumber={index + 1}
                  videoTitle={course.title}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-neutral-500">
            <p className="text-xl">No playlists generated yet.</p>
            <p className="text-sm">Paste a link above to start learning!</p>
          </div>
        )}
      </div>
    </div>
  );
};
