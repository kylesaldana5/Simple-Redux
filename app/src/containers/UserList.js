import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCustomers } from "../js/actions/fetch";
import styled from 'styled-components';
import UserCard from '../components/UserCard';
import { Link } from "react-router-dom";


const Container = styled.div`
  display: grid;
  grid-gap: 25px 50px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  padding: 0px 10px;
  padding: 20px;
  margin-top: 25px;
  background: #fff;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

class UserList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCustomers());
  }

  render() {
    const { error, loading, customers } = this.props;

    //handle any loading or errors
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <Container>
        {customers ? customers.map(customer =>
          <StyledLink to={`/user/${customer.id}`} key={customer.id} > <UserCard key={customer.id} id={customer.id} name={customer.name} userName={customer.username} /> </StyledLink>
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