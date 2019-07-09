import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    /* border: 1px solid grey; */
`;
const UserCard = () => {
  
    return (
        <Container >
            <div>User Info</div>
            <Link to='/'>Back</Link>
        </Container>
    )
}

export default UserCard;