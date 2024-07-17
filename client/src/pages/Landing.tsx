import { useEffect, useState } from "react";
import Signature from "../components/Signature";
import Socials from "../components/nav/Socials";
import { useNavigate } from "react-router-dom";

type Props = {
  danielleFlowersLandingSquare: string;
  danielleDarkLandingSquare: string;
  danielleDarkLanding: string;
  danielleDarkLandingResizeSquare: string;
}

const Landing = ({ danielleFlowersLandingSquare, danielleDarkLandingResizeSquare }: Props) => {

  const navigate = useNavigate();

  const [isSignatureComplete, setIsSignatureComplete] = useState<boolean>(false);

  const goHome = () => {
    navigate('/pages/home')
  }

  useEffect(() => {
    const pathElement = document.querySelector('.path');
    if (pathElement) {
      pathElement.addEventListener('animationend', () => {
        setIsSignatureComplete(true);
      })
    }
    return () => {
      if (pathElement) {
        pathElement.removeEventListener('animationend', () => {});
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img src={isSignatureComplete ? danielleDarkLandingResizeSquare : danielleFlowersLandingSquare} alt="background" className="absolute top-0 left-0 w-full h-full object-cover"/>
      <Signature />
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
        <Socials />
      </div>
      <button onClick={goHome} className={`absolute ${isSignatureComplete ? 'animate-pulse font-bold' : ''} bottom-10 left-1/2 transform -translate-x-1/2 text-white bg-transparent hover:bg-white hover:text-black hover:border-white border-white py-2 px-4 rounded`} type="button">
        ENTER
      </button>
    </div>
  )
}

export default Landing;
