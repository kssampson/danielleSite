type Props = {
  heading: string[];
  subHeading: string[] | null;
}

const PageHeading = ( {heading, subHeading}: Props ) => {
  return (
    <div className="flex flex-col">
      {heading.map((word, idx) => (
        <span className={`text-yellow-600 font-bold ${!subHeading ? 'fluid-text-medium-heading' : 'fluid-text-heading' } fluid-text-heading p-0 m-0`} key={idx}>{word}</span>
      ))}
      {subHeading && (
        <div className="flex flex-row">
          {subHeading.map((word, idx) => (
            <span className="text-gray-300 italic fluid-text-sub-heading px-1" key={idx}>{`${word}${idx !== subHeading.length - 1 ? '.' : ''}`}</span>
          ))}
        </div>
      )}
    </div>
  )
};

export default PageHeading;