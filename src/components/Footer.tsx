import React from "react";
import { Github } from "./Github";
import Instagram from "./Instagram";
import { Linkedin } from "./Linkedin";

export const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 px-10">
      <div className="max-w-6xl mx-auto py-10">
        <div className="h-1 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex space-y-0 flex-row justify-between mt-8">
          <div>
            <p className='font-semibold  dark:text-gray-400'>Rafael Sandoval</p>
            <p className='text-gray-400'>Software Developer</p>
          </div>
          <div className="space-x-3 flex flex-row items-center">
            <Instagram />
            <Github />
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
