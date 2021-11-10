import React from "react";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import "../css/list-item.css";
import { VscListFlat } from "react-icons/vsc";
import { FaRegEdit } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc"

const List_Item = (props) => {
  const item = useRef();
  const text = props.text;
  const [itemState, setItemState] = useState();
  const [edit, setEdit] = useState(false);
  const [textS, setTextS] = useState(text);

  let data = (props.checkedTasks && props.checkedTasks.length > 0) ? [...props.checkedTasks, props.id] : [props.id];

  //handle clicking on the div the check the checkbox
  const handleCheckDiv = (e) => {
    item.current.checked = item.current.checked ? false : true;
    handleCheck();
  };

  //handdle checkbox checking
  const handleCheck = () => {
    console.log("checked Tasks:");
    console.log(data);

    if (item.current.checked) {
      props.updateChecked(data);
      setItemState({ textDecoration: "line-through" })
    }

    else {
      data = data.filter(id => id !== props.id);
      props.updateChecked(data);

      setItemState({ textDecoration: "initial" });
    }
  };

  //handle edit task
  const handleEdit = () => {
    setEdit(true);
  }

  const handleEditText = (e) => {
    setTextS(e.target.value);
  }

  const acceptEdit = () => {
    // let updatedTasks = props.tasks.map(task => {
    //   if (props.id === task.id) task.text = textS;
    // })
    // props.editTasks(updatedTasks);
  }

  return (
    <List_Item_style
      className="list-item-container"
      key={props.id}
    >
      <Checkbox>
        <input onChange={handleCheck} ref={item} type="checkbox" />
      </Checkbox>
      <Text onClick={handleCheckDiv} style={itemState}>
        {(edit) ? <><textarea type="text" onChange={handleEditText} value={textS} /><FcCheckmark onClick={acceptEdit} /></> : text}

      </Text>
      <Icons>
        <FaRegEdit className="edit-icon" onClick={handleEdit} />
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
    /* transform: translate(0, -5px); */
    background-color: #aaaaaa;
  }

  &:active {
    background-color: #f42e2e;
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
