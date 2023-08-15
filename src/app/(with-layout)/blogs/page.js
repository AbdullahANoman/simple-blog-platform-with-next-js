import { loadBlogs } from "@/utils/loadBlogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars, FaEllipsisV } from "react-icons/fa";
const Blogs = async () => {
  const blogs = await loadBlogs();
  return (
    <div className="max-w-7xl mx-auto px-5"> 
      {blogs.map((blog,index) => (
      
          <div key={blogs?.id} className="bg-white rounded-xl shadow-xl pb-5 mb-5">
            <div className="px-8 pt-4 ">
              <div>
                <Image alt="this is rendering image"height={400} width={1200} src={blog?.bannerImage}></Image>
              </div>
              <div className="grid grid-cols-3 items-center justify-center">
                <div className="flex gap-4 my-4  items-center">
                    
                  <div className="cursor-pointer">
                    <Image
                    alt="this is rendering image"
                      className="cursor-pointer"
                      height={40}
                      width={50}
                      style={{ borderRadius: "50%" }}
                      src={blog?.authorImage}
                    ></Image>
                  </div>
                   
                  <div>
                    <p className="font-semibold text-sm">{blog?.authorName}</p>
                    <p className="text-[12px] text-gray-700">{blog?.time}</p>
                  </div>
                </div>
                
                <div
                  className="bg-[#FF7043] mx-auto py-3 px-4  "
                  style={{ borderRadius: "50%" }}
                >
                  <FaBars className=" text-white " size={22}></FaBars>
                </div>
                <div>
                  <FaEllipsisV
                    className=" text-gray-800 ml-auto"
                    size={22}
                  ></FaEllipsisV>
                </div>
              </div>
            </div>
            <div className="px-8">
              <hr />
              <div className="my-3">
              <Link key={index} href={`/blogs/${blog?.id}`}>
                <h1 className="font-semibold text-gray-800 hover:text-[#FF7043] duration-300 cursor-pointer text-2xl">
                  {blog?.postTitle}
                </h1>
                </Link>
                <p className="my-7 text-gray-500">
                  {blog?.postDetails.slice(0, 144)}
                </p>
              </div>
            </div>
          </div>
          
      ))}
    </div>
  );
};

export default Blogs;
