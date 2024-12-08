import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CreateCard from './CreateCard';

const StyledCreateButton = styled.button `
    height: 80px;
    width: 200px;
    font-size: 25px;
    border-radius: 15px;
    background: #FFD166;
    border: solid 2px #d49b14;
    font-weight: bold;
    color: white;
    box-shadow: 5px 5px 10px black;
    cursor: pointer;
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