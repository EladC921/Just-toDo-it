import React from "react";
import "../css/add_task.css";
import { useState } from "react";
import List_Item from "./List_Item";
import { FaTrashAlt } from "react-icons/fa";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Add_Task = () => {
  const [data, setData] = useState({ id: 0, txt: "" });
  const [tasks, addTasks] = useState([]);
  const [textS, resetText] = useState();

  const [checkedTasks, updateCheckedTasks] = useState([]); //in order to know which tasks are checked


  // text box handler using useState in order to get the users data at all times and to reset the textbox after insert
  const handleUserInput = (e) => {
    setData({
      id: tasks.length,
      txt: e.target.value,
    });
    console.log(data.txt);

    resetText(e.target.value);
  };

  // Insert task handler
  const handleClick = () => {
    if (data.txt === "") alert("You have to write something!");
    else {
      addTasks((arr) => [...arr, data]);
      setData({ id: tasks.length, txt: "" });
      resetText("");
    }
    console.log(data);
  };

  //Reset array of tasks
  const handleClear = () => {
    addTasks([]);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    let items = Array.from(tasks);
    let [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    addTasks(items);
  }

  const handleDeleteTask = (e) => {
    console.log(checkedTasks);
    let data = tasks.filter(task => {
      console.log(checkedTasks.includes(task.id));
      return !checkedTasks.includes(task.id)
    });
    addTasks(data);
    console.log(data);
    updateCheckedTasks([]);
  }



  return (
    <div className="container">
      {/* Add and clear tasks container */}
      <div id="search">
        <textarea onChange={handleUserInput} type="text" value={textS}></textarea>
        <button id="but-add-task" onClick={handleClick}>
          Add Task
        </button>
        <button id="but-clear-tasks" onClick={handleClear}>
          Clear Tasks
        </button>
      </div>

      {/* Tasks container with DND */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) =>
            <div className="list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {/* Task Rendering */}
              {tasks.map(
                (task, index) => {
                  //handling situation of an empty array
                  return (
                    <Draggable key={task.id.toString()} index={index} draggableId={task.id.toString()} >
                      {(provided) =>
                        <div ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}>
                          {/* List Item Component rendering for each toDo */}
                          <List_Item text={task.txt}
                            id={task.id}
                            index={index}
                            tasks={tasks}
                            editTasks={addTasks}
                            updateChecked={updateCheckedTasks}
                            checkedTasks={checkedTasks}
                          />
                        </div>
                      }
                    </Draggable>
                  )
                })}
              {provided.placeholder}
            </div>
          }
        </Droppable>
      </DragDropContext>

      {/* Delete tasks container */}
      <div id="delete-task">
        <button className="but-delete" onClick={handleDeleteTask}>
          <FaTrashAlt style={{ backgroundColor: "transparent" }} /> Delete Tasks
        </button>

      </div>



    </div >

  );
};


export default Add_Task;
