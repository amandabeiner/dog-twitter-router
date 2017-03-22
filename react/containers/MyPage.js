import React, { Component } from 'react';
import FormContainer from './FormContainer';
import MyFeed from '../components/MyFeed';

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      tweets: []
    }

    this.trackTweet = this.trackTweet.bind(this);
  }

  trackTweet(submission){
    this.setState({ tweets: this.state.tweets.concat(submission) })
  }

  render(){
    return(
      <div>
        <FormContainer
          trackTweet={this.trackTweet}
        />
        <MyFeed
          tweets={this.state.tweets}
        />
      </div>
    )
  }
}

export default MyPage;
