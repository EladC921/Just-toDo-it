import React from "react";
import styled from "styled-components";
import { VscListFlat } from "react-icons/vsc";
import { FaRegEdit } from "react-icons/fa";
import "../css/list-item.css";
import { Draggable } from "react-beautiful-dnd";

const TaskContainer = styled.div`
  line-height: 2;
  margin: 15px 10px;
  width: auto;
  border: 2px solid darkgray;
  display: grid;
  grid-template-columns: 10% 80% 5% 5%;
  background-color: white;
  &:hover {
    transform: translate(0, -5px);
    background-color: #aaaaaa;
  }

  &:active {
    background-color: #727171;
  }
`;

const Checkbox = styled.div`
  padding: 2px;
`;

const Text = styled.div`
  cursor: pointer;
  padding: 2px;
  word-wrap: break-word;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Task = (props) => {
  console.log(props);

  return (
    <div>
      <Draggable
        draggableId={props.task.id.toString()}
        index={props.task.index}
      >
        {(provided) => {
          <TaskContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Checkbox>
              <input type="checkbox" />
            </Checkbox>
            <Text>{props.task.text}</Text>
            <Icons>
              <FaRegEdit className="edit-icon" />
              <VscListFlat className="drag-icon" />
            </Icons>
          </TaskContainer>;
        }}
      </Draggable>
    </div>
  );
};

export default Task;
