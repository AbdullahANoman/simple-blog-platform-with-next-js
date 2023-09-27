export const loadProfileImage = async () => {
  const res = await fetch("http://localhost:4000/profileImage");
  return res.json()
};
