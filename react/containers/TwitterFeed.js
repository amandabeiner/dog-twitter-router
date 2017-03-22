import React from 'react';
import data from '../constants/data';
import Tweet from '../components/Tweet';
import { Link } from 'react-router';

class TwitterFeed extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedTweetId: null
    }
    this.handleSelectedTweet = this.handleSelectedTweet.bind(this);
  }

  handleSelectedTweet(id){
    this.setState({ selectedTweetId: id })
  }

  render() {
    let className;
    let tweets = data.map(tweet => {

      if(tweet.id_str === this.state.selectedTweetId){
        className = "selected"
      } else {
        className = ""
      }

      let handleClick = () => {
        this.handleSelectedTweet(tweet.id_str)
      }

      return(
        <Tweet
        key={tweet.id_str}
        id={tweet.id_str}
        text={tweet.text}
        name={tweet.user.name}
        userPhoto={tweet.user.profile_image_url}
        handleClick={handleClick}
        className={className}
        />
      )
    })
    return(
      <div>
      <Link to="/mypage">Go to My Page</Link>
      {tweets}
      </div>
    )

  }

}

export default TwitterFeed;
