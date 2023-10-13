import { useEffect, useState } from "react";
import {
  getReturnedParamsFromAuth,
  getTopArtist,
  getTopTracks,
} from "../functions/auth";
import TopArtist from "./topArtist";
import TopTracks from "./topTracks";
const Review = () => {
  const [topArtists, setTopArtist] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromAuth(window.location.hash);
      const setData = async () => {
        const artisteData = await getTopArtist(access_token);
        setTopArtist(artisteData.items);
        const songData = await getTopTracks(access_token);
        setTopSongs(songData.items);
      };
      setData();
    }
  }, []);

  console.log(topArtists);

  return (
    <div>
      <div className="flex flex-col justify-around items-center text-white p-8 gap-10">
        <p className="text-lg font-bold md:text-3xl gradient-text">
          Your top Artistes
        </p>
        <div className="w-4/5 overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-4 w-full">
            {topArtists.map((artist) => {
              return (
                <TopArtist
                  name={artist.name}
                  image={artist.images[1].url}
                  standing={topArtists.lastIndexOf(artist) + 1}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around items-center text-white p-8 gap-10">
        <p className="text-lg font-bold md:text-3xl gradient-text">
          Your top Songs
        </p>
        <div className="w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            {topSongs.map((track) => {
              return (
                <TopTracks
                  trackName={track.name}
                  image={track.album.images[1].url}
                  standing={topSongs.lastIndexOf(track) + 1}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
