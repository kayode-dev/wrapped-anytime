import spotifyLogo from "../assets/spotifyOGG.png";
const TopArtist = ({ image, name, standing }) => {
  return (
    <div className="flex flex-col gap-4 bg-neutral-800 p-5 rounded shadow-xl shadow-black hover:scale-105 duration-200">
      <div className="flex items-center gap-4">
        <p className="font-bold">{standing}</p>
        <div className="flex flex-col gap-4">
          <div className="relative h-36 w-36 ">
            <img
              src={image}
              alt=""
              className="h-full w-full object-fill rounded"
            />
            <img
              src={spotifyLogo}
              alt=""
              className="absolute w-5 h-5 top-2 right-2"
            />
          </div>
          <p className="font-bold text-ellipsis whitespace-nowrap overflow-hidden w-32">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopArtist;
