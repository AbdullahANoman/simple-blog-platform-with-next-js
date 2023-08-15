import { loadProfileImage } from "@/utils/loadProfileImage";
import Image from "next/image";
import React from "react";

export const revalidate = 5

const Profile = async () => {
  const images = await loadProfileImage();
  return (
    <>
      <div className="flex justify-between mt-2 uppercase my-2">
        <p className="text-gray-600 font-semibold">Profile</p>
        <p className="font-semibold text-gray-400">Edit</p>
      </div>
      <hr />
      <div className="grid grid-cols-5 mt-5 gap-2">
        {images.map((picture) => (
          <Image alt="this is rendering image"key={picture?.image} height={30} width={45} style={{
            borderRadius : '50%'
          }} src={picture?.image}></Image>
        ))}
      </div>
    </>
  );
};

export default Profile;
