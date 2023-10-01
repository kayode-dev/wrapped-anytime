import SpotifyAuth from "../functions/auth";
import spotifylogo from "../assets/spotify.svg";

const Home = () => {
  const authURl = SpotifyAuth();

  return (
    <div className="flex flex-col justify-around items-center text-white p-8 min-h-screen">
      <div className="text-center flex flex-col gap-10">
        <div>
          <p className="text-lg md:text-3xl font-bold gradient-text">
            Numerous Cheffings Presents:
          </p>
          <p className="text-base md:text-2xl font-semibold">Wrapped Anytime</p>
        </div>
        <p className="text-sm md:text-lg">
          Get your spotify most *everything* without waiting for the end of the
          year
        </p>
      </div>
      <button className="h-6 w-max p-6 text-center rounded login-btn flex justify-center items-center font-semibold gap-4">
        <img src={spotifylogo} alt="" />
        <a href={authURl}>Log into Spotify</a>
      </button>
    </div>
  );
};

export default Home;
