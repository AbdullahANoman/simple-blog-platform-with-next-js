export const loadBlogs = async () => {
    const res = await fetch("http://localhost:4000/blogs");
    return res.json();
  };
  