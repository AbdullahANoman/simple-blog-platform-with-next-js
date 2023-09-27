export const loadBlogs = async () => {
    const res = await fetch("https://simple-blog-platform-with-next-js.vercel.app/api/blogs");
    // const data = await res.json()
    return res.json()
  };
  