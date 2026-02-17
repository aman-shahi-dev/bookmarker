import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PlaylistActions } from "../components/PlaylistActions";

export const Home = () => {
  const { status, loading, userData } = useSelector((state) => state.auth);

  if (loading)
    return (
      <h1 className="flex flex-1 animate-pulse flex-col items-center justify-center text-2xl md:text-4xl">
        Loading...
      </h1>
    );

  return (
    <div className="flex flex-1 flex-col items-center justify-start">
      {status ? (
        <>
          <h1 className="text-2xl text-yellow-400 md:text-6xl mt-20 mb-6">
            Welcome {userData?.name.split(" ")[0]} !
          </h1>
          <PlaylistActions />
        </>
      ) : (
        <>
          <h1 className="text-2xl text-yellow-400 text-shadow-lg md:text-6xl mt-35 mb-6">
            Welcome to Bookmarker !
          </h1>
          <Link
            to="/login"
            className="mt-10 rounded-full bg-yellow-400 bg-linear-to-br px-6 py-2 text-xl text-black transition duration-300 hover:bg-yellow-500 active:scale-95 md:px-10 md:py-4 md:text-2xl"
          >
            Try it now
          </Link>
        </>
      )}
    </div>
  );
};
