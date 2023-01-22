import React, { FC } from "react";
import { Link } from "react-router-dom";

type PropsType = {
  time: string;
  back?: boolean;
};

export const Top: FC<PropsType> = ({ time, back }) => {
  return (
    <div className="top">
      {back ? (
        <Link to={"/home"} className="flex items-center">
          <svg
            className="w-3 h-3 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="#000"
              d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
          <div className="-mt-1">back</div>
        </Link>
      ) : (
        <div></div>
      )}
      {time ? (
        <>{time}</>
      ) : (
        <div className="w-[40px] h-[24px] bg-[#c9b7a7] rounded-md"></div>
      )}
      {back ? (
        <Link to={"/home"} className="flex items-center opacity-0 vis-hidden">
          <svg
            className="w-3 h-3 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="#000"
              d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
          <div className="-mt-1">back</div>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};
