import React from "react";
import styled from "styled-components";
import { useRef, useState } from "react";
import "../css/list-item.css";
import { VscListFlat } from "react-icons/vsc";
import { FaRegEdit } from "react-icons/fa";

const List_Item = (props) => {
  const item = useRef();
  const text = props.text;
  const i = props.index;
  const [itemState, setItemState] = useState();

  const handleCheckDiv = () => {
    item.current.checked = item.current.checked ? false : true;
    handleCheck();
  };

  const handleCheck = () => {
    item.current.checked
      ? setItemState({ textDecoration: "line-through" })
      : setItemState({ textDecoration: "initial" });
  };

  const handleDrag = (e) => {
    console.log("~~~~~~~~~~~");
    console.log(props.id);
    e.dataTransfer.setData("dropId", props.id);
    // props.handleLastDragged(props.id); //save the current task being dragged
  };

  return (
    <List_Item_style
      className="list-item-container"
      draggable
      onDragStart={handleDrag}
      key={props.id}
    >
      <Checkbox>
        <input onChange={handleCheck} ref={item} type="checkbox" />
      </Checkbox>
      <Text onClick={handleCheckDiv} style={itemState}>
        {text}
      </Text>
      <Icons>
        <FaRegEdit className="edit-icon" />
        <VscListFlat className="drag-icon" />
      </Icons>
    </List_Item_style>
  );
};

const List_Item_style = styled.div`
  line-height: 2;
  margin: 15px 10px;
  width: auto;
  border: 2px solid darkgray;
  display: grid;
  grid-template-columns: 10% 80% 5% 5%;

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

export default List_Item;
