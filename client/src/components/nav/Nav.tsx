import { useState } from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import Menu from "./Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonClasses = 'text-gray-100 text-sm px-2 py-1 hover:text-yellow-600 transition duration-600';

  const buttons = (
    <>
      <Link to="/pages/home" className={buttonClasses} onClick={() => setIsOpen(!isOpen)}>Home</Link>
      <Link to="/pages/ensembles" className={buttonClasses} onClick={() => setIsOpen(!isOpen)}>Ensembles</Link>
      <Link to="/pages/booking" className={buttonClasses} onClick={() => setIsOpen(!isOpen)}>Booking</Link>
      <Link to="/pages/gallery" className={buttonClasses} onClick={() => setIsOpen(!isOpen)}>Gallery</Link>
    </>
  );

  return (
    <nav className="text-white fixed w-full top-0 left-0 bg-opacity-80 bg-black z-20 px-4">
      <div className="">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex items-baseline space-x-2">
            {buttons}
          </div>
          <div className="md:hidden flex w-full justify-between items-center">
            <Socials />
            <div className="right-0">
              <Menu setIsOpen={setIsOpen} isOpen={isOpen} buttons={buttons}/>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-14">
            <Socials />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;