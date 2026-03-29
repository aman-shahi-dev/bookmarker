import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { oauthCallback } from "../store/authSlice";
import { account } from "../services/appwrite/appwrite";

export default function AuthCallback() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");
    const secret = params.get("secret");

    if (userId && secret) {
      account
        .createSession(userId, secret)
        .then(() => dispatch(oauthCallback()).unwrap())
        .then(() => navigate("/"))
        .catch(() => navigate("/login"));
    } else {
      navigate("/login");
    }
  }, []);

  return <p className="flex items-center justify-center">Signing you in...</p>;
}
