import React, { FC, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import { Top } from "../components/Top";
import { Button } from "../components/Button";

type PropsType = {
  time: string;
};

export const AddPage: FC<PropsType> = ({ time }) => {
  const textState = [
    { id: 1, text: "next" },
    { id: 2, text: "push" },
  ];

  const [numArray, setNumArray] = useState(0);
  const [valueFirst, setValueFirst] = useState("");
  const [valueSecond, setValueSecond] = useState("");

  const nextInput = () => {
    if (valueFirst.length >= 1) {
      setNumArray(numArray + 1);
    }
  };

  return (
    <div className="wrapper">
      <Top time={time} />
      <div className="main-slider main-slider__add">
        <div className="word__text">🗯✏</div>
        {numArray > 0 ? (
          <input
            className="input"
            type="text"
            placeholder="enter the english word"
            value={valueSecond}
            onChange={(e) => setValueSecond(e.currentTarget.value)}
          />
        ) : (
          <input
            className="input"
            type="text"
            placeholder="enter the english word"
            value={valueFirst}
            onChange={(e) => setValueFirst(e.currentTarget.value)}
          />
        )}
      </div>
      {numArray > 0 ? (
        <div className="flex items-center">
          <div>
            <Button title="back" />
          </div>
          <div>
            <Button title={textState[numArray].text} right={true} />
          </div>
        </div>
      ) : (
        <div onClick={() => nextInput()}>
          <Button title={textState[numArray].text} right={true} />
        </div>
      )}
    </div>
  );
};
