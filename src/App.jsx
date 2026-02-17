import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { GeneratePlaylist } from "./pages/GeneratePlaylist";
import { MyPlaylists } from "./pages/MyPlaylists";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useEffect } from "react";
import { getCurrentUser } from "./services/appwrite";
import { checkAuth } from "./store/authSlice";

export const App = () => {
  const { status, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (loading) {
    return (
      <h1 className="flex flex-1 animate-pulse items-center justify-center text-2xl md:text-4xl">
        Loading...
      </h1>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* PUBLIC ROUTES */}
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute isAllowed={status} />}>
          <Route path="/generate-playlist" element={<GeneratePlaylist />} />
          <Route path="/my-playlists" element={<MyPlaylists />} />
        </Route>

        {/* OPTIONAL */}
        <Route
          path="*"
          element={
            <h1 className="flex h-full w-full flex-1 items-center justify-center text-lg md:text-2xl">
              Page Not Found
            </h1>
          }
        />
      </Route>
    </Routes>
  );
};
