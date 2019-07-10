import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCustomers } from "../js/actions/fetch";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { PulseLoader } from 'react-spinners';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Fjalla One', sans-serif;
    font-weight: 900;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
`;

const Card = styled.div`
    border: 2px solid grey;
    padding: 20px;
    margin-top: 20px;
    .item{
        font-size: 28px;
        margin: 10px 0px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: 'Fjalla One', sans-serif;
    font-weight: 900;
    color: #272727;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const StyledButton = styled.div`
    background-color: #ffc600;
    border-radius: 20px;
    height: 20px;
    width: 20px;
`;
class UserInfo extends Component {

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

        //grab route params
        let routeId = this.props.match.params.id;

        // find correct customer 
        let address;
        let website;
        let companyName;

        if (customers) {
            customers.forEach(customer => {
                if (customer.id.toString() === routeId) {
                    address = `${customer.address.street}, ${customer.address.suite}, ${customer.address.city}`;
                    website = customer.website;
                    companyName = customer.company.name;
                }
            })
        }

        return (
            <Container >         
                <Card>
                    <div className={'item address'}> Address: {address}</div>
                    <div className={'item name'}> Website: {website}</div>
                    <div className={'item user-name'}>Company: {companyName}</div>
                    <StyledButton> <StyledLink to='/'>Back </StyledLink> </StyledButton>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    customers: state.items.customers,
    error: state.error
});

export default connect(mapStateToProps)(UserInfo);