export const loadProfileImage = async () => {
  const res = await fetch("https://simple-blog-platform-with-next-js.vercel.app/api/profileImage");
  return res.json()
};
