export const loadSingleBlog = async(id) =>{
    const res = await fetch(`https://simple-blog-platform-with-next-js.vercel.app/api/blogs/${id}`,{
        cache : "force-cache"
    })
    return res.json()
}