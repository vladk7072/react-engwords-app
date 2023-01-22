import React, { FC } from "react";

type PropsType = {
  time: string;
  back?: boolean;
};

export const Top: FC<PropsType> = ({ time, back }) => {
  return (
    <div className="top">
      {back ? <div>back</div> : <div></div>}
      {time ? (
        <>{time}</>
      ) : (
        <div className="w-[40px] h-[24px] bg-[#c9b7a7] rounded-md"></div>
      )}
      <div></div>
    </div>
  );
};
