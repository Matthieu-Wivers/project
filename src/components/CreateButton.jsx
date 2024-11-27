import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CreateCard from './CreateCard';

const StyledCreateButton = styled.button `

`

const CreateButton = () => {
    // Hide the card edition window on load of the page
    window.onload = () => {
        document.querySelector('#createCard').style.display = "none";
    }
    
    // Show the card edition window 
    function showCardCreator(){
        document.querySelector('#createCard').style.display = "flex";
    }

    return (
        <StyledCreateButton onClick={showCardCreator}>
            Create a card
        </StyledCreateButton>
    );
};

export default CreateButton;