import Link from "next/link";
import React from "react";
import NavLink from "../Navlink/Navlink";
import Image from "next/image";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
];

const Navbar = () => {
  return (
    <nav className="  grid grid-cols-12 items-center bg-[#232F42] text-white ">
      <Link className="col-span-2" href={"/"}>
        <Image
        alt="rendering image"
          width={80}
          height={80}
          className="ml-10  md:mr-0"
          src="https://openlisthtml.themever.net/images/logo.png"
        ></Image>
      </Link>
      <div className="col-span-4">
        <ul className="flex items-center ml-20 md:ml-0">
          {navLinks.map((link, index) => (
            <li className="mx-2" key={index}>
              <NavLink
                exact={link?.path == "/"}
                activeClassName="text-[#FF7141]"
                href={link?.path}
              >
                {link?.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-3 hidden md:flex">
        <div>
          <input
            type="text"
            className=" bg-[#2E3D55] focus:border-[#FF7143] px-4 focus:border-none w-[400px] py-2"
            name=""
            id=""
            placeholder="Search here"
          />
        </div>
      </div>
      <div className="col-span-2 hidden md:flex">
        <div>
            <button className="bg-[#EC663C] px-8 text-lg py-3 font-semibold rounded"> + Add Post </button>
        </div>
      </div>
      <div className="hidden md:flex col-span-1">
        <Image alt="this is rendering image"className="rounded-full" height={50} width={50} src="https://openlisthtml.themever.net/images/profile-pic.png"></Image>
      </div>
    </nav>
  );
};

export default Navbar;
