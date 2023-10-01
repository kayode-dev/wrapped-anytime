import { useEffect, useState } from "react";
import { getReturnedParamsFromAuth, getTopArtist } from "../functions/auth";
import TopArtist from "./topArtist";
const Review = () => {
  const [topArtists, setTopArtist] = useState([]);
  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromAuth(window.location.hash);
      const setData = async () => {
        const data = await getTopArtist(access_token);
        setTopArtist(data.items);
      };
      setData();
    }
  }, []);

  console.log(topArtists);

  return (
    <div className="flex flex-col justify-around items-center text-white p-8 gap-10">
      <p className="text-lg font-bold md:text-3xl">Your top Artiste's</p>
      <ul className="flex flex-col md:flex-row gap-4 w-4/5">
        {topArtists.map((artist) => {
          return (
            <TopArtist
              name={artist.name}
              image={artist.images[0].url}
              standing={topArtists.lastIndexOf(artist) + 1}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Review;
