import React from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  buttons: React.ReactNode;
};

const Menu = ({ isOpen, setIsOpen, buttons }: Props) => {
  return (
    <div className='relative'>
      <button
        className="pl-10 bg-transparent opacity-80 border-none focus:outline-none text-gray-100 text-sm hover:text-yellow-600 transition duration-600"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        Menu
      </button>
      <div>
        {isOpen && (
          <div className={`absolute text-right flex flex-col gap-y-2 mt-5 pr-8 bg-black bg-opacity-80 md:hidden ${isOpen ? 'slide-down' : 'slide-out'}`}>
            {buttons}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
