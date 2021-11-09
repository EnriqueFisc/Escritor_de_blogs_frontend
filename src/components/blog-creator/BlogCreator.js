import React from 'react';
import { useSelector } from 'react-redux';

import { Aside } from '../ui/aside/Aside';
import { BlogEditor } from './BlogEditor';
import { NoContent } from './NoContent';

export const BlogCreator = () => {

    const { activePost } = useSelector( state => state.post );

    return (
        <div className="blogCreatpr__blog">
            <Aside />
            {
                ( activePost ) 
                ? <BlogEditor />
                : <NoContent />
            }
        </div>
    )
}
