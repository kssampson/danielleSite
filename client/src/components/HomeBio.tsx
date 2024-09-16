import { InfoBlockSecondSection } from "../assets/assets.config";

type Props = {
  infoBlockSecondSection: InfoBlockSecondSection;
}
const HomeBio = ( { infoBlockSecondSection }: Props ) => {

  const handleKqedQuote = (url: string) => {
    window.open(url, `${url}`);
  }

  const handleClassicalSonomaQuote = (url: string) => {
    window.open(url, `${url}`);
  }

  return (
    <div className="flex flex-col border-b-2 border-yellow-600 pb-4">
      <span className="mt-2 text-black">
          {infoBlockSecondSection.body1}
      </span>
      <div className="flex flex-col">
        <span className="mt-4 text-black">
          {infoBlockSecondSection.classicalSonomaBody}
        </span>
        <span className="text-black hover:text-yellow-600 cursor-pointer italic" onClick={() => handleClassicalSonomaQuote(infoBlockSecondSection.classicalSonomaQuoteURL)}>
          {infoBlockSecondSection.classicalSonomaQuote}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="mt-4 text-black">
          {infoBlockSecondSection.kqedBody}
        </span>
        <span className="text-black hover:text-yellow-600 cursor-pointer italic" onClick={() => handleKqedQuote(infoBlockSecondSection.kqedQuoteURL)} >
          {infoBlockSecondSection.kqedQuote}
        </span>
      </div>
    </div>
  );
};

export default HomeBio;