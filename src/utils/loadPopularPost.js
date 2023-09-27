export const loadPopularPost = async () => {
    const res = await fetch("https://simple-blog-platform-with-next-js.vercel.app/api/popularPost");
    return res.json()
  };
  