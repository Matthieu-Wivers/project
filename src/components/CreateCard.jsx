import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from "uniqid";
import { useState } from 'react';

const StyledCreateCard = styled.div`
    @media screen and (min-width: 1251px) {
        width: 900px; 
        height: 31.25rem;
        background: #eeeeee;
        border: 2px black solid;
        border-radius: 15px;
        padding: 10px 40px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow: scroll;
        flex-direction: column;
        position: absolute;
        top: auto;
        left: 15%;

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
    }

    @media screen and (max-width: 1250px) {
        max-width: 50%; 
        width: 50%; 
        min-width: 300px;
        height: 31.25rem;
        background: #eeeeee;
        border: 2px black solid;
        border-radius: 15px;
        padding: 10px 40px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow: scroll;
        flex-direction: column;
        position: absolute;
        top: auto;
        left: 5%;

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
                    width: 90%;
                    min-width: 18.75rem;
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
                width: 90%;
                min-width: 18.75rem;
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
    const list = document.querySelector('ol');
    const newTask = document.querySelector('#newTask');
    const title = document.querySelector('#title');
    const desc = document.querySelector('#desc');

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
        if(newTask.value.length>1){   // Check if something is write in the task before creating it
            list.innerHTML = list.innerHTML + `<li> 
                                                    <div>
                                                        <input type="checkbox" />
                                                        <p>${newTask.value}</p>
                                                        <button>Edit</button>
                                                        <button>Delete</button>
                                                    </div>
                                                </li>`;
            newTask.value = '';   // Clear #newTaskBar text area
    
            await delay(1); // Create a delay of 1ms before next instruction
                setIsActive(!isActive);  // Set class .hidden to #newTaskBar
        } else {    // Alert the user if nothing is wrote before creating the task 
            alert('You need to write something before creating the task');
        }
    }

    // Close the card edition window 
    function closeCardEdition(){
        document.querySelector('#createCard').style.display = "none";
        title.value = '';
        desc.value = '';
        setIsActive(false);
    }


    return (
        <StyledCreateCard id="createCard"> 
            <div className="firstRowTitle">
                <div className="title">
                    <label htmlFor="title">Title</label>
                    <textarea type="text" name="title" id="title"></textarea>
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
            <button>Add card</button>
        </StyledCreateCard>
    );
};

export default CreateCard;