import React, { useRef, useState, useEffect, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Top } from "../components/Top";
import { Word } from "../components/Word";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

type CardType = {
  id: number;
  word: string;
  translate: string;
};
type PropsType = {
  time: string;
  error: string;
};

export const Main: FC<PropsType> = ({ time, error }) => {
  const swiperNavPrevref = useRef(null);
  const swiperNavNextref = useRef(null);

  const [cards, setCards] = useState<CardType[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://63caa7a5f36cbbdfc75d4c8d.mockapi.io/db"
      ).then((response) => response.json());
      const dataSort = response.sort(() => Math.random() - 0.5);
      setCards(dataSort);
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Top time={time} />
      <div className="main-slider">
        {cards && cards.length > 0 ? (
          <Swiper
            modules={[Navigation, EffectCards]}
            speed={300}
            navigation={{
              prevEl: swiperNavPrevref.current,
              nextEl: swiperNavNextref.current,
            }}
            effect={"cards"}
            grabCursor={true}
          >
            {cards.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Word word={slide.word} translate={slide.translate} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className="mt-6"
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
      {cards && cards.length === 0 && (
        <Link
          to="/adding-words"
          className="text-center my-3 font-semibold cursor-pointer"
        >
          Add a new word
        </Link>
      )}
      {error && (
        <div className="text-center my-3 font-semibold text-red-600">
          {error}
        </div>
      )}
      <Navbar
        swiperNavPrevref={swiperNavPrevref}
        swiperNavNextref={swiperNavNextref}
      />
    </div>
  );
};
