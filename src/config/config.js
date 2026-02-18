export const config = {
  appwrite_api_endpoint: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
  appwrite_project_id: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwrite_database_id: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwrite_bucket_id: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appwrite_playlists_collection_id: String(
    import.meta.env.VITE_APPWRITE_PLAYLISTS_COLLECTION_ID,
  ),
  appwrite_progress_collection_id: String(
    import.meta.env.VITE_APPWRITE_PROGRESS_COLLECTION_ID,
  ),
  youtube_api_key: String(import.meta.env.VITE_YOUTUBE_API_KEY),
};
