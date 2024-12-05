import React from 'react';
import CreateCard from './CreateCard';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from "uniqid";

const StyledCard = styled.div`
    min-width: 350px;
    max-width: 350px;
    height: 250px;
    display: flex;
    background-color: #c7c7c7;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    margin: auto;
    border-radius: 15px;


    &>h2 {
        font-size: 20px;
        margin: 0px;
    }

    &>h3 {
        font-size: 15px;
        margin: 0px;
    }

    &>p {
        background-color: green;
        border-radius: 5px;
        margin: 0px;
    }
`

const Card = (
    title,
    description,
    tasks
) => {
    

    return (
        <StyledCard>
            <h2>Title</h2>
            <h3>Descritpion Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi sint laboriosam adipisci molestiae minima, in atque corporis quidem quam ea accusantium fuga non sed autem ducimus excepturi dolore nam aspernatur laborum, ad qui libero? Itaque aspernatur aliquam aliquid, eum illum ut, amet doloribus consequuntur earum dolor, fuga perspiciatis voluptatum.</h3>
            <p>0/8</p>
            <div>
                <button>Edit card</button>
                <button>Delete card</button>
            </div>
        </StyledCard>
    );
};

export default Card;