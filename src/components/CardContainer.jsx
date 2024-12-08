import React from 'react';
import styled from 'styled-components';
import CreateCard from './CreateCard';
import PropTypes from 'prop-types';

const StyledCardContainer = styled.div`
    @media screen and (min-width: 1251px) {
        width: 370px;
        height: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        min-width: 400px;
        background-color: gray;
        border: solid 1px black;
        box-shadow: 5px 5px 10px black;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
        &>.listName {
            height: 70px;
            
            &>h2 {
                margin: 20px;
                font-weight: bold;
                color: white;
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
                
                &>#priority {
                    position: relative;
                    border-radius: 15px 15px 0px 0px;
                    top: -10px;
                    left: -10px;
                    width: 370px;
                    height: 10px;
                }

                &>h2 {
                    font-size: 20px;
                    margin: 0px;
                    font-weight: bold;
                }

                &>h3 {
                    font-size: 15px;
                    margin: 0px;
                    font-weight: normal;
                }

                &>p {
                    background-color: green;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    color: white;
                    font-weight: bold;
                    width: 50px;
                    text-align: center;
                }

                &>div {
                    display: flex;
                    gap: 10px;
                    justify-content: space-around;

                    &>button {
                        width: 45%;
                        font-size: 15px;
                        height: 25px;
                        background: #EF476F;
                        border: solid 1px #c7284d;
                        border-radius: 5px;
                        color: white;
                    }

                    &>button:first-child {
                        background: #26547c;
                        border: solid 1px #0d273d;
                    }
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
        border: solid 1px black;
        background-color: gray;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
        &>.listName {
            height: 70px;
            
            &>h2 {
                margin: 20px;
                font-weight: bold;
                color: white;
            }
        }
        
        &>.listCards {
            overflow: auto;
            display: flex;
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
                overflow: none;
                flex-direction: column;
                justify-content: space-between;
                padding: 10px;
                margin: auto;
                border-radius: 15px;

                &>#priority {
                    position: relative;
                    border-radius: 15px 15px 0px 0px;
                    top: -10px;
                    left: -10px;
                    width: 370px;
                    height: 10px;
                }

                &>h2 {
                    font-size: 20px;
                    margin: 0px;
                    font-weight: bold;
                }

                &>h3 {
                    font-size: 15px;
                    margin: 0px;
                    font-weight: normal;
                }

                &>p {
                    background-color: green;
                    margin-bottom: 10px;
                    border-radius: 5px;
                    color: white;
                    font-weight: bold;
                    width: 50px;
                    text-align: center;
                }

                &>div {
                    display: flex;
                    gap: 10px;
                    justify-content: space-around;

                    &>button {
                        width: 45%;
                        font-size: 15px;
                        height: 25px;
                        background: #EF476F;
                        border: solid 1px #c7284d;
                        border-radius: 5px;
                    }
                }
            }
        }
    }

    & .veryImportant {
        background-color: #EF476F;  
    }
    
    & .important {
        background-color: #FFD166;
    }
    
    & .notImportant {
        background-color: #26547c;
    }
`


export default function CardContainerToDo () {
    return (
        <StyledCardContainer>
            <div className="listName">
                <h2 className="toDo">To do</h2>
            </div>
            <div className="listCardsToDo listCards">

            </div>
        </StyledCardContainer>
    );
};

export function CardContainerInProgress () {
    return (
        <StyledCardContainer>
            <div className="listName">
                <h2 className="inProgress">In Progress</h2>
            </div>
            <div className="listCardsInProgress listCards">

            </div>
        </StyledCardContainer>
    );
};

export function CardContainerDone () {
    return (
        <StyledCardContainer>
            <div className="listName">
                <h2 className="done">Done</h2>
            </div>
            <div className="listCardsDone listCards">

            </div>
        </StyledCardContainer>
    );
};