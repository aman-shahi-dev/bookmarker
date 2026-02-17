import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "../store/authSlice";

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="font-jost flex min-h-screen w-full flex-col bg-[#1A1A1A] text-white">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-right" theme="dark" />
    </div>
  );
};
