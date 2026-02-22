import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../services/appwrite/appwrite.js";
import { logout } from "../store/authSlice";
import { IconUser, IconLogout } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useRef } from "react";

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
    <div className="sticky top-0 z-50 flex w-full items-center justify-between gap-6 border-b border-neutral-700 bg-[#2A2A2A] px-4 py-3">
      <Link to="/" className="text-xl font-bold text-yellow-400 md:text-2xl">
        Bookmarker
      </Link>

      {loading ? (
        <div className="h-8 w-24 animate-pulse rounded-full bg-neutral-800"></div>
      ) : status ? (
        <div className="flex items-center justify-center gap-4">
          <div className="relative" ref={profileDropdownRef}>
            <div
              onClick={() => setShowProfile((prev) => !prev)}
              className="flex cursor-pointer flex-col rounded-full bg-yellow-400 p-2 text-black hover:bg-yellow-500 active:scale-98"
            >
              <IconUser size={24} />
            </div>
            {showProfile && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-12 right-0 z-50 min-w-50 rounded-lg border border-neutral-700 bg-yellow-400 p-2 text-black shadow-2xl select-auto"
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
            className="cursor-pointer rounded-full bg-red-500 p-2 select-none hover:bg-red-700 active:scale-95"
          >
            <IconLogout size={24} />
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-evenly gap-4">
          <Link
            to="/login"
            className="rounded-full bg-yellow-400 px-4 py-1 text-black transition duration-300 hover:bg-yellow-500 active:scale-95"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full bg-yellow-400 px-4 py-1 text-black transition duration-300 hover:bg-yellow-500 active:scale-95"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};
