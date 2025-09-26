import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={assets.favicon}
          alt="logo"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <h1 className="text-primary font-bold text-2xl">GenZenius</h1>
      </div>
      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
