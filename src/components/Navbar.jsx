import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu, GiCoffeeBeans } from 'react-icons/gi'
import { Fade } from 'react-reveal'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  function toggleClose()  {
    return setOpen(!open);
  }
  function toggleCloseInLogo() {
    return setOpen(false)
  }

  return (
    <div className="bg-navbar
	  relative
    iPad:sticky
    iPad:flex 
    iPad:justify-between 
    iPad:py-8 
    iPad:px-[3rem]
    ">

      <style jsx="true">{`
        .link > a:hover {
          text-decoration: none;
        }
        .link {
          position: relative;
        }
        .link > a::before {
          content: '';
          height: 2px;
          background-color: white;
          position: absolute;
          top: 90%;
        }
        .link > a:hover::before {
          width: 100%;
        }
        
		  .menu{
        position: absolute;
		  }
		  .menuOpen{
        position: absolute;
        animation-name: animateOpen;
        animation-duration: .5s;
        animation-fill-mode: forwards;
		  }
      .menuClose{
        position: absolute;
        animation-name: animateClose;
        animation-duration: .250s;
        animation-fill-mode: forwards;
      }
      @keyframes animateOpen{
        from{
          top: -640px;
          opacity: 0;
        }
        to{
          opacity: 1;
        }
      }
      @keyframes animateClose{
        from{
          opacity: 1;
        }
        to{
          opacity: 0;
        }
      }
      `}
      </style>
      
      {/* LOGO AND BURGER MENU */}
      <div className='flex justify-between p-[5%] z-2'>
        <div className="font-poppins font-bold text-xl uppercase brand
          self-center"
          onClick={() => toggleCloseInLogo()}>
          <Link to="/">Fluff Koppi.</Link>
        </div>
    
          <button className='animate-pulse' onClick={() => {
            setOpen(!open)
          }}>
            <GiHamburgerMenu size={35}/>
          </button>

      </div>
		
    {/* NAVIGATION MENU ITEMS */}
    <div className={open ? 'menuOpen' : 'menuClose'}>
          <div className='
               
              bg-navbar
              z-[1] 
              w-[100vw]
              flex 
              flex-col
              items-center 
              gap-5
              p-[1rem]
            '>
            {/* <h1 className='mt-[1rem]'>item 1</h1>
            <h1>item 2</h1>
            <h1 className='mb-[1rem]'>item 3</h1> */}
              <div className="link" onClick={() => toggleClose()}>
                <Link to="/menu">Menu</Link>
              </div>

              <div className="link" onClick={() => toggleClose()}>
                <Link to="/contact">Contact</Link>
              </div>

              <div className="link" onClick={() => toggleClose()}>
                <Link to="/book">Book a table</Link>
              </div>  
          </div>
      </div>

      {/* <div className="flex gap-7 font-poppins">

          <div className="link">
            <Link to="/menu">Menu</Link>
          </div>

          <div className="link">
            <Link to="/contact">Contact</Link>
          </div>

          <div className="link">
            <Link to="/book">Book a table</Link>
          </div>

      </div> */}

    </div>
  )
}
