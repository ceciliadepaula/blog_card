import React from 'react';
import Badge from '../atoms/Badge';
import User from '../atoms/User';

function Card({ articleImage, articleImgText, badgeText, publishedDate, title, cardText, userImage, userName }) {
    return (
        <div className='card'>
            <div className="image">
                <img src={articleImage} alt={articleImgText} />
            </div>
            <Badge text={badgeText} />
            <p className="text-3">Published {publishedDate}</p>
            <h1 class="text-1 m-0 p-0">{title}</h1>
            <p class="m-0 p-0 text-2">{cardText}</p>
            <User userImage={userImage} userName={userName}/>
        </div>
    );
}

export default Card;