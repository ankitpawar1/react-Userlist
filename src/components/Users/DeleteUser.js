import React, { useState } from "react";
import DeleteModal from "../UI/DeleteModal";

const DeleteUser = (props) => {
  const [modal, setModal] = useState(false);
  const deleteHandler = () => {
    setModal(true);
    // console.log(props.id);
  };
  const idHandler = () => {
    props.onDeleteList(props.id);
    // console.log(props.id);
  };
  const cancelHandler = () => {
    setModal(null);
  };

  return (
    <>
      {modal && (
        <DeleteModal
          title="Delete Item"
          message="Are you sure want to delete"
          onYes={idHandler}
          onConfirm={cancelHandler}
        />
      )}
      <li onClick={deleteHandler}>{props.children}</li>
    </>
  );
};

export default DeleteUser;
