import { loadSingleBlog } from "@/utils/loadSingleBlog";
import Image from "next/image";
import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const SingleBlog = async ({ params }) => {
  const blog = await loadSingleBlog(params?.id);
  const {
    bannerImage,
    authorName,
    authorImage,
    time,
    type,
    postTitle,
    postDetails,
    postDetailsOne,
    postDetailsTwo,
    image,
    image1,
    image2,
  } = blog || {};
  return (
    <div className="max-w-7xl mx-auto">
      <Image alt="this is rendering image"src={bannerImage} width={1500} height={1000}></Image>
      <p className="text-4xl">{postTitle}</p>
      <div className="flex items-center gap-5 mt-3">
        <Image
        alt="this is rendering image"
          src={authorImage}
          height={20}
          width={55}
          style={{ borderRadius: "50%" }}
        ></Image>
        <p className="text-xl font-semibold">{authorName}</p>
        <p className="text-gray-700">{time}</p>
      </div>
      <hr className=" px-2 mt-5  border" />
      <div className="flex justify-between items-center">
        <p className="text-[60px] font-semibold text-[#E74C3C]">2.3K</p>
        <div className="flex gap-4">
          <button>
            <FaFacebookSquare
              className="bg-[#39559B] text-white w-[250px] py-2"
              size={50}
            ></FaFacebookSquare>
          </button>
          <button>
            <FaTwitter
              className="bg-[#5AA8DF] text-white w-[250px] py-2"
              size={50}
            ></FaTwitter>
          </button>
          <button>
            <AiOutlinePlus
              className="bg-[#C3D0D8] font-bold text-white w-[100px] py-2"
              size={50}
            ></AiOutlinePlus>
          </button>
        </div>
      </div>
      <div>
        <p className="text-gray-500">{postDetails}</p>
        <p className="text-gray-500 mt-4">{postDetails}</p>
      </div>
      <div className="py-10 flex justify-center gap-5">
        <Image alt="this is rendering image"src={image} width={600} height={1000}></Image>
        <Image alt="this is rendering image"src={image2} width={600} height={1000}></Image>
      </div>
      <div>
        <p className="text-gray-500 my-5">{postDetails}</p>
        <Image alt="this is rendering image"src={image1} width={700} height={600}></Image>
      </div>
    </div>
  );
};

export default SingleBlog;
