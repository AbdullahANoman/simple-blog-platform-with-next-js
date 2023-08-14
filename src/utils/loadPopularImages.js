export const loadPopularImages = async () => {
    const res = await fetch("http://localhost:4000/popularImages");
    return res.json();
  };
  