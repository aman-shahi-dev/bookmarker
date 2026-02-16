import { Client, Account, ID } from "appwrite";
import { config } from "../config/config";

const client = new Client()
  .setEndpoint(config.appwrite_api_endpoint)
  .setProject(config.appwrite_project_id);

const account = new Account(client);

export const createAccount = async ({ email, password, name }) => {
  try {
    const userAccount = await account.create(
      ID.unique(),
      email,
      password,
      name,
    );
    if (userAccount) {
      return await loginUser({ email, password });
    }
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    return await account.createEmailPasswordSession(email, password);
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    return null;
  }
};

export const logoutUser = async () => {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    throw error;
  }
};
