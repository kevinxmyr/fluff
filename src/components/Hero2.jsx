import React from "react";
import { Fade } from "react-reveal";

export default function Hero2() {
  return (
    <div className='flex justify-start content-center h-[70vh] bg-[#181E21]'>
      <Fade distance='2rem' bottom delay={300}>
        <div className='bg-slate- mt-[auto] mb-[auto] ml-[8.5rem]'>
          <h1
            className='
      text-[white] 
      leading-[3.5rem] 
      text-[2.6rem] 
      text-left
      font-bold w-[45rem]
    '>
            HOME BAKES MADE WITH LOVE, PASSION, AND METICULOUS ATTENTION TO
            DETAIL.
          </h1>
        </div>
      </Fade>
    </div>
  );
}
