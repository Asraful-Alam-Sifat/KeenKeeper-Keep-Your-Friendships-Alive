import Image from "next/image";
import React from "react";
import instagramLogo from "../../assets/Image-assets/instagram.png";
import facebookLogo from "../../assets/Image-assets/facebook.png";
import twitterLogo from "../../assets/Image-assets/twitter.png";

const Footer = () => {
  return (
    <div className="max-w-11/12 mx-auto py-6 sm:p-10">
      <div>
        <div>
          <h1 className="font-semibold text-5xl sm:text-7xl text-center ">
            KeenKeeper
          </h1>
          <p className="font-base opacity-85 text-center mt-5">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div className="mt-5 ">
          <h4 className="font-semibold text-2xl text-center mb-3">
            Social Links
          </h4>
          <div className="flex gap-2 justify-center">
            <Image
              className="w-9 h-9"
              src={instagramLogo}
              alt="Instagram Logo"
            />
            <Image className="w-9 h-9" src={facebookLogo} alt="Facebook Logo" />
            <Image className="w-9 h-9" src={twitterLogo} alt="Twitter Logo" />
          </div>
        </div>
      </div>

      <hr className="text-white opacity-15 my-10 border" />

      <div className="flex justify-between">
        <p className="font-normal opacity-50">
          <small>&copy; 2026 KeenKeeper. All rights reserved.</small>
        </p>
        <div className="flex gap-2 sm:gap-4">
          <p className="font-normal opacity-50">
            <small>Privacy Policy</small>
          </p>
          <p className="font-normal opacity-50">
            <small>Terms of Service </small>
          </p>
          <p className="font-normal opacity-50">
            <small>Coolies</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
