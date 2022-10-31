import {useState, useEffect } from 'react'
import { navLinks} from '../constants';
import {Link} from "react-router-dom";
import {logoTransparent, close, menu} from '../assets'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <nav className="w-full flex py-0 justify-between items-center navbar">
      <a href='/'><img src={logoTransparent} alt='deed' className="w-[80px] xs:w-[150px]"></img></a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal hover:text-secondary cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-8' : 'mr-8'} text-white`}>
            <Link to={nav.id}>
              {nav.title}
            </Link>
          </li>
        )) 
        }
      </ul>
      <div className="xs:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu} 
          alt = "menu"
          className="w-[28px] h-[28x] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal hover:text-secondary cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-1'} text-white`}>
                <Link to={nav.id} onClick={() => setToggle((prev) => !prev)}>
                    {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar