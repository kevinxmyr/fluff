import React from "react";
import { Fade } from "react-reveal";

export default function Hero2() {
  return (
    <div className='
      flex 
      bg-navbar
      p-[5%]
      mt-10
      
      iPad:max-w-[auto]
      lt:h-[70vh] 
      lt:content-center 
      lt:justify-start 
      '>
      <Fade distance='2rem' bottom delay={300}>
        <div className='
          text-[1rem]
          lt:mt-[auto] 
          lt:mb-[auto] 
          lt:ml-[8.5rem]'>
          <h1
            className='
             text-[white] 
              leading-9
              text-left
              font-bold 
              text-[1.8rem]

              iPad:leading-[3.5rem]
              lt:text-[2.6rem] 
              lt:w-[45rem]
              '>
            HOME BAKES MADE WITH LOVE,
             PASSION, 
             AND METICULOUS ATTENTION TO
            DETAIL.
          </h1>
        </div>
      </Fade>
    </div>
  );
}
