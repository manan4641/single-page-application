import React from "react";

import { Link } from 'react-router-dom';
import Card from "../../shared/components/UIElements/Card";
import './UserItem.css';
import Avatar from "../../shared/components/UIElements/Avatar";

// in this component we are just rendering each single user on frontend

const UsersItem = props => {

    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}  /* here we add link, this go to unique page of places based on user id, 'id' is getting frm dummy json data  */ >
                    <div className="user-item__image">
                        <Avatar image={props.image} alt={props.name} className="pic" />
                    </div>
                    <div className="user-item__info">
                        <h2> {props.name} </h2>
                        <h3>
                            {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'  /* if user has one palce then we use Place else use Places */}
                        </h3>
                    </div>
                </Link>           
            </Card>
        </li>
    );

}

export default UsersItem;