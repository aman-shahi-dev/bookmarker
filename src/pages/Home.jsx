import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const { status, loading, userData } = useSelector((state) => state.auth);

  if (loading)
    return (
      <h1 className="flex flex-1 animate-pulse flex-col items-center justify-center text-2xl md:text-4xl">
        Loading...
      </h1>
    );

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      {status ? (
        <h1 className="animate-bounce text-2xl md:text-6xl text-shadow-amber-300 text-shadow-sm">
          Welcome back {userData?.name}!
        </h1>
      ) : (
        <>
          <h1 className="animate-bounce text-2xl md:text-6xl text-shadow-amber-300 text-shadow-sm">
            Welcome to Bookmarker !
          </h1>
          <Link
            to="/login"
            className="mt-10 rounded-full bg-linear-to-br from-amber-300 via-black to-amber-300 px-6 py-2 text-xl text-neutral-300 transition duration-300 text-shadow-amber-300 text-shadow-sm hover:from-black hover:via-amber-300 hover:to-black hover:text-black active:scale-95 md:px-10 md:py-4 md:text-2xl"
          >
            Try it now
          </Link>
        </>
      )}
    </div>
  );
};
