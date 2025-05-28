import React from "react";

const ScheduleCard = ({ title, isActive, time, name, icon }) => {
  return (
    <div
      className={`h-min max-w-screen md:w-min p-4 ${
        isActive
          ? "bg-indigo-800 text-slate-200"
          : "bg-indigo-200 text-blue-900"
      } rounded-xl relative`}
    >
      <p className="font-semibold pb-2">{title}</p>
      <p>{time}</p>
      <span>{name}</span>
      <p className=" absolute top-2 right-2">{icon}</p>
    </div>
  );
};

export default ScheduleCard;
