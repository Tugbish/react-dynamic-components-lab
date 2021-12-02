import React, { Component } from 'react';

export default class Comment extends React.Component {
   // let commentText;
    render() {
        return (
        <div className='comment'> 
            <h1>{this.props.commentText}</h1>;
            
        </div>
        )
            }
}

