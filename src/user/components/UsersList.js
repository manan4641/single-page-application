import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import './UsersList.css';

// in this component we are getting data from Users component and mapping each single user

const UsersList = props => {

    /* 'items' is a name of prop & we can use any name instead of 'items' of our choice, we use 'lenght' property as we expect items will be an array. And it is eqaul to zero bcz we don't have any user yet.  */
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card className="noUser__found">
                    <h2>No user found!</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {props.items.map(user => (     // here we are mapping every item into jsx element, the items we got from props is an array of objects in vanilla js, and every item here will be a user.

                <UserItem       // here it is returning single user item for every user, for this we import UserItem Component.
                    key={user.id}
                    id={user.id}   // here forwarding ID of user as seprate prop
                    name={user.name}
                    image={user.image}
                    placeCount={user.places}
                />
            ))}
        </ul>
    );
}

export default UsersList;