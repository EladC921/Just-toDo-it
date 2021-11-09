import logo from "./logo.svg";
import "./App.css";
import Add_Task from "./Components/Add_Task";
import "@atlaskit/css-reset";
import TaskList from "./Components/TaskList";
import { useState } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 50px 20%;
  background-color: #242729;
  height: 90vh;

  /*border: 2px solid #e274f8;
  border-radius: 12px;
  display: grid;
  grid-template-rows: 10% auto 10%;*/
`;

function App() {
  const tid = 0; //doesn't matter when I have one droppable area

  const [data, initData] = useState({
    tasks: [
      { id: 1, text: "toDo 1" },
      { id: 2, text: "toDo 2" },
      { id: 3, text: "toDo 3" },
      { id: 4, text: "toDo 4" },
      { id: 5, text: "toDo 5" },
    ],

    taskIds: [1, 2, 3, 4, 5],
  });

  //   return (
  //     <>
  //       <Add_Task />
  //     </>
  //   );
  // }

  const onDragEnd = (result) => {
    //TODO
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <TaskList
          tid={tid}
          tasks={data.taskIds.map((id) => data.tasks[id - 1])}
        />
      </Container>
    </DragDropContext>
  );
}

export default App;
