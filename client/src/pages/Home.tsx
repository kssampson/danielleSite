import InfoBlock from "../components/InfoBlock";
import PageHeading from "../components/PageHeading";
import SpotIFrame from "../components/SpotIFrame";

type Props = {
  danielleHomeGradient: string;
  heading: string[];
  subHeading: string[];
}

const Home = ({ danielleHomeGradient, heading, subHeading }: Props) => {

  const listen = ['Listen'];

  return (
    <main className="w-full h-screen overflow-y-scroll pt-32 flex flex-col items-center md:items-start px-4">
      <div className="fixed inset-0 z-0">
        <img src={danielleHomeGradient} alt="background" className="w-full h-full object-cover"/>
      </div>
      <div className="relative z-10 w-full max-w-screen-lg">
        <section className="mb-16">
          <PageHeading heading={heading} subHeading={subHeading}/>
        </section>
        <section className="mb-16">
          <InfoBlock />
        </section>
        <section className="mt-16">
          <PageHeading heading={listen} subHeading={null}/>
        <section className="flex flex-wrap mt-10">
          <SpotIFrame />
        </section>
        </section>
      </div>
    </main>
  );
}

export default Home;

