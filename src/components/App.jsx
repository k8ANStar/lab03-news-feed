import React from "react";
import NewsFeed from "./NewsFeed";
import news_feed from "../sample_news_stories.json";

function App() {
	const stories = news_feed.results;

	return (
		<div>
			<h1 className="h1-tag">Random News Feed</h1>
			<NewsFeed stories={stories} />
		</div>
	);
}

export default App;
