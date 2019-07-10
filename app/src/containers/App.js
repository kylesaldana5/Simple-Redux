import React, { Component } from "react";
import styled from 'styled-components';
import UserInfo from './UserInfo';
import UserList from './UserList';
import { Switch, Route,  } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={UserList} />
        <Route path='/user/:id' component={UserInfo} />
      </Switch>
    );
  }
}

export default App;