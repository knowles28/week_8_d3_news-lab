import React from "react";

const NewsListItem = ({story}) => {
    
    return (
    <>
    <a href={story.url}>
        <li> {story.title} </li>
    </a>
    </>
    )
}

export default NewsListItem;