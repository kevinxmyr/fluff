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
    <div className='
    bg-beige
    p-[12%]
    
    lt:p-[2.2rem]
    lt:justify-center
    '>

      <div className='
        gap-[1rem] 
        text-black 
        grid

        lt:grid-cols-3
        lt:max-w-[1100px]
        '>

        <Fade distance='1.2rem' delay={100}bottom>
          <div className='justify-self-center max-w-[22rem]'>
            <img className="shadow-md" src={pic1} alt='' />
          </div>

        </Fade>
        <Fade distance='1.2rem' delay={200} bottom>
          <div className='justify-self-center max-w-[22rem]'>
            <img className="shadow-md"  src={pic3} alt='' />
          </div>
        </Fade>

        <Fade distance='1.2rem' delay={300} bottom>
          <div className='justify-self-center max-w-[22rem]'>
            <img className="shadow-md"  src={pic4} alt='' />
          </div>
        </Fade>

        <Fade distance='1.2rem' delay={400} bottom>
          <div className='justify-self-center max-w-[22rem]'>
            <img className="shadow-md"  src={pic6} alt='' />
          </div>
        </Fade>

        <Fade distance='1.2rem' delay={500} bottom>
          <div className='justify-self-center max-w-[22rem]'>
            <img className="shadow-md"  src={pic5} alt='' />
          </div>
        </Fade>

        <Fade distance='1.2rem' delay={600} bottom>
          <div className='justify-self-center max-w-[22rem]'>
            <img className="shadow-md"  src={pic2} alt='' />
          </div>
        </Fade>

        {/* FOLLOW US TEXT */}
        <Fade bottom distance='1rem' delay={50}>
        <div className='mb-5 order-first lt:order-last '>
          <div className='grid lt:grid-cols-3 '>
            <h1 className='font-bold text-black 
                
                text-[1.4rem]
                leading-8
                iPad: text-center
                lt:text-start
                lt:text-lg 
                lt:justify-self-start
                lt:pl-[1rem]
                lt:pt-[1rem]
                '>
              <BsInstagram size={25} className="inline-block"/> Instagram: @fluffkoppicafe
            </h1>
          </div>
        </div>
        </Fade>

      </div> 

    
    </div>
  );
}
