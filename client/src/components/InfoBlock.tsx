
const InfoBlock = () => {

  const heading = 'Upcoming Events';
  const bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const heading2 = 'Some Blah blah ';
  const bodyText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <div className="flex flex-col w-1/2 h-full">
      <div className="flex flex-1 flex-col bg-black opacity-80 p-4">
        <span className="">
          {heading}
        </span>
        <span className="mt-2">
          {bodyText}
        </span>
      </div>
      <div className="flex flex-1 flex-col bg-slate-300 opacity-80 p-4">
        <span className="text-black text-lg">
          {heading2}
        </span>
        <span className="mt-2 text-black">
          {bodyText2}
        </span>
      </div>
    </div>
  )
}

export default InfoBlock;