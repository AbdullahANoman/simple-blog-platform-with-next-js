export const loadBlogs = async () => {
    const res = await fetch("https://simple-blog-platform-with-next-js-ten9.vercel.app/api/blogs");
    return res.json();
  };
  