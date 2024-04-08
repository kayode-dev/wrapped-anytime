import spotifyLogo from "../assets/spotifyOGG.png";
const TopArtist = ({ image, name, standing }) => {
	return (
		<>
			<div className="flex flex-col gap-4 p-5 rounded md:hover:scale-105 duration-200">
				<div className="flex items-center gap-4">
					<p className="font-bold">{standing}</p>
					<div className="flex items-center gap-4 ">
						<div className="relative h-20 w-20 md:h-60 md:w-60 shadow hover:shadow-none duration-300">
							<img
								src={image}
								alt=""
								className="h-full w-full object-fill"
							/>
							<img
								src={spotifyLogo}
								alt=""
								className="absolute h-2 w-2 md:w-5 md:h-5 top-2 right-2"
							/>
							<p className="hidden md:block absolute font-bold text-ellipsis whitespace-nowrap overflow-hidden w-32 md:w-full  bottom-2 left-2">
								{name}
							</p>
						</div>
						<p className="md:hidden  font-bold text-ellipsis whitespace-nowrap overflow-hidden w-32 md:w-full">
							{name}
						</p>
					</div>
				</div>
			</div>
			<hr className="md:hidden" />
		</>
	);
};

export default TopArtist;
