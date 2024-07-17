import { PiSpotifyLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { SiItunes } from "react-icons/si";
import { LiaBandcamp } from "react-icons/lia";
import { MdOutlineFacebook } from "react-icons/md";

const Socials = () => {
  return (
    <div className="flex space-x-4 lg:space-x-6 xl:space-x-8">
      <a href="https://www.instagram.com/daniellereutter.harrah" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-gray-100 hover:text-yellow-600transition duration-600 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-xl opacity-90 hover:animate-pulse" />
      </a>
      <a href="https://open.spotify.com/artist/6Sr1WHoVdSp7NTFMK9WFMB" target="_blank" rel="noopener noreferrer">
        <PiSpotifyLogo className="text-green-400 hover:text-yellow-600 transition duration-600 opacity-90 hover:animate-pulse" target="_blank"/>
      </a>
      <a href="https://music.apple.com/cy/artist/danielle-reutter-harrah/1034027088" target="_blank" rel="noopener noreferrer">
        <SiItunes className="text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-yellow-600 transition duration-600 bg-white rounded-full opacity-90 hover:animate-pulse" />
      </a>
      <a href="https://makeunder.bandcamp.com/album/great-headless-blank" target="_blank" rel="noopener noreferrer">
        <LiaBandcamp className="text-white bg-cyan-600 rounded-full hover:text-yellow-600 transition duration-600 opacity-90 hover:animate-pulse" />
      </a>
      <a href="https://www.facebook.com/danielle.reutterharrah" target="_blank" rel="noopener noreferrer">
        <MdOutlineFacebook className="text-blue-500 hover:text-yellow-600 transition duration-600 hover:animate-pulse" />
      </a>
    </div>
  )
}

export default Socials;