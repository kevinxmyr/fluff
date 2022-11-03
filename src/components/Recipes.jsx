import React from "react";
import { Fade } from "react-reveal";
import pic2 from "../assets/recipes-pic.jpeg";
import pic3 from "../assets/recipes-pic1.jpg";

export default function Recipes() {
  return (
    <div
      className='
      bg-slate-100
      text-black

      grid grid-cols-3
      grid-rows-[139px_auto_86px_auto_80px_auto_115px]

      h-[auto]
      p-index-margin
      '>
      <div className=' col-start-1 row-start-1 '></div>

      <Fade distance='2.5rem' left>
        <div className='bg-slate- col-start-1 row-start-2'>
          <h1 className='font-bold text-[1.6rem] pb-5'>Recipes</h1>
          <p className='font-rufina leading-8'>
            Sourdough can be intimidating for a novice baker, but it doesnt have
            to be. Every month, we combine some of our favorite sourdough
            recipes together.
          </p>
        </div>
      </Fade>

      <div className=' col-start-1 row-start-3'></div>

      <Fade left distance='2.5rem' delay={250}>
        <div className='bg-slate- col-start-1 row-start-4'>
          <h1 className='font-bold text-[1.6rem] pb-5'>Hand Crafted</h1>
          <p className='font-rufina leading-8'>
            Want to learn more about bakin and the secrets of bread making? Join
            our quarterly Hand Crafted courses in our store.
          </p>
        </div>
      </Fade>

      <div className=' col-start-1 row-start-5'></div>

      <Fade left distance='2.5rem' delay={700}>
        <div className='bg-slate- col-start-1 row-start-6'>
          <h1 className='font-bold text-[1.6rem] pb-5'>Community</h1>
          <p className='font-rufina leading-8'>
            Looking for a venue to host an event? FLUFF KOPPI welcomes creative
            souls from all walks of life.
          </p>
        </div>
      </Fade>

      <div className='bg-slate- col-start-1 row-start-7 row-end-8'>
        <p></p>
      </div>

      <div className='row-start-1 col-start-3 row-end-[8]'>
        <img className='w-[30rem] h-[100%]' src={pic3} alt='holding coffee' />
      </div>
    </div>
  );
}
// breaktime again ty sa panonood
