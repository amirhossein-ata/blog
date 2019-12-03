import React from 'react'
import {Link} from 'react-router-dom'

const PostLink = ({ post }) => (
    <div className="postLink-wrapper">
        <div className="postLink-info">
            <div className="postLink-title">
                <Link to={`/post/${post.id}`}>
                    {post.title}
                </Link>
            </div>
            <div className="postLink-description">{post.description}</div>
            <div className="postLink-author">{post.author.name}</div>
            <div className="postLink-date">{post.date}</div>
        </div>
        <div className="postLink-image">
            {post.image && (
                <Link to={`/post/${post.id}`}>
                    <img src={post.image} />
                </Link>
            )}
        </div>
    </div>
)


export default PostLink;