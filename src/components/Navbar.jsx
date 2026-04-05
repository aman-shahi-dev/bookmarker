import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../services/appwrite/appwrite.js";
import { logout } from "../store/authSlice";
import { IconUser, IconLogout } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import BookmarkerLogo from "../components/BookmarkerLogo.jsx";

export const Navbar = () => {
  const { status, userData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        dispatch(logout());
        navigate("/login");
      })
      .catch((error) => console.error("Logout failed:", error.message));
  };

  return (
    <div className="sticky h-16 top-0 z-50 flex w-full items-center justify-between gap-6 border-b border-neutral-600 bg-black/20 px-4 py-3 shadow-xl backdrop-blur-3xl">
      <Link
        to="/"
        className="text-text flex items-center justify-center gap-1.5 text-lg font-bold transition-all duration-300 text-shadow-neutral-700 text-shadow-sm active:scale-95 md:text-2xl"
      >
        <BookmarkerLogo className="w-6 rounded bg-[#333333] shadow-sm md:w-8 lg:w-10" />
        Bookmarker
      </Link>

      {loading ? (
        <div className="bg-navbar h-8 w-24 animate-pulse rounded-full"></div>
      ) : status ? (
        <div className="flex items-center justify-center gap-4">
          <div className="relative" ref={profileDropdownRef}>
            <div
              onClick={() => setShowProfile((prev) => !prev)}
              className="bg-btn hover:bg-hover flex cursor-pointer flex-col rounded-full p-2 text-black active:scale-98"
            >
              <IconUser size={24} />
            </div>
            {showProfile && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-btn absolute top-12 right-0 z-50 min-w-50 rounded-lg border border-neutral-700 p-2 text-black shadow-2xl select-auto"
              >
                <h1 className="text-md text-center font-bold underline md:text-xl">
                  Account
                </h1>
                <h2 className="text-center text-sm md:text-lg">
                  {userData?.name}
                </h2>
                <h2 className="text-center text-sm md:text-lg">
                  {userData?.email}
                </h2>
              </div>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-op hover:bg-red-op-hover cursor-pointer rounded-full p-2 select-none active:scale-95"
          >
            <IconLogout size={24} />
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-evenly gap-4">
          <Link
            to="/login"
            className="group flex items-center gap-3.5 rounded border border-white/30 bg-linear-to-r from-black via-white/30 to-black px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl transition duration-300 ease-in-out hover:bg-white/40 active:scale-95 md:px-6 md:py-1.5 md:text-[17px]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="group flex items-center gap-3.5 rounded border border-white/30 bg-linear-to-r from-black via-white/30 to-black px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl transition duration-300 ease-in-out hover:bg-white/40 active:scale-95 md:px-6 md:py-1.5 md:text-[17px]"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};
