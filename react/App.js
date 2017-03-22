import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import TwitterFeed from './containers/TwitterFeed';
import Layout from './components/Layout';
import MyPage from './containers/MyPage';
import data from './constants/data'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(

      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={TwitterFeed} />
          <Route path="mypage" component={MyPage} />
        </Route>
      </Router>
    )
  }
}

export default App;
