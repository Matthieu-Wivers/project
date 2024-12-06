import React from 'react';
import styled from 'styled-components';
import CreateCard from './CreateCard';
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

            &>.card, &>.editing {
                min-width: 350px;
                max-width: 350px;
                max-height: 250px;
                display: flex;
                background-color: #c7c7c7;
                display: flex;
                overflow: auto;
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
            }
            
        }
    }

    @media screen and (max-width: 1250px) {
        width: 95%;
        height: 90%;
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
                <h2>Title</h2>
            </div>
            <div className="listCards">

            </div>
        </StyledCardContainer>
    );
};

export default CardContainer;