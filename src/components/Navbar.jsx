import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu, GiCoffeeBeans } from 'react-icons/gi'


export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
	
  }, [])
  
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
			top: -200%;
		  }
		  .menuOpen{
			position: absolute;
			top: 1;
			transition: 1s all ease;
		  }
      `}
      </style>
      
      <div className='flex justify-between p-[5%] animate-pulse'>
        <div className="font-poppins font-bold text-xl uppercase brand
          self-center
        ">
          <Link to="/">Fluff Koppi.</Link>
        </div>
    
          <button onClick={() => {
            setOpen(!open)
          }}><GiHamburgerMenu size={35}/>
          </button>

      </div>
		
		<div className={open ? 'menuOpen' : null}>
			<div className='menu bg-slate-600 transition-all ease-in min-w-[395px] flex flex-col items-center gap-5'>
				{/* <h1 className='mt-[1rem]'>item 1</h1>
				<h1>item 2</h1>
				<h1 className='mb-[1rem]'>item 3</h1> */}
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
