import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="bg-navbar flex justify-between py-8 px-[12rem] sticky">
      
      <style jsx="true">{`
        .link > a:hover {
          text-decoration: none;
        }
        .link {
          position: relative;
        }
        .link > a::before {
          content: '';
          height: 1px;
          background-color: white;
          width: 0%;
          position: absolute;
          top: 90%;
        }
        .link > a:hover::before {
          width: 100%;
        }
      `}
      </style>    

      <div className="font-poppins font-bold text-xl uppercase brand">
        <Link to="/">Fluff Koppi.</Link>
      </div>
      <div className="flex gap-7 font-poppins">
        <div className="link">
          <Link to="/menu">Menu</Link>
        </div>
        <div className="link">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="link">
          <Link to="/book">Book a table</Link>
        </div>
      </div>
    </div>
  )
}
