import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCustomers } from "../js/actions/fetch";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Container = styled.div`

`;

const StyledLink = styled(Link)`
    text-decoration: none;
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
                if (customer.id.toString() === routeId)
                    address = `${customer.address.street}`;
                    website = customer.website;
                    companyName = customer.company.name;
            })
        }

        return (
            <Container >
                <div className={'item address'}>{address}</div>
                <div className={'item name'}> {website}</div>
                <div className={'item user-name'}>{companyName}</div>
                <StyledLink to='/'>Back </StyledLink>
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