import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uniqid from "uniqid";
import { useState } from 'react';

const StyledCreateCard = styled.div`
    @media screen and (min-width: 1251px) {
        width: 900px; 
        height: 31.25rem;
        background: #818181;
        border: 2px black solid;
        border-radius: 15px;
        padding: 10px 40px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow: scroll;
        flex-direction: column;
        position: fixed;
        top: auto;
        left: 15%;
        z-index: 1;

        &>.addCard {
            display: flex;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 20px;
            background: #26547c;
            border-radius: 5px;
        }

        & .firstRowTitle {
            display: flex;
            justify-content: space-between;
            gap: 20px;

            &>button {
                height: 20px;
                position: sticky;
                color: white; 
                top: 1px;
                right: 1px;
                background: #EF476F;
                border: solid 1px #c72c50;
            }

            &>.title {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
        
                &>label {
                    margin: 0px;
                    font-weight: bold;
                    font-size: 32px;
                }
        
                &>textarea {
                    width: 18.75rem;
                    height: 2.2rem;
                    font-size: 28px;
                    background: #cccccc;
                }
            }

            &>.label {
                display: flex;
                width: 100%;

                &>.prio {

                    &>label {
                        margin: 0px;
                        font-weight: bold;
                        font-size: 32px;
                        width: 30%;

                    }

                    &>select {
                        width: 70%;
                        min-width: 40px;
                        height: 40px;
                        font-size: 18px;
                        background: #cccccc;
                        cursor: pointer;
                    }
                }

                &>.prio {

                    &>label {
                        margin: 0px;
                        font-weight: bold;
                        font-size: 32px;
                        width: 30%;

                    }

                    &>select {
                        width: 70%;
                        min-width: 40px;
                        height: 40px;
                        font-size: 18px;
                        background: #cccccc;
                        cursor: pointer;

                        &>#choose {
                            color: gray;
                        }
                        
                        &>#veryImportant {
                            color: white;
                            background: #EF476F;
                        }
                        
                        &>#important {
                            color: white;
                            background: #FFD166;
                        }
                        
                        &>#notImportant {
                            color: white;
                            background:#26547c;
                        }
                    }
                }
                
                &>.state {

                    &>label {
                        margin: 0px;
                        font-weight: bold;
                        font-size: 32px;
                        width: 30%;

                    }

                    &>select {
                        width: 70%;
                        min-width: 40px;
                        height: 40px;
                        font-size: 18px;
                        background: #cccccc;
                        cursor: pointer;

                        &>#stateChoose {
                            color: gray;
                        }
                        
                        &>#stateToDo {
                            color: white;
                            background: #EF476F;
                        }
                        
                        &>#stateInProgress {
                            color: white;
                            background: #FFD166;
                        }
                        
                        &>#stateDone {
                            color: white;
                            background:#26547c;
                        }
                    }
                }
            }
        }

        & .description {
            display: flex;
            flex-direction: column;

            &>label {
                margin: 0px;
                font-weight: bold;
                font-size: 32px;
            }

            &>textarea {
                width: 890px;
                height: 150px;
                font-size: 28px;
                background: #cccccc;
                
            }
        }
        
        & .task {

            &>.firstRowTask {

                &>button {
                    height: 40px;
                    width: 90px;
                    background: #26547c;
                    border: solid 1px #102d47;
                    color: white;
                    font-weight: bold;
                    border-radius: 5px;
                    font-size: 15px;
                    cursor: pointer;
                }
            }

            &>#newTaskBar {
                
                &>textarea {
                    width: 100%;
                    height: 40px;
                    font-size: 28px;
                    background: #cccccc;
                }

                &>div {
                    display: flex;
                    margin: 0px 5px;
                    gap: 5px;

                    
                    &>button {
                        color: white;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    
                    &>.createTask {
                        background: #FFD166;
                    }

                    &>.cancel {
                        background: #EF476F;
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
                                border-radius: 5px;
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
        background: #818181;
        border: 2px black solid;
        border-radius: 15px;
        padding: 10px 40px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow: scroll;
        flex-direction: column;
        position: absolute;
        top: auto;
        left: 5%;
        z-index: 1;

        &>.addCard {
            display: flex;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 20px;
            background: #26547c;
            border-radius: 5px;
        }

        & .firstRowTitle {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &>button {
                height: 20px;
                width: 25px;
                position: absolute;
                color: white; 
                top: 10px;
                right: 10px;
                background: #EF476F;
                border: solid 1px #c72c50;
            }

            &>.title {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
                order: 2;
        
                &>label {
                    margin: 0px;
                    font-weight: bold;
                    font-size: 32px;
                }
        
                &>textarea {
                    width: 100%;
                    height: 2.2rem;
                    font-size: 28px;
                    background: #cccccc;
                }
            }

            &>.label {
                order: 1;
                display: flex;
                gap: 10px;

                &>.prio {

                    &>label {
                        margin: 0px;
                        font-weight: bold;
                        font-size: 20px;
                        width: 100%;

                    }

                    &>select {
                        width: 100%;
                        min-width: 40px;
                        height: 40px;
                        font-size: 18px;
                        background: #cccccc;
                        cursor: pointer;

                        &>#choose {
                            color: gray;
                        }
                        
                        &>#veryImportant {
                            color: white;
                            background: #EF476F;
                        }
                        
                        &>#important {
                            color: white;
                            background: #FFD166;
                        }
                        
                        &>#notImportant {
                            color: white;
                            background:#26547c;
                        }
                    }
                }
                
                &>.state {

                    &>label {
                        margin: 0px;
                        font-weight: bold;
                        font-size: 20px;
                        width: 30%;

                    }

                    &>select {
                        width: 100%;
                        min-width: 40px;
                        height: 40px;
                        font-size: 18px;
                        background: #cccccc;
                        cursor: pointer;

                        &>#stateChoose {
                            color: gray;
                        }
                        
                        &>#stateToDo {
                            color: white;
                            background: #EF476F;
                        }
                        
                        &>#stateInProgress {
                            color: white;
                            background: #FFD166;
                        }
                        
                        &>#stateDone {
                            color: white;
                            background:#26547c;
                        }
                    }
                }
            }
        }

        & .description {
            display: flex;
            flex-direction: column;

            &>label {
                margin: 0px;
                font-weight: bold;
                font-size: 32px;
            }

            &>textarea {
                width: 100%;
                height: 150px;
                font-size: 28px;
                background: #cccccc;
                
            }
        }
        
        & .task {

            &>.firstRowTask {

                &>button {
                    height: 40px;
                    width: 90px;
                    background: #26547c;
                    border: solid 1px #102d47;
                    color: white;
                    font-weight: bold;
                    border-radius: 5px;
                    font-size: 15px;
                    cursor: pointer;
                }
            }

            &>#newTaskBar {
                
                &>textarea {
                    width: 100%;
                    height: 40px;
                    font-size: 28px;
                    background: #cccccc;
                }

                &>div {
                    display: flex;
                    margin: 0px 5px;
                    gap: 5px;

                    
                    &>button {
                        color: white;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    
                    &>.createTask {
                        background: #FFD166;
                    }

                    &>.cancel {
                        background: #EF476F;
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

export default function CreateCard () {
    // Import HTML elements
    const list = document.querySelector('ol');
    const newTask = document.querySelector('#newTask');
    const title = document.querySelector('#title');
    const desc = document.querySelector('#desc');
        const cardsList = document.querySelector('.listCardsToDo');
        const cardsListInProgress = document.querySelector('.listCardsInProgress');
        const cardsListDone = document.querySelector('.listCardsDone');
    const priorityValue = document.querySelector('#choosePriority');
    const stateValue = document.querySelector('#chooseState');
    const checkbox = document.querySelector('#checkbox');

    let count = 0;

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
    

    // Add a new task from the value of #newTaskBar text area
    async function createTask(){       
        if(newTask.value.length>1){   // Check if something is write in the task before creating it
            list.innerHTML = list.innerHTML + `<li class="tasksLI"> 
                                                    <div>
                                                        <input type="checkbox" id="checkbox"/>
                                                        <p>${newTask.value}</p>
                                                        <button>Edit</button>
                                                        <button onClick={event.currentTarget.parentNode.parentNode.classList='deleting';if(window.confirm('Delete?')){document.querySelector('.deleting').remove()}else{document.querySelector('.deleting').styleList=''}}>Delete</button>
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
        list.innerHTML = '';
        priorityValue.value = 'choose';
        stateValue.value = 'stateChoose';
        document.querySelector('.editing').classList = 'card';
    }

    // Create a card
    async function addCard(){
        if (title.value.length && desc.value.length>1 && stateValue.value!=='stateChoose') {    // If something is written in the title and the description, execute the function
            setIsActive(false);

            if (stateValue.value=='toDo') {
                cardsList.innerHTML = cardsList.innerHTML + `<div class="card">
                                                                <div id="priority"></div>
                                                                <h2 class="title"></h2>
                                                                <h3 class="desc"></h3>
                                                                <p> ${count} / ${list.childElementCount}</p>
                                                                <div>
                                                                    <button onClick={document.querySelector('#createCard').style.display="flex";document.querySelector('#title').value=event.currentTarget.parentNode.parentNode.querySelector('.title').innerHTML;document.querySelector('#desc').value=event.currentTarget.parentNode.parentNode.querySelector('.desc').innerHTML;event.currentTarget.parentNode.parentNode.classList='editing';document.querySelector('#listTasks').innerHTML=event.target.parentNode.parentNode.querySelector('.listCard').innerHTML;document.querySelector('#choosePriority').value=event.currentTarget.parentNode.parentNode.querySelector('#priority').classList;document.querySelector('#chooseState').value=event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('h2').classList} class="editCard">Edit card</button>
                                                                    <button onClick={event.currentTarget.parentNode.parentNode.classList.add('deleting');if(window.confirm('Delete?')){document.querySelector('.deleting').remove()}else{document.querySelector('.deleting').classList='card'}} class="deleteCard">Delete card</button>
                                                                </div>
                                                                <ol style="display:none;" class="listCard"></ol>
                                                            </div>`;
                await(5) // Create a delay of 5ms before the next instruction
                    cardsList.lastElementChild.querySelector('.title').innerHTML = `${title.value}`;
                    cardsList.lastElementChild.querySelector('.desc').innerHTML = `${desc.value}`;
                    cardsList.lastElementChild.querySelector('ol').innerHTML = `${list.innerHTML}`;
                    cardsList.lastElementChild.querySelector('#priority').classList = `${priorityValue.value}`;

                // Class cards by importance
                if (cardsList.lastElementChild.querySelector('#priority').classList=='veryImportant') {
                    cardsList.lastElementChild.style.order = '0';
                } else if (cardsList.lastElementChild.querySelector('#priority').classList=='important') {
                    cardsList.lastElementChild.style.order = '1';
                } else if (cardsList.lastElementChild.querySelector('#priority').classList=='notImportant') {
                    cardsList.lastElementChild.style.order = '2';
                } else if (cardsList.lastElementChild.querySelector('#priority').classList=='choose') {
                    cardsList.lastElementChild.style.order = '3';
                }
            } else if (stateValue.value=='inProgress') {
                cardsListInProgress.innerHTML = cardsListInProgress.innerHTML + `<div class="card">
                                                                                    <div id="priority"></div>
                                                                                    <h2 class="title"></h2>
                                                                                    <h3 class="desc"></h3>
                                                                                    <p> ${count} / ${list.childElementCount}</p>
                                                                                    <div>
                                                                                        <button onClick={document.querySelector('#createCard').style.display="flex";document.querySelector('#title').value=event.currentTarget.parentNode.parentNode.querySelector('.title').innerHTML;document.querySelector('#desc').value=event.currentTarget.parentNode.parentNode.querySelector('.desc').innerHTML;event.currentTarget.parentNode.parentNode.classList='editing';document.querySelector('#listTasks').innerHTML=event.target.parentNode.parentNode.querySelector('.listCard').innerHTML;document.querySelector('#choosePriority').value=event.currentTarget.parentNode.parentNode.querySelector('#priority').classList;document.querySelector('#chooseState').value=event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('h2').classList} class="editCard">Edit card</button>
                                                                                        <button onClick={event.currentTarget.parentNode.parentNode.classList.add('deleting');if(window.confirm('Delete?')){document.querySelector('.deleting').remove()}else{document.querySelector('.deleting').classList='card'}} class="deleteCard">Delete card</button>
                                                                                    </div>
                                                                                    <ol style="display:none;" class="listCard"></ol>
                                                                                </div>`;

                await(5) // Create a delay of 5ms before the next instruction
                    cardsListInProgress.lastElementChild.querySelector('.title').innerHTML = `${title.value}`;
                    cardsListInProgress.lastElementChild.querySelector('.desc').innerHTML = `${desc.value}`;
                    cardsListInProgress.lastElementChild.querySelector('ol').innerHTML = `${list.innerHTML}`;
                    cardsListInProgress.lastElementChild.querySelector('#priority').classList = `${priorityValue.value}`;

                // Class cards by importance
                if (cardsListInProgress.lastElementChild.querySelector('#priority').classList=='veryImportant') {
                    cardsListInProgress.lastElementChild.style.order = '0';
                } else if (cardsListInProgress.lastElementChild.querySelector('#priority').classList=='important') {
                    cardsListInProgress.lastElementChild.style.order = '1';
                } else if (cardsListInProgress.lastElementChild.querySelector('#priority').classList=='notImportant') {
                    cardsListInProgress.lastElementChild.style.order = '2';
                } else if (cardsListInProgress.lastElementChild.querySelector('#priority').classList=='choose') {
                    cardsListInProgress.lastElementChild.style.order = '3';
                }
            } else if (stateValue.value=='done') {
                cardsListDone.innerHTML = cardsListDone.innerHTML + `<div class="card">
                                                                        <div id="priority"></div>
                                                                        <h2 class="title"></h2>
                                                                        <h3 class="desc"></h3>
                                                                        <p> ${count} / ${list.childElementCount}</p>
                                                                        <div>
                                                                            <button onClick={document.querySelector('#createCard').style.display="flex";document.querySelector('#title').value=event.currentTarget.parentNode.parentNode.querySelector('.title').innerHTML;document.querySelector('#desc').value=event.currentTarget.parentNode.parentNode.querySelector('.desc').innerHTML;event.currentTarget.parentNode.parentNode.classList='editing';document.querySelector('#listTasks').innerHTML=event.target.parentNode.parentNode.querySelector('.listCard').innerHTML;document.querySelector('#choosePriority').value=event.currentTarget.parentNode.parentNode.querySelector('#priority').classList;document.querySelector('#chooseState').value=event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('h2').classList} class="editCard">Edit card</button>
                                                                            <button onClick={event.currentTarget.parentNode.parentNode.classList.add('deleting');if(window.confirm('Delete?')){document.querySelector('.deleting').remove()}else{document.querySelector('.deleting').classList='card'}} class="deleteCard">Delete card</button>
                                                                        </div>
                                                                        <ol style="display:none;" class="listCard"></ol>
                                                                    </div>`;

                await(5) // Create a delay of 5ms before the next instruction
                    cardsListDone.lastElementChild.querySelector('.title').innerHTML = `${title.value}`;
                    cardsListDone.lastElementChild.querySelector('.desc').innerHTML = `${desc.value}`;
                    cardsListDone.lastElementChild.querySelector('ol').innerHTML = `${list.innerHTML}`;
                    cardsListDone.lastElementChild.querySelector('#priority').classList = `${priorityValue.value}`;

                // Class cards by importance
                if (cardsListDone.lastElementChild.querySelector('#priority').classList=='veryImportant') {
                    cardsListDone.lastElementChild.style.order = '0';
                } else if (cardsListDone.lastElementChild.querySelector('#priority').classList=='important') {
                    cardsListDone.lastElementChild.style.order = '1';
                } else if (cardsListDone.lastElementChild.querySelector('#priority').classList=='notImportant') {
                    cardsListDone.lastElementChild.style.order = '2';
                } else if (cardsListDone.lastElementChild.querySelector('#priority').classList=='choose') {
                    cardsListDone.lastElementChild.style.order = '3';
                }
            }
    
            await(10) // Create a delay of 10ms before the next instruction
                document.querySelector('#createCard').style.display = "none";
                title.value = '';
                desc.value = '';
                list.innerHTML = '';
                priorityValue.value = 'choose';
                stateValue.value = 'stateChoose';
                document.querySelector('.editing').remove();

        } else {    // If nothing is writtne in title or description, alert users
            if (title.value.length<1 && desc.value.length>1) {
                alert('You need to set a title before creating the card')
            } else if (title.value.length>1 && desc.value.length<1) {
                alert('You need to set a description before creating the card')
            } else if (stateValue.value=='stateChoose') {
                alert('You need to set a state before creating the card')
            } else {
                alert('You need to set a title and a description before creating the card')
            }
        }
    }


    return (
        <StyledCreateCard id="createCard"> 
            <div className="firstRowTitle">
                <div className="title">
                    <label htmlFor="title">Title</label>
                    <textarea type="text" name="title" id="title"></textarea>
                </div>
                <div className="label">
                    <div className="prio">
                        <label htmlFor="priority">Priority : </label>
                        <select name="priority" id="choosePriority" defaultValue="choose">
                            <option value="choose" id="choose">No priority</option>
                            <option value="veryImportant" id="veryImportant">Very important</option>
                            <option value="important" id="important">Important</option>
                            <option value="notImportant" id="notImportant">Not important</option>
                        </select>
                    </div>
                    <div className="state">
                        <label htmlFor="state">State : </label>
                        <select name="state" id="chooseState" defaultValue="stateChoose">
                            <option value="stateChoose" id="stateChoose">Choose a state</option>
                            <option value="toDo" id="stateToDo">To Do</option>
                            <option value="inProgress" id="stateInProgress">In progress</option>
                            <option value="done" id="stateDone">Done</option>
                        </select>
                    </div>
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
                    <textarea name="newTask" id="newTask" defaultValue=""></textarea>
                    <div>
                        <button onClick={createTask} className="createTask">Create task</button>
                        <button onClick={handleClick} className="cancel">Cancel</button>
                    </div>
                </div> 
                <div className="taskList">
		            <ol id="listTasks"></ol>
                </div>
            </div>
            <button onClick={addCard} className="addCard">Add card</button>
        </StyledCreateCard>
    );
};