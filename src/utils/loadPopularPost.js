export const loadPopularPost = async () => {
    const res = await fetch("http://localhost:4000/popularPost");
    return res.json();
  };
  