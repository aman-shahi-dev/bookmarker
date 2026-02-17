import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

export const Layout = () => {
  return (
    <div className="font-inter flex min-h-screen w-full flex-col bg-[#1A1A1A] text-white">
      <Analytics />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-right" theme="dark" />
    </div>
  );
};
