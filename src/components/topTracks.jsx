import spotifyLogo from "../assets/spotifyOGG.png";
const TopTracks = ({ standing, image, trackName }) => {
  return (
    <div className="flex">
      {" "}
      <p className="font-bold text-xl">{standing}</p>
      <div className="flex gap-4 items-center bg-neutral-800 p-5 rounded shadow-xl shadow-black">
        <div className="flex flex-col gap-4 w-52">
          <div className="relative">
            <img
              src={image}
              alt=""
              className="relative rounded lg:w-52 lg:h-52"
            />
            <img
              src={spotifyLogo}
              alt=""
              className="absolute w-5 h-5 top-2 right-2"
            />
          </div>
          <p className="text-ellipsis whitespace-nowrap overflow-hidden font-bold">
            {trackName}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TopTracks;
