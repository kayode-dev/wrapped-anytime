const TopArtist = ({ image, name, standing }) => {
  return (
    <li className="flex flex-col gap-4">
      <div className="flex flex-row md:flex-col gap-4 items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="font-bold">{standing}</p>
          <div>
            <img src={image} alt="" className="h-16 w-16 md:h-20 md:w-20" />
          </div>
        </div>
        <p className="font-bold">{name}</p>
      </div>
      <hr className="md:hidden" />
    </li>
  );
};

export default TopArtist;
