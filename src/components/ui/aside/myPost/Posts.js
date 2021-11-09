import React from 'react';
import { useSelector } from 'react-redux';
import { MyPost } from './MyPost';

export const Posts = () => {

    const { posts } = useSelector(state => state.post)

    return (
        <div className="aside__aside-myPosts">
            {
                posts.map(( post ) => (
                    <MyPost 
                        key={ post.id }
                        { ...post }
                    />
                ))
            }
        </div>
    )
}
