import React from "react";
import { BsInstagram } from "react-icons/bs";
import { Fade } from "react-reveal";
import pic1 from "../assets/gallery1.jpg";
import pic2 from "../assets/gallery2.jpg";
import pic3 from "../assets/gallery3.jpg";
import pic4 from "../assets/gallery4.jpg";
import pic5 from "../assets/gallery5.jpg";
import pic6 from "../assets/gallery6.jpg";

export default function Gallery() {
  return (
    <div className='bg-beige p-[12%] 
    lt:p-[3.85rem]
    '>

      <div className='gap-[1rem] text-black grid lt:grid-cols-3 '>

        <Fade distance='1.2rem' delay={250}bottom>
          <div className='justify-self-center max-w-[20rem]'>
            <img className="shadow-md" src={pic1} alt='' />
          </div>

        </Fade>
        <Fade distance='1.2rem' delay={500} bottom>
          <div className='justify-self-center max-w-[20rem]'>
            <img className="shadow-md"  src={pic3} alt='' />
          </div>
        </Fade>

        <Fade distance='1.2rem' delay={750} bottom>
          <div className='justify-self-center max-w-[20rem]'>
            <img className="shadow-md"  src={pic4} alt='' />
          </div>
        </Fade>

        <Fade distance='1.2rem' delay={1000} bottom>
          <div className='justify-self-center max-w-[20rem]'>
            <img className="shadow-md"  src={pic6} alt='' />
          </div>
        </Fade>

        <Fade distance='1.2rem' delay={1250} bottom>
          <div className='justify-self-center max-w-[20rem]'>
            <img className="shadow-md"  src={pic5} alt='' />
          </div>
        </Fade>

        <Fade distance='1.2rem' delay={1500} bottom>
          <div className='justify-self-center max-w-[20rem]'>
            <img className="shadow-md"  src={pic2} alt='' />
          </div>
        </Fade>

        {/* FOLLOW US TEXT */}
        <Fade bottom distance='1rem' delay={1500}>
        <div className='p-[2rem] order-first lt:order-last '>
          <div className='grid lt:grid-cols-3 '>
            <h1 className='font-bold text-black 
                justify-self-center
                text-[1.4rem]
                leading-8
                lt:text-lg 
                lt:justify-self-start
                '>
              Follow us on Instagram <BsInstagram className="inline-block"/> @fluffkoppicafe
            </h1>
          </div>
        </div>
        </Fade>

      </div> 

    
    </div>
  );
}
