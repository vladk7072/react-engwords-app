import React from "react";

export const Popup = () => {



  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20 bg-[#c9b7a7]">
      <div className="max-w-sm w-[80%] h-[90vh] bg-[#c2aa94] rounded-2xl flex items-center flex-col justify-center border-2 border-[#988371] p-5">
        <div className="word__text">🗯✏</div>
        <input
          className="my-9 py-3 px-5 max-w-[100%] w-[100%] rounded-xl border-2 border-[#988371] font-medium text-lg"
          type="text"
          placeholder="enter the english word"
        />
        <div className="word__text px-8 py-2 bg-[#988371] border-2 border-[#988371] rounded-xl active:bg-[#e9e0d9] active:text-[#988371]">
          add
        </div>
      </div>
    </div>
  );
};
