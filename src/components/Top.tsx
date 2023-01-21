import React, { useState } from "react";

export const Top = () => {
  const [time, setTime] = useState("");

  setInterval(() => {
    var date = new Date();
    var datetime = date.toLocaleTimeString("uk-UA");
    let newtime = datetime.slice(0, -3);
    setTime(newtime);
  }, 1000);

  return <div className="top">{time ? <>{time}</> : <div className="w-[40px] h-[24px] bg-[#c9b7a7] rounded-md"></div>}</div>;
};
