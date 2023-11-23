import React from "react";
// import { useState } from "react";

import UsersList from "../components/UsersList";
import avatar from "../../shared/AbdulManan.png";

// in this component, adding data to UsersList

const Users = () => {

    // below we are creating some dummy constant, so that's why we make it capital
    const USER = [
            {
                id: 'u1',
                name: 'Abdul Manan',
                image: avatar,
                places: 1
            },
            {
                id: 'u2',
                name: 'Kashif Kamran',
                image: 'https://picsum.photos/seed/picsum/200/300',
                places: 1
            }
        ]


    return (
        <div className="user-page">
            { <UsersList items={USER} /> }
        </div>

    );

}

export default Users;
