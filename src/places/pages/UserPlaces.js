import React from "react";

import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id:'p1',
        title: 'The Centaurus Mall',
        description: 'Centaurus Mall, the most tallest builing in ISB',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNY1oZwUwzm1gaPBBhe8mruOnnSwrauW_WQLapJ=s1360-w1360-h1020',
        address: 'The Centaurus Mall, F8, 4 Jinnah Avenue, F-8/4, F-8, Islamabad Capital Territory',
        creator: 'u1',
        location: {
            lat: 33.7077,
            lng: 73.0498
        }
    },
    {
        id:'p2',
        title: 'The Centaurus Shopping Mall',
        description: 'Centaurus Mall, the most tallest builing in ISB',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNz7-hGAsj83zJGSpvvNmeLjvp-W0CKNcJPPwXm=s1360-w1360-h1020',
        address: 'The Centaurus Mall, F8, 4 Jinnah Avenue, F-8/4, F-8, Islamabad Capital Territory',
        creator: 'u2',
        location: {
            lat: 33.7077,
            lng: 73.0498
        }
    }
]; 

const UserPlaces = () => {

    const userId = useParams().userId; // this userId is coming from Route path in App.js file.
    console.log("fetching id from url in 'UserPlaces' component:", userId);
    
    /* in below line ham ne filter lgya hai, like jo bhi user id 'url' mein hogi woh pehly fetch kr rahy ham url se using 'useParams()'
    and then us id per filter lga rahy. Aur 'place' ki jga ham koi bhi word likh skty apni choice ka. 
    'creator' hamary pass json item jo ham upr diya ham ne */ 
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />

} 

export default UserPlaces;