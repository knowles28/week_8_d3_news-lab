import React, {useState, useEffect} from "react";
import NewsList from "../components/NewsList";
import NewsSearch from "../components/NewsSearch";

const MainContainer = () => {

    const [stories, setStories] = useState([]);
    // const [query, setQuery] = useState('');

    const getStories = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then( res => res.json() )
        .then((data) => {
            const top30 = data.slice(0,30)
            const stories = top30.map((storyId) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`).then(res => res.json());
            });
            // console.log(stories);
            Promise.all(stories).then((data) => {
                    setStories(data);
                    // console.log(data);
                });
            });
        }


    useEffect(() => {
        getStories();
    }, [])


    const handleQueryChange = (query) => {
        setQuery(query)
    }

// stories.filter((story, index) => index < 30)


    return (
        <>
        <h1>Hacker News n tings</h1>
        <NewsSearch stories={stories}/>
        {/* <NewsList stories={stories} /> */}
        </>
    )

}

export default MainContainer;