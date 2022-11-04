import React from "react";
import { Fade } from "react-reveal";
import picture from '../assets/hand-crafted-section3.jpeg'

export default function Wecare() {
  return (
    <div className='
      bg-beige
      text-[black] 
      flex
      flex-col-reverse
      
      px-5
      py-[2.7rem]

      iPad:flex
      iPad:justify-between
      iPad:p-[5rem_8.5rem]

      lt:
      lt:
    '>
 
      <Fade distance='3rem' delay={600} left>
      <div className=" iPad:mr-[10rem]">
         <img className="w-[30rem] h-[auto] shadow-xl" src={picture} alt="coffee" />
       </div>
       </Fade>

      <Fade distance='3rem' delay={500} right>
      <div className=" max-w-xs
        iPad:self-center 
        iPad:w-[25rem]">
        <h1 className="font-bold text-[2.5rem] mb-8 text-[2rem]
          iPad:mb-[2rem]">
            We Care
        </h1>
        <div className="font-rufina">
          <p className="pb-[2.7rem]">
            Our philosophy is to be part of the neighborhood and give back to our
            community.
            <br /> <br />We publish monthly sourdough recipe booklets both online
            and in-store, organize workshops and evening courses, and even rent
            out our shop for local artists and musicians.
          </p>
        </div>
      </div>
      </Fade>
      

    </div>
  );
}
