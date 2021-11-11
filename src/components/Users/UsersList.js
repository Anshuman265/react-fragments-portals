import React from "react";
 
import Card from "../UI/Card";
import classes from "./UsersList.module.css";


const UsersList = (props) => {
    return(
        <Card className={classes.users}>
        <ul>
                {props.users.map((user) => (
                    <li className={classes.grow} key={user.id}>
                        <div className={classes.namecard}>
                            <h3>{user.name}</h3>
                        </div>
                        <div className={classes.age}><em>{user.age} years old</em> </div>
                    </li>))}
            <li className={classes.grow}>
                <div className={classes.namecard}>
                    <h3>Dominic </h3>
                </div>
                    <div className={classes.age}> <em> 30 years old</em></div>
            </li>
                <li className={classes.grow}><div className={classes.namecard}>
                    <h3>Brian</h3>  </div>
                    <div className={classes.age}><em> 28 years old</em> </div>
                </li>

        </ul>
        </Card>
    );
};

export default UsersList;