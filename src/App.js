import logo from "./logo.svg";
import "./App.css";
import Add_Task from "./Components/Add_Task";
import styled from "styled-components";

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

  return (
    <>
      <Add_Task />
    </>
  );
}

export default App;
