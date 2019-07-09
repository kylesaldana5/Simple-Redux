import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCustomers } from "../js/actions/fetch";
import styled from 'styled-components';
import UserCard from '../components/UserCard';
import { Link } from "react-router-dom";


const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

class UserList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCustomers());
  }

  render() {
    const { error, loading, customers } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <Container>
          {customers ? customers.map(customer =>     
              <Link to={`/info/${customer.id}`}> <UserCard key={customer.id} id={customer.id} name={customer.name} userName={customer.username} /> </Link>
           ) : null}  
        </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  customers: state.items.customers,
  error: state.error
});

export default connect(mapStateToProps)(UserList);