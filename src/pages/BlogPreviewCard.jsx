import React from 'react';
import Card from '../components/molecules/Card';
import ArticleImage from '../assets/images/illustration-article.svg';
import UserImage from '../assets/images/image-avatar.webp';

function BlogPreviewCard() {
    return (
        <>
            <Card 
            articleImage={ArticleImage}
            articleImgText="Article Image"
            badgeText="Learning"
            publishedDate="21 Dec 2023"
            title="HTML & CSS foundations"
            cardText="These languages are the backbone of every website, defining structure, content, and presentation."
            userImage={UserImage}
            userName="Greg Hooper"
            />
        </>
    );
}


export default BlogPreviewCard;