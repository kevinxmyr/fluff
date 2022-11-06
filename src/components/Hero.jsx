import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import {address} from '../data/address'

export default function Hero(props) {
  return (
    <div className="container 
    bg-blue-500
    h-[40vh]">
      
      <style jsx='true'>{`
        .rec{
          position: relative;
        }
        .rec::before{
          position: absolute;
          top: 90%;
          content: '';
          width: 10px;
          background-color: pink;
        }
      `}
      </style>

      <div className="wrapper 
      bg-heroImg 
      bg-center 
      bg-no-repeat
      bg-cover
      bg-slate-500
      h-[100%]
      flex
      justify-center
      flex-col
      p-[10%]">
        
        <Fade bottom distance='25px'>
        <div className='flex '>
          <h1 className="rec
            leading-[3rem]
            font-bold
            text-[3rem]
            pb-5
          ">FLUFF KOPPI.</h1>
        </div>
        </Fade>

        <Fade bottom distance='18px'>
        <div className="flex flex-col">
          <Fade bottom distance='20px' delay={350}>
            <p className="
              font-rufina
              pb-[5rem]
            ">{address.address}</p>
          </Fade>
          <Fade bottom distance='16px' delay={750}>
            <div className="socials flex">

              <a href="https://www.facebook.com/Fluffkoppicafe/" target='_blank'>
                <FaFacebook size={27} className='social-icon shadow' />
              </a>
              <a href="https://www.instagram.com/fluffkoppicafe/?hl=en" target='_blank'>
                <FaInstagram size={28} className='social-icon w-7 ml-3' />
              </a>

            </div>
          </Fade>
        </div>
        </Fade>

      </div>

    </div>
   
  );
}
{/* <div
className='bg-cover pt-[10rem] pl-[3rem] min-h-[90vh] bg-heroImg bg-center
'>
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
</div> */}