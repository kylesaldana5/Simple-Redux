import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCustomerDetails } from "../js/actions/index";
import { bindActionCreators } from 'redux';
import UserList from '../components/UserList'


class App extends Component {

  componentDidMount() {
    this.props.fetchCustomerDetails();
  }
  
  render() { 
    return (
      <div>
 
      </div>
    );
  }
}

const mapStateToProps = (data = {}) => ({
  data: data.data
});


export default connect(
  mapStateToProps,
  {
    fetchCustomerDetails
  }
)(App);



