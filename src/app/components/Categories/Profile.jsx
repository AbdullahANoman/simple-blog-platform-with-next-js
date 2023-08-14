import { loadProfileImage } from "@/utils/loadProfileImage";
import Image from "next/image";
import React from "react";

export const revalidate = 5

const Profile = async () => {
  const images = await loadProfileImage();
  return (
    <>
      <div className="flex justify-between mt-2">
        <p>Profile</p>
        <p>Edit</p>
      </div>
      <hr />
      <div className="grid grid-cols-5 mt-5">
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
