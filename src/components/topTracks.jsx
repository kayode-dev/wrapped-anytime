const TopTracks = ({ standing, image, trackName }) => {
  return (
    <div className="flex gap-4 items-center bg-neutral-800 p-5 rounded shadow-xl shadow-black">
      <p className="font-bold text-xl">{standing}</p>
      <div className="flex flex-col gap-4">
        <img src={image} alt="" className="rounded" />
        <p className="font-bold">{trackName}</p>
      </div>
    </div>
  );
};
export default TopTracks;
