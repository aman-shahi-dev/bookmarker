import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-black border-b border-neutral-700 py-3 px-4 gap-6">
      <Link to="/" className="font-nabla text-xl md:text-2xl">
        Bookmarker
      </Link>
      <div className="flex items-center justify-evenly gap-4">
        <Link
          to="/login"
          className="px-4 py-1  text-black/40 text-shadow-sm text-shadow-amber-300 rounded-full hover:bg-amber-300 hover:text-black active:scale-95 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-1 rounded-full  text-black/40 text-shadow-sm text-shadow-amber-300 hover:bg-amber-300 hover:text-black active:scale-95 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};
