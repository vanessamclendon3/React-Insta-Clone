import React from "react";
import PropTypes from "prop-types";
import Comments from './Comments'
import './CommentSection.css';

const CommentSection = props => {
    console.log("CommentSection: ", props.comments)
    return (
        <div className='comment-section-style'> CommentSection
            {props.comments.map(comment => (
                <Comments username={comment.username}
                         text={comment.text}
                         key={comment.text}
                />
            ))}
        </div>
    )
}
export default CommentSection;