import React from "react";

const NavBar = ({ title, navArr }) => {
  return (
    <div>
      <h1 className="py-1.5 text-lg font-bold">{title}</h1>
      <div className="flex flex-col gap-2 ">
        {navArr?.map((item, index) => {
          const Icon = item.icon;
          return (
            <p
              key={index}
              className=" py-2 text-balance font-semibold  text-gray-600 transition-colors gap-5 flex cursor-pointer items-center"
            >
              <Icon className=" h-4 w-4 text-gray-500" />
              <span>{item.name}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
