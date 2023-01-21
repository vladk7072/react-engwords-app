import React, { useRef } from "react";
import "./app.scss";
import { Top } from "./components/Top";
import { Navbar } from "./components/Navbar";
import { Word } from "./components/Word";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Popup } from "./components/Popup";

type StateType = {
  id: number;
  word: string;
  translate: string;
};
const state = [
  { id: 1, word: "Word", translate: "Слово" },
  { id: 2, word: "Word2", translate: "Слово2" },
  { id: 3, word: "Word3", translate: "Слово3" },
  { id: 4, word: "Word4", translate: "Слово4" },
] as StateType[];

export const App = () => {

  const swiperNavPrevref = useRef(null);
  const swiperNavNextref = useRef(null);

  state.sort(()=> Math.random()-0.5);

  return (
    <div className="main">
      {/* <Popup /> */}
      <div className="wrapper">
        <Top />
        <div>
          <Swiper
            modules={[Navigation, EffectCards]}
            speed={300}
            effect={"cards"}
            grabCursor={true}
            navigation={{
              prevEl: swiperNavPrevref.current,
              nextEl: swiperNavNextref.current,
            }}
          >
            {state.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Word word={slide.word} translate={slide.translate} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Navbar
          swiperNavPrevref={swiperNavPrevref}
          swiperNavNextref={swiperNavNextref}
        />
      </div>
    </div>
  );
};
