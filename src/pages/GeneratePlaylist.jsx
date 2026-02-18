import { VideoCard } from "../components/VideoCard";

export const GeneratePlaylist = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex w-full flex-col items-center justify-center gap-4 px-4 py-2 mt-2 md:mt-4 md:flex-row md:px-10 md:py-4">
        <input
          placeholder="Youtube playlist link"
          type="text"
          className="flex w-full max-w-lg rounded-full bg-yellow-400 px-4 py-2 text-black focus:bg-yellow-500 focus:outline-none"
        />
        <button className="cursor-pointer rounded-full bg-[#3A3A3A] px-6 py-3 hover:bg-[#2A2A2A] active:scale-95">
          Generate Playlist
        </button>
      </div>
      <div className="grid w-full flex-1 grid-cols-1 place-items-center p-4 pt-4 pb-4 md:grid-cols-4 md:gap-10 md:pt-10 md:pb-10">
        <VideoCard
          imgSrc={
            "https://images.unsplash.com/photo-1490999227831-419689580f92?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          videoNumber={1}
          videoTitle={"Title 1"}
        />
      </div>
    </div>
  );
};
