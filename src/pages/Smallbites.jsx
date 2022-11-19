import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { smallbites } from "../data/Smallbites";

const Container = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

const Item = (props) => {
  const {title, description, price} = props
  return (
    <React.Fragment>
      {/* WRAPPER */}
      <div className="flex justify-center">
        {/* GRID */}
        <div className="bg-slate-200 max-w-[372px]">
          {/* TITLE AND PRICE */}
          <div className="bg-slate-300">
            <div className="flex justify-between iPad:flex-col iPad:mb-4">
              <div className="
                uppercase 
                text-[1.08rem]
                font-bold
                mb-[1.2rem]
                iPad:mb-1
                ">
                {title}
              </div>
              <div className="bg-slate-400 mr-[.5rem]
              iPad:row-start-2 iPad:col-start-1">
                {price}
              </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="mb-[1rem] ">
            {description}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default function Smallbites() {
  const Loop = smallbites.map((item) => {
    return (
      <div>
        <Item
          title={item.title}
          description={item.description}
          price={item.price}
        />
      </div>
    );
  });

  return (
    <div className='bg-white text-black p-[5%] font-rufina'>
      <p className="font-bold font-poppins text-[1.8rem]
      mb-[1.5rem]">
      SMALL BITES
      </p>
      <Container>{Loop}</Container>
      
    </div>
  );
}
