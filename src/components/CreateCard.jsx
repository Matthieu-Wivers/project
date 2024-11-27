import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from "uniqid";
import { useReducer } from 'react';
import { useState } from 'react';

const StyledCreateCard = styled.div`
    width: 900px; 
    height: 31.25rem;
    background: #eeeeee;
    border: 2px black solid;
    border-radius: 15px;
    padding: 10px 40px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow: scroll;
    flex-direction: column;
    margin: auto;

    & .firstRowTitle {
        display: flex;
        justify-content: space-between;

        &>button {
            height: 20px;
            position: sticky; 
            top: 1px;
            right: 1px;
        }

        &>.title {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
    
            &>label {
                margin: 0px;
                font-weight: normal;
                font-size: 32px;
            }
    
            &>textarea {
                width: 18.75rem;
                height: 2.2rem;
                font-size: 28px;
            }
        }
    }

    & .description {
        display: flex;
        flex-direction: column;

        &>label {
            margin: 0px;
            font-weight: normal;
            font-size: 32px;
        }

        &>textarea {
            width: 890px;
            height: 150px;
            font-size: 28px;
            
        }
    }
    
    & .task {

        &>.firstRowTask {

            &>button {
                cursor: pointer;
            }
        }

        &>#newTaskBar {

            &>div {

                &>button {
                    cursor: pointer;
                }
            }
        }
        
        &>.taskList {
            
            &>ol {
                display: flex;
                flex-direction: column;
                gap: 10px;
                
                &>li {
                    
                    &>div {
                        height: 20px;
                        display: flex;
                        align-items: center;
                        gap: 20px;

                        &>button {
                            border-radius: 15px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }

    & .shown {
        display: flex;
    }

    & .hidden {
        display: none;
    }
`

const CreateCard = () => {
    // Import HTML elements
    let list = document.querySelector('ol');
    let newTask = document.querySelector('#newTask');

    // Creation delay settings in ms
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // State of CSS classes
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive); // Set class .shown to #newTaskBar
        newTask.value = '';     // Clear #newTaskBar text area
    }

    
    async function createTask(){    // Add a new task from the value of #newTaskBar text area   
        list.innerHTML = list.innerHTML + `<li> 
                                                <div>
                                                    <p>${newTask.value}</p>
                                                    <button>Delete</button>
                                                </div>
                                            </li>`;
        newTask.value = '';   // Clear #newTaskBar text area

        await delay(1); // Create a delay of 1ms before next instruction
            setIsActive(!isActive);  // Set class .hidden to #newTaskBar
    }

    // Close the card edition window 
    function closeCardEdition(){
        document.querySelector('#createCard').style.display = "none";
    }



    return (
        <StyledCreateCard id="createCard">
            <div className="firstRowTitle">
                <div className="title">
                    <label htmlFor="title">Title</label>
                    <textarea type="text" name="title" id=""></textarea>
                </div>
                <button onClick={closeCardEdition}>X</button>
            </div>
            <div className="description">
                <label htmlFor="description">Description</label>
                <textarea type="text" name="description" id="desc"></textarea>
            </div>
            <div className="task">
                <div className="firstRowTask">
                    <h2>Task</h2>
                    <button onClick={handleClick}>Add task</button>
                </div>
                <div id='newTaskBar' className={isActive ? 'shown' : 'hidden'}>
                    <textarea name="newTask" id="newTask"></textarea>
                    <div>
                        <button onClick={createTask}>Create task</button>
                        <button onClick={handleClick}>Cancel</button>
                    </div>
                </div>
                <div className="taskList">
		            <ol></ol>
                </div>
            </div>
        </StyledCreateCard>
    );
};

export default CreateCard;