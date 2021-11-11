import "./App.css";
import Add_Task from "./Components/Add_Task";
import styled from "styled-components";
import logo from "./doit.png";

const Header = styled.div`
text-align:center;

& h3 {
  color:#2c004f;
  font-size:32px;
}
`;

function App() {

  return (
    <>
      <Header><h3>Just toDo It!</h3></Header>
      <Add_Task />
      <a target="_blank" href="https://icons8.com/icon/uYOkW58sYFsy/do-it">Do It</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </>
  );
}

export default App;
