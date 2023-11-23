import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import './PlaceList.css';

const PlaceList = props => {

    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card className="place-not_found">
                    <h2>No place found! Maybe create one?</h2>
                    <button>Share Place</button>
                </Card>
            </div>
        );
    }

    return (
        <ul className="place-list">
            {props.items.map(place => (
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    description={place.description}
                    address={place.address}
                    image={place.imageUrl}
                    title={place.title}
                    coordinates={place.location}
                    creatorId={place.creator}
                />
            ))}
        </ul>
    );

}

export default PlaceList;