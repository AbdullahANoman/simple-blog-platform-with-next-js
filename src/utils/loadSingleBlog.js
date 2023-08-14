export const loadSingleBlog = async(id) =>{
    const res = await fetch(`http://localhost:4000/blogs/${id}`)
    return res.json();
}