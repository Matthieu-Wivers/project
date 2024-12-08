import React from 'react';
import uniqid from "uniqid";
import styled from 'styled-components';
import CardContainerToDo from './CardContainer';
import { CardContainerInProgress, CardContainerDone } from './CardContainer';

const StyledBodyCardContainer = styled.div `
    @media screen and (min-width: 1251px) {
            display: flex;
            gap: 20px;
            justify-content: center;
            height: 100%;
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
            <CardContainerToDo></CardContainerToDo>
            <CardContainerInProgress></CardContainerInProgress>
            <CardContainerDone></CardContainerDone>
        </StyledBodyCardContainer>
    );
};

export default BodyCardContainer;