import { Client, Databases, ID, Query } from "appwrite";
import { config } from "../../config/config";

const client = new Client()
  .setEndpoint(config.appwrite_api_endpoint)
  .setProject(config.appwrite_project_id);

const databases = new Databases(client);

export const playlistService = {
  // CREATE: Save a new generated playlist
  savePlaylist: async (data) => {
    return await databases.createDocument(
      config.appwrite_database_id,
      config.appwrite_playlists_collection_id,
      ID.unique(),
      data,
    );
  },

  // READ: Get all playlists for the logged-in user
  getUserPlaylists: async (userId) => {
    return await databases.listDocuments(
      config.appwrite_database_id,
      config.appwrite_playlists_collection_id,
      [Query.equal("userId", userId)],
    );
  },

  // DELETE: Remove a playlist
  deletePlaylist: async (docId) => {
    return await databases.deleteDocument(
      config.appwrite_database_id,
      config.appwrite_playlists_collection_id,
      docId,
    );
  },

  toggleProgress: async (userId, playlistId, videoId, isCompleted) => {
    // First, check if a record already exists for this videoId
    const existing = await databases.listDocuments(
      config.appwrite_database_id,
      config.appwrite_progress_collection_id,
      [Query.equal("userId", userId), Query.equal("videoId", videoId)],
    );

    if (existing.total > 0) {
      // Update existing record
      return await databases.updateDocument(
        config.appwrite_database_id,
        config.appwrite_progress_collection_id,
        existing.documents[0].$id,
        { isCompleted },
      );
    } else {
      // Create new record
      return await databases.createDocument(
        config.appwrite_database_id,
        config.appwrite_progress_collection_id,
        ID.unique(),
        { userId, playlistId, videoId, isCompleted },
      );
    }
  },
};
