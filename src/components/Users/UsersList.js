import React from "react";

import Card from "../UI/Card";
import DeleteUser from "./DeleteUser";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <DeleteUser key={user.id} id={user.id} onDeleteList={props.onDelete}>
            {user.name} ({user.age} years old)
          </DeleteUser>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
