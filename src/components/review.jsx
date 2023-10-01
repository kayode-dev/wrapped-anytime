import { useEffect, useState } from "react";
import { getReturnedParamsFromAuth, getTopArtist } from "../functions/auth";
import TopArtist from "./topArtist";
const Review = () => {
  const [topArtists, setTopArtist] = useState({});
  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromAuth(window.location.hash);
      const setData = async () => {
        const data = await getTopArtist(access_token);
        setTopArtist(data.items);
      };
      setData();
    }
  },[]);

  console.log(topArtists);

  return (
    <div className="text-white">
      <p>Your top Artist's</p>
      <ul></ul>
    </div>
  );
};

export default Review;
