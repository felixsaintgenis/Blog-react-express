import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Post from './Post';



class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    posts: []
  };
}
  componentDidMount() {
    const url = "http://localhost:8080/"
    fetch(url).then(res => res.json()).then(data => {
          this.setState({posts: data });
        });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Blog de Félix</h1>
        </header>
        <Form />
        
        <div className="postArea">
          {this.state.posts.map((post) => {
            return(<Post title={post.Title} author={post.Author} content={post.Content}/>)
          })}
        </div>
      </div>
    );
  }
}

export default App;
