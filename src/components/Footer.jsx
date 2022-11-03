import React from "react";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";

export default function Footer() {
  return (
    <div
      className='
      bg-beige
      // text-black 
      font-rufina 
      p-[2rem_8.5rem]
      flex
      iPad:flex-col 
      '>

      {/*---------------------- LEFT DIV -------------------*/}
        <div className='
          h-[63vh]
          w-[100%]
          flex
          flex-col
          justify-center
          iPad:justify-start
          iPad:h-[auto]
          iPad:mb-[4.5rem]
          '>
            <div className="">
              <h1 className="
                text-[1.3rem]
                font-bold
                font-poppins
              ">FLUFF KOPPI.</h1>
            </div>

            <div className="mb-[2rem] mt-[1.5rem] w-[60%] ">
              <p>
                Purok 6 Brgy San Miguel Mabitac, Laguna, Mabitac, Philippines, 4020
              </p>
            </div>

            <div className="mt-[1.5rem]">
              <p>MONDAY - FRIDAY <br/> 6:00 AM TO 9:00 PM</p>
            </div>

            <div className="mt-[1.5rem]">
              <p>SATURDAY - SUNDAY <br/> 10:00 AM TO 8:00 PM</p>
            </div>

        </div>

      {/* RIGHT DIV */}
      <div className="bg-slate- flex flex-col
      iPad:w-[25rem]">

          <div className="mt-[9rem] w-[25rem]
            iPad:mt-0">
            <p>
              Office: Purok 6 Brgy San Miguel Mabitac, Laguna, Mabitac, Philippines,
              4020
            </p>
          </div>

          <div className="mt-[3rem]">
            <p>Contact : 4400 - 88 - 823</p>
          </div>

        <div className="bg-slate- flex mt-[8rem]
        iPad:mt-[3rem]">
          <a href='#'>
            <img className="w-[auto] h-[2rem] mr-[1rem]" src={fb} alt='fb' />
          </a>
          <a href='#'>
            <img className="w-[auto] h-[2rem]" src={ig} alt='ig' />
          </a>
        </div>

      </div>
    </div>
  );
}
