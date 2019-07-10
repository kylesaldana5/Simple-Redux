import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Fjalla One', sans-serif;
    color: #272727;
    text-decoration: none;
    border: 5px solid rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    background-color: #ffc600;

    .item{
        margin: 10px 0px;
        font-weight: 900;
        font-size: 20px;
        text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
    }
`;
const UserCard = ({id, name, userName , handleRouting}) => {
  
    return (
        <Container >
            <div className={'item id'}>Customer Id: {id}</div>
            <div className={'item name'}> {name}</div>
            <div className={'item user-name'}>UserName: {userName}</div>
        </Container>
    )
}

export default UserCard;
