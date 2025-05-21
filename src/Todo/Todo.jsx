import { useEffect, useState } from "react";
import "./Todo.css"
function Todo() {

    const DETELE_BTN_SVG = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>;

    const FINISH_BTN_SVG = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                           </svg>;



    const UP_BTN_SVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                       <path fill-rule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 2 2.75ZM2 6.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 2 9.75ZM9.22 9.53a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v5.69a.75.75 0 0 1-1.5 0V8.56l-.97.97a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd" />
                       </svg>;



    const DOWN_BTN_SVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                         <path fill-rule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 2 2.75ZM2 6.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 2 9.75ZM14.78 11.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l.97.97V6.75a.75.75 0 0 1 1.5 0v5.69l.97-.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                         </svg>;


    const ADD_BTN_SVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                         <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
                         </svg>;


    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState(["t1", "t2", "t3"]);
    const [numTaskFinished, setNumTaskFinshed] = useState(0);
    const [taskLeft, setTaskLeft] = useState(taskList.length);


    function handleInput(e) {
        setTask(e.target.value);
    }

    function addTask() {
        if (task.trim() !== ""){
            setTaskList(current_state => [...current_state, task]);
            setTask("");
            setTaskLeft(prev => prev + 1);
        }
    }

    function moveTaskUp(indexToRemove) {

        if (indexToRemove > 0) {
            const newArray = [...taskList];
            [newArray[indexToRemove], newArray[indexToRemove - 1]] = [newArray[indexToRemove - 1],newArray[indexToRemove]];
            setTaskList(newArray);
        }

    }

    function moveTaskDown(indexToRemove) {
        if (indexToRemove < taskList.length - 1) {
            const newArray = [...taskList];
            [newArray[indexToRemove], newArray[indexToRemove + 1]] = [newArray[indexToRemove + 1],newArray[indexToRemove]];
            setTaskList(newArray);
        }
    }

    function deleteTask(targetIndex) {
        setTaskList(current_state => current_state.filter((_,index) => index !== targetIndex));
        setTaskLeft(previous => previous - 1);
    }

    function finishTask(targetIndex) {
        setTaskList(current_state => current_state.filter((_,index) => index !== targetIndex));
        setNumTaskFinshed(previous => previous + 1);
    }

    useEffect(() => {
        if ((numTaskFinished === taskLeft) && (numTaskFinished !== 0)) {
            alert("CONGRAT! You finished all of your tasks.");
            setNumTaskFinshed(0);
            setTaskLeft(0);
        }
    },[numTaskFinished])

    return (<>
        <div className="todo">
            
            <h1 className="header">TO-DO LIST</h1>
            <div className="input-field">
                <input
                type="text"
                    placeholder="enter a task..."
                    value={task}
                    onChange={(e) => handleInput(e)}
                ></input>
                <span className="utilitites">
                    <button className="enter-button" onClick={() => addTask()}>{ADD_BTN_SVG}</button>
                    <p className="progress-count">{numTaskFinished} / {taskLeft}</p>
                </span>
            </div>
            <div className="list">
                <ol className="ordered-list">
                    {taskList.map((task, index) => 
                    <li key={index} className="list-element">
                        <span className="move-button">
                            <button className="up-button" onClick={() => moveTaskUp(index)}>{UP_BTN_SVG}</button>
                            <button className="down-button" onClick={() => moveTaskDown(index)}>{DOWN_BTN_SVG}</button>
                        </span>
                        <span className="task">{task}</span>
                        <span className="edit-button">
                            <button className="finish-button" onClick={() => finishTask(index)}>{FINISH_BTN_SVG}</button>
                            <button className="delete-button" onClick={() => deleteTask(index)}>{DETELE_BTN_SVG}</button>
                        </span>
                    </li>
                    )}
                </ol>
            </div>
        </div>
    </>);
}

export default Todo
