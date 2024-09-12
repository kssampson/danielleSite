type Props = {
  infoBlockFirstSection:  {heading: string, body: string };
  infoBlockSecondSection: {heading: string, body: string };
}

const InfoBlock = ( { infoBlockFirstSection, infoBlockSecondSection }: Props ) => {

  return (
    <div className="flex flex-col lg:w-1/2 sm:w-2/3 h-full">
      <div className="flex flex-1 flex-col bg-black opacity-80 p-4">
        <span className="">
          {infoBlockFirstSection.heading}
        </span>
        <span className="mt-2">
          {infoBlockFirstSection.body}
        </span>
      </div>
      <div className="flex flex-1 flex-col bg-slate-300 opacity-80 p-4">
        <span className="text-black text-lg">
          {infoBlockSecondSection.heading}
        </span>
        <span className="mt-2 text-black">
          {infoBlockSecondSection.body}
        </span>
      </div>
    </div>
  )
}

export default InfoBlock;