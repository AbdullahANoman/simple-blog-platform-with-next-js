import { loadPopularPost } from "@/utils/loadPopularPost";
import Image from "next/image";
import React from "react";

const PopularPost = async () => {
  const popularPost = await loadPopularPost();
  return (
    <div>
      <p>Popular Posts</p>
      <hr />
      <div className="mt-4">
        {popularPost.map((post,index) => (
          <div key={index} className="grid grid-cols-5 items-center gap-3">
            <div className="col-span-1">
                <Image alt="this is rendering image" style={{borderRadius: '50%'}} src={post?.image} width={70} height={40}></Image>
            </div>
            <div className="col-span-4 mb-4">
                <p className="text-sm hover:text-[#EC663C] duration-300">{post?.content}</p>
                <p className="text-[12px] text-gray-500">{post?.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPost;
