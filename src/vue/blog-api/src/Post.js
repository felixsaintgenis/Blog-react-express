import React, { Component } from 'react';

class Post extends Component {
  constructor(props){
  super(props);
  this.title = props.Title;
  this.author =props.Author;
  this.content = props.Content;

}
  render() {
    return(
      <div>

        <h1>{this.props.title}</h1>

      </div>
    );
  }
}

export default Post
