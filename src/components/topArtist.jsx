const TopArtist = ({ image, name, standing }) => {
  return (
    <div className="flex flex-col gap-4 bg-neutral-800 p-5 rounded shadow-xl shadow-black">
      <div className="flex items-center gap-4">
        <p className="font-bold">{standing}</p>
        <div className="flex flex-col gap-4">
          <div className="h-32 w-32 ">
            <img
              src={image}
              alt=""
              className="h-full w-full object-fill rounded"
            />
          </div>
          <p className="font-bold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TopArtist;
