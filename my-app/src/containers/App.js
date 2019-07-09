import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCustomers } from "../js/actions/fetch";
import styled from 'styled-components';
import UserList from '../components/UserList'

const Container = styled.div`

`;

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCustomers());
  }
  
  render() { 
    const { error, loading, customers } = this.props;
  console.log(this.props.loading)
  console.log(this.props.customers)
  console.log(this.props.error)

    return (
      <div>
 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.items.customers,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(App);