import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <div
      className='bg-cover pt-[10rem] pl-[3rem] min-h-[90vh]'
      style={{ backgroundImage: "url(src/assets/hero2.jpg)" }}>
      <Fade bottom distance='30px'>
        <div className='m-20'>
          <h1 className='text-7xl pb-10 font-bold text-white'>
            FLUFF KOPPI CAFÉ
          </h1>
          <p className='text-white  text-[1.5rem] font-rufina'>
            Purok 6 Brgy San Miguel Mabitac, Laguna, Mabitac, Philippines, 4020
          </p>
        </div>
      </Fade>

      <Fade bottom delay={500}>
        <div className='flex mt-48 ml-20'>
          <a href='https://www.facebook.com/Fluffkoppicafe/' target='_blank'>
            <FaFacebook size={27} className='social-icon shadow' />
          </a>
          <a
            href='https://www.instagram.com/fluffkoppicafe/?hl=en'
            target='_blank'>
            <FaInstagram size={27} className='social-icon w-7 ml-3' />
          </a>
        </div>
      </Fade>
    </div>
  );
}
