"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className=" mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/model-icon.png"
          alt="logo"
          width={80}
          height={8}
          className="object-contain"
        />
      </Link>

      <Link href="/api/auth/signin">
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </Link>
    </nav>
  </header>
);

export default NavBar;
