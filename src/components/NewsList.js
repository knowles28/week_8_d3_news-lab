import React from 'react';
import NewsListItem from './NewsListItem';
import './NewsList.css'

const NewsList = ({stories}) => {

    const storyItems = stories.map((story, index) => {
        return <NewsListItem key={index} story={story} />
    })

    return (
        <>
            <ul>
                {storyItems}
            </ul>
        </>
    )

}

export default NewsList