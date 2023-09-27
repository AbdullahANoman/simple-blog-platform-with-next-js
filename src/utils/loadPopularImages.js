export const loadPopularImages = async () => {
    const res = await fetch("https://simple-blog-platform-with-next-js.vercel.app/api/popularImage");
    return res.json()
  };
  

