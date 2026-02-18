export const extractPlaylistId = (url) => {
  // This regex looks for "list=" and grabs the 34 characters that follow
  const regex = /[?&]list=([^#\&\?]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
