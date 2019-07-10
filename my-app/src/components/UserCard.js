import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid grey;
`;
const UserCard = ({id, name, userName , handleRouting}) => {
  
    return (
        <Container >
            <div className={'id'}>{id}</div>
            <div className={'name'}>{name}</div>
            <div className={'user-name'}>{userName}</div>
        </Container>
    )
}

export default UserCard;
