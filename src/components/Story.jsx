import React from "react";

const Story = ({ story, onRemove }) => {
	const truncateText = (text, maxLength) => {
		if (!text) return "";
		return text.length > maxLength
			? text.substring(0, maxLength) + "..."
			: text;
	};

	console.log("Rendering story:", story);

	return (
		<div className="story">
			<img
				src={
					story.image_url || "https://placehold.co/100x100.png?text=News+Story"
				}
				alt={story.title}
			/>
			<div className="story-content">
				<a
					href={story.link}
					target="_blank"
					rel="noopener noreferrer"
					className="story-title"
				>
					{story.title}
				</a>
				<p className="story-author">
					{story.creator ? story.creator.join(", ") : "Unknown Author"}
				</p>
				<p className="story-description">
					{truncateText(story.description, 100)}
				</p>
			</div>
			<button className="remove-story" onClick={onRemove}>
				X
			</button>
		</div>
	);
};

export default Story;
