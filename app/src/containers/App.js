import React, { Component } from "react";
import UserInfo from './UserInfo';
import UserList from './UserList';
import { Switch, Route, } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
    .header{
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-family: 'Fjalla One', sans-serif;
      text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
      font-weight: 900;
      font-size: 40px;
      background-image: linear-gradient(110deg, #f93d66, #6d47d9);
      /* Fix for the inherent margin create react app gives. Probably should find  a better solution  */
      margin: -10px -10px 0px -10px ;
    }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <div className={'header'}> 
          <div>Simple React && Redux App</div>
        </div>
        <Switch>
          <Route exact path='/' component={UserList} />
          <Route path='/user/:id' component={UserInfo} />
        </Switch>
      </Container>

    );
  }
}

export default App;