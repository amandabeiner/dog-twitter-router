import React from 'react';
import { Link } from 'react-router';

const MyFeed = props => {
  let tweets = props.tweets.map(item =>{
    return(
      <li key={item.tweet}>
        {item.tweet}
      </li>
    )
  })
  return(
    <div>
      <Link to="/">Back to Twitter</Link>
      <h1>My Tweets</h1>
      <ul>{tweets}</ul>
    </div>

  );
}

export default MyFeed;
