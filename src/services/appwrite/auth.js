import { account } from "./appwrite";
import { OAuthProvider } from "appwrite";

const REDIRECT_SUCCESS = `${window.location.origin}/auth/callback`;
const REDIRECT_FAILURE = `${window.location.origin}/login`;

export const loginWithGoogle = () =>
  account.createOAuth2Token(
    OAuthProvider.Google,
    REDIRECT_SUCCESS,
    REDIRECT_FAILURE,
  );

export const loginWithGithub = () =>
  account.createOAuth2Token(
    OAuthProvider.Github,
    REDIRECT_SUCCESS,
    REDIRECT_FAILURE,
  );

export const loginWithLinkedin = () =>
  account.createOAuth2Token(
    OAuthProvider.Linkedin,
    REDIRECT_SUCCESS,
    REDIRECT_FAILURE,
  );
