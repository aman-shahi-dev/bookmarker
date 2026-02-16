import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../services/appwrite";
import { logout } from "../store/authSlice";

export const Navbar = () => {
  const { status, userData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        dispatch(logout());
        navigate("/login");
      })
      .catch((error) => console.error("Logout failed:", error.message));
  };

  return (
    <div className="flex w-full items-center justify-between gap-6 border-b border-neutral-700 bg-black px-4 py-3">
      <Link to="/" className="font-nabla text-xl md:text-2xl">
        Bookmarker
      </Link>

      {loading ? (
        <div className="h-8 w-24 animate-pulse rounded-full bg-neutral-800"></div>
      ) : status ? (
        <div className="flex items-center justify-center gap-4">
          <h1>Welcome {userData?.name}</h1>
          <button
            onClick={handleLogout}
            className="cursor-pointer rounded-full bg-red-500 px-3 py-1 hover:bg-red-700 active:scale-95"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-evenly gap-4">
          <Link
            to="/login"
            className="rounded-full px-4 py-1 text-black/40 transition duration-300 text-shadow-amber-300 text-shadow-sm hover:bg-amber-300 hover:text-black active:scale-95"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full px-4 py-1 text-black/40 transition duration-300 text-shadow-amber-300 text-shadow-sm hover:bg-amber-300 hover:text-black active:scale-95"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};
