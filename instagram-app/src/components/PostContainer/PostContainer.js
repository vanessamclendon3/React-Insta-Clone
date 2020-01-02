import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
    // console.log(props.data.comments)
    return (
        <div className='post-style'> PostContainer
            <CommentSection comments={props.data.comments}/>
        </div>
    )
}

export default PostContainer;