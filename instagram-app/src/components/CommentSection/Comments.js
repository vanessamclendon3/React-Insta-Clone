import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: props.username,
            text: props.text,
        };

    }

    render(){
        console.log("Comment: ", this.state)
        return (
            <div>
               <p>username: {this.state.username} {this.state.text}</p> 
            </div>
        )
    }
}

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}


export default Comment;