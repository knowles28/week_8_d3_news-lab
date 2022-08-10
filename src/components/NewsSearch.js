import React from "react";

const NewsSearch = ({stories}) => {
    
    const [query, setQuery] = useState('');

    const handleQuery = (userQuery) => {
        setQuery(userQuery)        
        const selectedStories = stories.map((story) => {
            
        })

    }

    return (
        <>
        <input onChange={handleQuery} value={userQuery}/>
        <NewsList stories={selectedStories}/>
        </>
    )
}

export default NewsSearch;