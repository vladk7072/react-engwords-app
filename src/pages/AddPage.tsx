import React, { FC, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import { Top } from "../components/Top";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

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
  const [pending, setPending] = useState(false);

  const nav = useNavigate();
  const pushFetch = async () => {
    setPending(true);
    try {
      await fetch("https://63caa7a5f36cbbdfc75d4c8d.mockapi.io/db", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ word: valueFirst, translate: valueSecond }),
      });
      setValueFirst("");
      setValueSecond("");
      setNumArray(0);
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
      nav("/home");
    }
  };

  const nextInput = () => {
    if (valueFirst.length >= 1) {
      setNumArray(numArray + 1);
    }
  };

  const pushWord = () => {
    if (valueFirst && valueSecond) {
      pushFetch();
    }
  };

  return (
    <div className="wrapper">
      <Top time={time} back={true} />
      <div className="main-slider main-slider__add">
        <div className="word__text">🗯✏</div>
        {numArray > 0 ? (
          <div className="flex items-center">
            <input
              className="input"
              type="text"
              placeholder="enter the english word"
              value={valueSecond}
              onChange={(e) => setValueSecond(e.currentTarget.value)}
            />
            {pending && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="60px"
                height="60px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="ml-2"
              >
                <g transform="translate(26.666666666666668,26.666666666666668)">
                  <rect x="-20" y="-20" width="40" height="40" fill="#c2aa94">
                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      repeatCount="indefinite"
                      dur="1s"
                      keyTimes="0;1"
                      values="1.1500000000000001;1"
                      begin="-0.3s"
                    />
                  </rect>
                </g>
                <g transform="translate(73.33333333333333,26.666666666666668)">
                  <rect x="-20" y="-20" width="40" height="40" fill="#c9b7a7">
                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      repeatCount="indefinite"
                      dur="1s"
                      keyTimes="0;1"
                      values="1.1500000000000001;1"
                      begin="-0.2s"
                    />
                  </rect>
                </g>
                <g transform="translate(26.666666666666668,73.33333333333333)">
                  <rect x="-20" y="-20" width="40" height="40" fill="#b5a596">
                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      repeatCount="indefinite"
                      dur="1s"
                      keyTimes="0;1"
                      values="1.1500000000000001;1"
                      begin="0s"
                    />
                  </rect>
                </g>
                <g transform="translate(73.33333333333333,73.33333333333333)">
                  <rect x="-20" y="-20" width="40" height="40" fill="#c8b890">
                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      repeatCount="indefinite"
                      dur="1s"
                      keyTimes="0;1"
                      values="1.1500000000000001;1"
                      begin="-0.1s"
                    />
                  </rect>
                </g>
              </svg>
            )}
          </div>
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
          <div onClick={() => setNumArray(0)}>
            <Button title={"back"} left={true} />
          </div>
          <div onClick={() => pushWord()}>
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
