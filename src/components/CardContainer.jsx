import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import PropTypes from 'prop-types';

const StyledCardContainer = styled.div`
    @media screen and (min-width: 1251px) {
        width: 370px;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        min-width: 400px;
        background-color: gray;
        
        &>.listName {
            height: 70px;
            
            &>h2 {
                margin: 20px;
            }
        }
        
        &>.listCards {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 10px;
            background-color: #000000;
            border-radius: 0px 0px 15px 15px;
            
        }
    }

    @media screen and (max-width: 1250px) {
        width: 95%;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        min-width: 400px;
        background-color: gray;
        
        &>.listName {
            height: 70px;
            
            &>h2 {
                margin: 20px;
            }
        }
        
        &>.listCards {
            overflow: auto;
            display: flex;
            gap: 10px;
            padding: 10px;
            background-color: #000000;
            border-radius: 0px 0px 15px 15px;
            
        }
    }
`


const CardContainer = () => {
    return (
        <StyledCardContainer>
            <div className="listName">
                <h2></h2>
            </div>
            <div className="listCards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </StyledCardContainer>
    );
};

export default CardContainer;