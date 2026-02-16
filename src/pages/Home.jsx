import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-1 items-center justify-center flex-col">
      <h1 className="text-2xl md:text-6xl animate-bounce font-nabla">
        Welcome to Bookmarker !
      </h1>
      <Link
        to="/login"
        className="bg-linear-to-br from-amber-300 via-black to-amber-300 hover:from-black hover:via-amber-300 hover:to-black font-bold md:px-10 px-6 py-2 md:py-4 rounded-full text-xl md:text-2xl mt-10  active:scale-95 transition duration-300 hover:text-black text-neutral-300 text-shadow-sm text-shadow-amber-300"
      >
        Try it now
      </Link>
    </div>
  );
};
