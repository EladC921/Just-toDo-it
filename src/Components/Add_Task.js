import React from "react";
import "../css/add_task.css";
import { useState } from "react";
import List_Item from "./List_Item";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

const Add_Task = () => {
  const [data, setData] = useState({ id: 0, txt: "" });
  const [tasks, addTasks] = useState([{}]);
  const [textS, resetText] = useState();
  const [lastDragged, setLastDragged] = useState();

  const handleUserInput = (e) => {
    setData({
      id: tasks.length,
      txt: e.target.value,
    });
    resetText(e.target.value);
  };

  const handleClick = () => {
    if (data.txt == "") alert("You have to write something!");
    else {
      addTasks((arr) => [...arr, data]);
      setData({ id: tasks.length, txt: "" });
      resetText("");
    }
    console.log(data);
  };

  const handleClear = () => {
    addTasks([]);
  };

  const handleDeleteTask = (e) => {
    e.preventDefault();

    const dropId = e.dataTransfer.getData("dropId");
    console.log("-----------");
    console.log(dropId);
    addTasks(
      //delete dragged task
      tasks.filter((task) => {
        if (task.id != dropId) return task;
      })
    );
    console.log(tasks);
  };

  // const handleDrag = (e) => {
  //   const dropid = e.target.id;
  //   console.log("~~~~~~~~~~          ", dropid);
  //   e.dataTransfer.setData("dropId", dropid);
  // };

  const handleLastDragged = () => {
    console.log("LETS GO");
  };

  return (
    <div className="container">
      <div id="search">
        <input onChange={handleUserInput} type="text" value={textS}></input>
        <button id="but-add-task" onClick={handleClick}>
          Add Task
        </button>
        <button id="but-clear-tasks" onClick={handleClear}>
          Clear Tasks
        </button>
      </div>
      <List_Container className="list-container">
        {/* Task Rendering */}
        {tasks.map(
          (task, index) =>
            //handling situation of an empty array
            task.id != null && (
              <List_Item
                index={index}
                id={task.id}
                text={task.txt}
                // draggable
                // onDragStart={handleDrag}
              />
            )
        )}
      </List_Container>
      <div id="delete-task">
        <button className="but-delete" onDragOver={handleDeleteTask}>
          <FaTrashAlt style={{ backgroundColor: "transparent" }} /> Delete Task
        </button>
      </div>
    </div>
  );
};

const List_Container = styled.div``;

export default Add_Task;
