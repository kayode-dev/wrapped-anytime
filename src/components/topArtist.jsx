import spotifyLogo from "../assets/spotifyOGG.png";
const TopArtist = ({ image, name, standing }) => {
  return (
    <div className="flex flex-col gap-4  p-5 rounded   hover:scale-105 duration-200">
      <div className="flex items-center gap-4">
        <p className="font-bold">{standing}</p>
        <div className="flex flex-col gap-4 ">
          <div className="relative h-40 w-40 md:h-60 md:w-60 shadow hover:shadow-none duration-300">
            <img src={image} alt="" className="h-full w-full object-fill" />
            <img
              src={spotifyLogo}
              alt=""
              className="absolute w-5 h-5 top-2 right-2"
            />
            <p className="absolute font-bold text-ellipsis whitespace-nowrap overflow-hidden w-32 md:w-full  bottom-2 left-2">
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtist;
