import { useEffect, useState } from "react";
import {
  getReturnedParamsFromAuth,
  getUser,
  getTopArtist,
  getTopTracks,
} from "../functions/auth";
import TopArtist from "./topArtist";
import TopTracks from "./topTracks";
const Review = () => {
  const [user, setUser] = useState({});
  const [topArtists, setTopArtist] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(true);
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromAuth(window.location.hash);
      const setData = async () => {
        const artisteData = await getTopArtist(access_token);
        setTopArtist(artisteData.items);
        const songData = await getTopTracks(access_token);
        setTopSongs(songData.items);
        const userData = await getUser(access_token);
        setUser(userData);
        console.log(user);
      };
      setData();
      setIsLoading(false);
    }
  }, []);

  console.log(topArtists);

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <div className="flex flex-col justify-around items-center text-white p-8 gap-10">
            {/* <img src={user.images[1].url} className="rounded-full h-10 w-10 self-end" alt="profile" /> */}
            <p className="text-lg font-bold md:text-3xl">
              Hello <span className="gradient-text">{user.display_name}</span>!,
              over the last month, here are your top 10....
            </p>
            <p className="text-lg font-bold md:text-3xl gradient-text">
              Artistes
            </p>
            <div className="w-[95%] md:w-4/5 overflow-x-auto overflow-y-hidden">
              <div className="flex flex-row gap-4 w-full">
                {topArtists.map((artist) => {
                  return (
                    <a
                      href={artist.external_urls.spotify}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TopArtist
                        name={artist.name}
                        image={artist.images[1].url}
                        standing={topArtists.lastIndexOf(artist) + 1}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around items-center text-white p-8 gap-10">
            <p className="text-lg font-bold md:text-3xl gradient-text">
              and Songs
            </p>
            <div className="w-4/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
                {topSongs.map((track) => {
                  return (
                    <a
                      href={track.external_urls.spotify}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TopTracks
                        trackName={track.name}
                        image={track.album.images[1].url}
                        standing={topSongs.lastIndexOf(track) + 1}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
