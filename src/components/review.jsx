import { useEffect, useState, useRef } from "react";
import {
	getReturnedParamsFromAuth,
	getUser,
	getTopArtist,
	getTopTracks,
} from "../functions/auth";
import TopArtist from "./topArtist";
import TopTracks from "./topTracks";
import Footer from "./footer";
import Navbar from "./navbar";
import Summary from "./summary";
const Review = () => {
	const selcted_timeRange = useRef(); // ref for the drop down
	const [user, setUser] = useState({}); // state to set user details from the spotify api
	const [topArtists, setTopArtist] = useState([]); // state to set top artistes from the spotify api
	const [topSongs, setTopSongs] = useState([]); // state to set top songs from the spotify api
	const [isLoading, setIsLoading] = useState(); // state to determine loading status
	const [tr_text, setTrText] = useState(""); // state to show the time range text on the UI
	useEffect(() => {
		setIsLoading(true);
		if (window.location.hash) {
			const { access_token } = getReturnedParamsFromAuth(window.location.hash);
			const setData = async () => {
				const timeRange = selcted_timeRange.current.value;
				const artisteData = await getTopArtist(access_token, timeRange);
				setTopArtist(artisteData.items);
				const songData = await getTopTracks(access_token, timeRange);
				setTopSongs(songData.items);
				const userData = await getUser(access_token);
				setUser(userData);

				// console.log(user.images[0].url);
				textRangeSet(timeRange);
			};
			setData();
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	}, []);

	//time range dropdown handler function
	//start
	const timeRangeChangeHandler = () => {
		const { access_token } = getReturnedParamsFromAuth(window.location.hash);
		const setData = async () => {
			const timeRange = selcted_timeRange.current.value;
			const artisteData = await getTopArtist(access_token, timeRange);
			setTopArtist(artisteData.items);
			const songData = await getTopTracks(access_token, timeRange);
			setTopSongs(songData.items);
			// console.log(user);
			textRangeSet(timeRange);
		};
		setData();

		setIsLoading(false);
	};
	//end

	//function to show the time range text on the UI
	//start
	const textRangeSet = (time_Range) => {
		if (time_Range === "short_term") {
			setTrText("last 4 weeks");
		}
		if (time_Range === "medium_term") {
			setTrText("last 6 months");
		}
		if (time_Range === "long_term") {
			setTrText("last 1 year");
		}
	};
	//end
	return (
		<div className="flex flex-col pt-16">
			<Navbar />
			{isLoading ? (
				<p>Loading</p>
			) : (
				<div className="flex flex-col p-3 md:p-8 ">
					<div className="flex flex-col justify-around items-center text-white gap-10">
						<div className="flex gap-4 self-end items-center">
							<p>Time range:</p>
							<select
								className="text-black rounded-md py-2 px-1"
								defaultValue="short_term"
								ref={selcted_timeRange}
								onChange={timeRangeChangeHandler}
							>
								<option value="short_term">last 4 weeks</option>
								<option value="medium_term">last 6 months</option>
								<option value="long_term">last 1 year</option>
							</select>
						</div>
						<Summary
							userName={user.display_name}
							tr_text={tr_text}
						/>

						<p className="text-lg font-bold md:text-3xl gradient-text">
							Artistes
						</p>
						<div className="w-full p-2 bg-black/30 border rounded-xl border-white/20 shadow-xl  md:w-4/5 md:overflow-x-auto overflow-y-hidden">
							<div className="grid md:flex md:flex-row gap-4">
								{topArtists.map((artist) => {
									return (
										<a
											key={artist.external_urls.spotify}
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
					<div className="flex flex-col justify-around items-center text-white gap-10">
						<p className="text-lg font-bold md:text-3xl gradient-text">
							and Songs
						</p>
						<div className="w-full md:w-4/5">
							<div className="grid grid-cols-1 md:grid-cols-2 p-2  bg-black/30 border rounded-xl border-white/20 shadow-xl gap-4 place-items-center max-w-full">
								{topSongs.map((track) => {
									return (
										<a
											key={track.external_urls.spotify}
											href={track.external_urls.spotify}
											target="_blank"
											rel="noreferrer"
											className="w-full md:w-4/5"
										>
											<TopTracks
												trackName={track.name}
												image={track.album.images[1].url}
												standing={topSongs.lastIndexOf(track) + 1}
												artistName={track.artists[0].name}
											/>
										</a>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default Review;
