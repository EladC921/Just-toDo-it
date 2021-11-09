import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const TaskContainer = styled.div`
  magin: auto;
`;

const TaskList = (props) => {
  console.log(props);
  return (
    <div>
      <Droppable droppableId="droppable-1">
        {/* FUCK THIS SHIT */}
        {(provided) => {
          {
            console.log(" ~~~ ");
          }
          <TaskContainer ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskContainer>;
        }}
      </Droppable>
    </div>
  );
};

export default TaskList;
