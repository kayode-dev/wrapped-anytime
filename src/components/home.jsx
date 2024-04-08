import SpotifyAuth from "../functions/auth";
import spotifylogo from "../assets/spotify.svg";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const Home = () => {
  const authURl = SpotifyAuth();
  gsap.registerPlugin(TextPlugin);

  useLayoutEffect(() => {
    gsap.to(".run", { duration: 2, text: "RunDwn", delay: 3 });
  }, []);

  return (
    <div className="flex flex-col justify-between items-center text-white p-8 md:px-28 md:py-8 h-screen">
      <div className="text-left flex flex-col justify-center gap-10 w-full min-h-[75vh]">
        <div>
          <p className="text-lg font-bold gradient-text"></p>
          <p className="text-5xl md:text-8xl font-bold gradient-text run">
            Numerous Cheffings Presents:
          </p>
        </div>
        <p className="text-sm md:text-lg text-italic">
          A RunDwn of your top songs and artists in Spotify
        </p>
      </div>
      <a href="/beforeyougo">
        <button className="animate-bounce h-6 w-max p-6 text-center flex justify-center text-sm md:text-base items-center font-semibold gap-4">
          <img src={spotifylogo} alt="" />
          This way to RunDwn
        </button>
      </a>
    </div>
  );
};

export default Home;
