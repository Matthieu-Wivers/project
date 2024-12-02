import React from 'react';
import uniqid from "uniqid";
import styled from 'styled-components';
import CardContainer from './CardContainer';
import Card from './Card';

const StyledBodyCardContainer = styled.div `
    @media screen and (min-width: 1251px) {
            display: flex;
            gap: 20px;
            justify-content: center;
    }

    @media screen and (max-width: 1250px) {
            display: flex;
            gap: 20px;
            flex-direction: column;
    }
`

const BodyCardContainer = () => {
    return (
        <StyledBodyCardContainer>
            <CardContainer></CardContainer>
            <CardContainer></CardContainer>
            <CardContainer></CardContainer>
        </StyledBodyCardContainer>
    );
};

export default BodyCardContainer;