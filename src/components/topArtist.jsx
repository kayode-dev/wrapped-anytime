const TopArtist = ({ image, name, standing }) => {
  return (
    <li>
      <p>{standing}</p>
      <img src={image} alt="" />
      <p>{name}</p>
    </li>
  );
};

export default TopArtist;
