import SpotifyAuth from "../functions/auth";
import spotifylogo from "../assets/spotify.svg";
const BUG = () => {
	const authURl = SpotifyAuth();
	return (
		<main className="text-white flex flex-col gap-3 justify-center items-center p-4">
			<p className="gradient-text font-semibold text-2xl">Before you go!</p>
			<div className="w-full bg-pink-400">
				<iframe
					title="Register for RunDwn"
					src="https://docs.google.com/forms/d/e/1FAIpQLScbjyIVU6w36IZNpAuAZpDJpN5njHhknw5nTe8XCVplTmDbPw/viewform?embedded=true"
					width="640"
					height="600"
					className="w-full"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				>
					Loading…
				</iframe>
			</div>
			<p>
				buttttt, if you have been given permission to use the site, click on the
				bouncing <code>button</code> below
			</p>
			<a
				href={authURl}
				className="mt-3"
			>
				<button className="animate-bounce h-6 w-max p-6 text-center flex justify-center text-sm md:text-base items-center font-semibold gap-4">
					<img
						src={spotifylogo}
						alt=""
					/>
					This way to RunDwn
				</button>
			</a>
		</main>
	);
};
export default BUG;
