import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from "uniqid";
import { useReducer } from 'react';
import { useState } from 'react';

const StyledEditCard = styled.div`
    width: 900px; 
    height: 31.25rem;
    background: #eeeeee;
    border: 2px black solid;
    border-radius: 15px;
    padding: 10px 40px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow: scroll;

    & .title {
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

        & .shown {
            display: flex;
        }

        & .hidden {
            display: none;
        }

    & .task {

        &>div {

            &>ol {
                display: flex;
                flex-direction: column;
                gap: 10px;

                &>li {
                    display: flex;
                    height: 20px;
                    align-items: center;
                    gap: 20px;

                    &>button {
                        border-radius: 15px;
                    }
                }
            }
        }

    }
    
`

const EditCard = () => {
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
                                                <p>${newTask.value}</p>
                                                <button>Delete</button>
                                            </li>`;
        newTask.value = '';   // Clear #newTaskBar text area

        await delay(1); // Create a delay of 1ms before next instruction
            setIsActive(!isActive);  // Set class .hidden to #newTaskBar
    }



    return (
        <StyledEditCard>
            <div className="title">
                <label htmlFor="title">Title</label>
                <textarea type="text" name="title" id=""></textarea>
            </div>
            <div className="description">
                <label htmlFor="description">Description</label>
                <textarea type="text" name="description" id="desc"></textarea>
            </div>
            <div className="task">
                <div className="firstRow">
                    <h2>Task</h2>
                    <button onClick={handleClick}>Add task</button>
                </div>
                <div id='newTaskBar' className={isActive ? 'shown' : 'hidden'}>
                    <textarea name="newTask" id="newTask"></textarea>
                    <div>
                        <button onClick={createTask}>Create task</button>
                        <button onClick={handleClick}>Delete</button>
                    </div>
                </div>
                <div>
		            <ol></ol>
                </div>
            </div>
        </StyledEditCard>
    );
};

export default EditCard;