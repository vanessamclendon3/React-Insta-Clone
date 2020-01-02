import React from "react";
import PropTypes, { shape } from "prop-types";
import Comments from './Comments'
import './CommentSection.css';

const CommentSection = props => {
    console.log("CommentSection: ", props.comments)
    return (
        <div className='comment-section-style'> CommentSection
            {props.comments.map(comment => (
                <Comments 
                    username={comment.username}
                    text={comment.text}
                    key={comment.id}
                />
            ))}
            <div className="comments-style">
             Add a Comment...<input type="text" value="Comment..."/>
            </div>
        </div>
    )
}


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        key: PropTypes.number.isRequired
    }))
}


export default CommentSection;