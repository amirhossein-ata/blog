import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PostLink from '../../components/PostLink';

//actions
import { getAllPosts } from '../../../core/actions/posts'

const Home = ({dispatch, posts, postsLoadStatus}) => {
    useEffect(() => {
        dispatch(getAllPosts())
    }, [])
    return (
        <div className="feed">            
            <div className="posts-list">
                {postsLoadStatus === 'loaded' && posts.map((post, index) => (
                    <PostLink 
                        key={index} 
                        post={{
                            id: index,
                            title: post.title,
                            description: post.body,
                            author:{ 
                                name: 'James'
                            },
                            date: "yesterday"
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    postsLoadStatus: state.posts.postsLoadStatus
})
export default connect(mapStateToProps)(Home)