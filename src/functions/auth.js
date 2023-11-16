const SpotifyAuth = () => {
  var client_id = "a7213c8895654d37969a700b92e139f4";
  var redirect_uri =
    process.env.REACT_APP_ENVIRONMENT === "development"
      ? "http://localhost:3000/callback"
      : process.env.REACT_APP_LIVE_CALLBACK;

  var scope = "user-read-private user-read-email user-top-read";

  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

  return url;
};
export const getReturnedParamsFromAuth = (hash) => {
  const stringAfterHash = hash.substring(1);
  const paramsUrl = stringAfterHash.split("&");
  const paramsSplitUp = paramsUrl.reduce((accumulator, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    console.log(accumulator);
    return accumulator;
  }, {});
  return paramsSplitUp;
};

export const getUser = async (token) => {
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json()
  console.log(data)
  return data;
};

export const getTopArtist = async (token) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export const getTopTracks = async (token) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};

export default SpotifyAuth;
