import React from "react";
import { Fade } from "react-reveal";
import pic1 from "../assets/gallery1.jpg";
import pic2 from "../assets/gallery2.jpg";
import pic3 from "../assets/gallery3.jpg";
import pic4 from "../assets/gallery4.jpg";
import pic5 from "../assets/gallery5.jpg";
import pic6 from "../assets/gallery6.jpg";

export default function Gallery() {
  return (
    <div className='bg-beige py-32'>
      <div className='gap-[1rem] text-black grid grid-cols-3 p-index-margin'>
        <Fade distance='1.2rem' delay={250}bottom>
          <div className='bg-slate- '>
            <img src={pic1} alt='' />
          </div>
        </Fade>
        <Fade distance='1.2rem' delay={500} bottom>
          <div className='bg-slate-'>
            <img src={pic3} alt='' />
          </div>
        </Fade>
        <Fade distance='1.2rem' delay={750} bottom>
          <div className='bg-slate-'>
            <img src={pic4} alt='' />
          </div>
        </Fade>
        <Fade distance='1.2rem' delay={1000} bottom>
          <div className='bg-slate-'>
            <img src={pic6} alt='' />
          </div>
        </Fade>
        <Fade distance='1.2rem' delay={1250} bottom>
          <div className='bg-slate-'>
            <img src={pic5} alt='' />
          </div>
        </Fade>
        <Fade distance='1.2rem' delay={1500} bottom>
          <div className='bg-slate-'>
            <img src={pic2} alt='' />
          </div>
        </Fade>
      </div>
      <Fade bottom distance='1rem' delay={1750}>
        <div className='mt-[3rem] '>
          <div className='grid grid-cols-3 p-index-margin'>
            <h1 className='font-bold text-black text-lg'>
              Follow Us on Instagram @fluffkoppicafe
            </h1>
          </div>
        </div>
      </Fade>
    </div>
  );
}
