import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = (props: any) => {
  return (
    <div className="w-full ">
      <div className="container h-20 flex justify-between items-center mx-auto border-b-gray-200 border-b-2 dark:border-b-white dark:border-opacity-50 dark:border-b">
        <div>VF</div>
        <div className="flex gap-5">
          <div>Skills</div>
          <div>Projects</div>
          <div>Contact</div>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
