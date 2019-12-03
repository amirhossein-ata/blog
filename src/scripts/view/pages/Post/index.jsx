import React from 'react'

const Post = ({post}) => {
    return (
        <div className="post-wrapper">
            <div className="post-header">
                <img className="post-header-image" src={post.image} />
                <div className="post-header-info">
                    <div className="post-title">{post.title}</div>
                    <div className="post-author">
                        <div className="post-author-name">
                            {post.author.name}
                        </div>
                        <div className="post-author-email">
                            {post.author.email}
                        </div>
                    }</div>   
                </div>
            </div>
            <div className="post-text">{post.text}</div>
            <div className="post-details">
                <div className="post-likes">{post.likes_count}</div>
                <div className="post-comments">{post.comments_count}</div>
            </div>
        </div>
    )
}

export default Post