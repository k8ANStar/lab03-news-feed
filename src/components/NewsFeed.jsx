import React, { useState } from "react";
import sampleNews from "../sample_news_stories.json";
import Story from "./Story"; 

const NewsFeed = () => {
	const [stories, setStories] = useState(sampleNews.results); 
	
	const removeStory = (index) => {
		const updatedStories = stories.filter((_, i) => i !== index); 
		setStories(updatedStories); 
	};

	return (
		<div className="news-feed">
			{stories.map((story, index) => (
				<Story key={index} story={story} onRemove={() => removeStory(index)} />
			))}
		</div>
	);
};

export default NewsFeed;
