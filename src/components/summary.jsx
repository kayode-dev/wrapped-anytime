const Summary = ({ user_image, userName, tr_text }) => {
	console.log(user_image, userName);
	return (
		<div>
			<p className="text-lg font-bold md:text-3xl">
				Hello <span className="gradient-text">{userName}</span>!, over the{" "}
				{tr_text}, here are your top 10....
			</p>
		</div>
	);
};

export default Summary;
