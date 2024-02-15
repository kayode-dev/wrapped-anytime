import spotifyLogo from "../assets/spotifyOGG.png";
const TopTracks = ({ standing, image, trackName, artistName }) => {
  return (
    <>
      <div className="flex min-w-full p-2 items-center hover:bg-black/30 duration-300 rounded-t-md">
        <p className="font-bold text-xl ">{standing}</p>
        <div className="flex gap-4 items-center  p-5">
          <div className="flex gap-4 items-center">
            <div className="relative  shadow-sm hover:shadow-none duration-300 w-20 h-20">
              <img
                src={image}
                alt=""
                className="relative w-20 h-20"
              />
              <img
                src={spotifyLogo}
                alt=""
                className="absolute w-2 h-2 top-2 right-2"
              />
            </div>
            <div className="flex flex-col items-start gap-2 w-48">
              <p className="font-bold text-clip overflow-hidden">
                {trackName}
              </p>
              <p className="text-sm italic text-white/50"> by {artistName}</p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </>
  );
};
export default TopTracks;
