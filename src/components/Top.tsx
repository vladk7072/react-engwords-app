import React, { FC } from "react";

type PropsType = {
  time: string
}

export const Top: FC<PropsType> = ({ time }) => {

  return <div className="top">{time ? <>{time}</> : <div className="w-[40px] h-[24px] bg-[#c9b7a7] rounded-md"></div>}</div>;
};
