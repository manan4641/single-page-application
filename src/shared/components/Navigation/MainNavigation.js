import React, { useState } from "react";

import MainHeader from './MainHeader';
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import './MainNavigation.css';

const MainNavigation = props => {

    const [drawerIsOpen, setDrawer] = useState(false);
    console.log("checking what is in drawer:", drawerIsOpen);

    const openDrawerHandler = () => {
        setDrawer(true);
    }

    const closeDrawerHandler = () => {
        setDrawer(false);
    }

    return (
        <React.Fragment>
            { drawerIsOpen ? <Backdrop onClick={closeDrawerHandler} /> : null /* show this Backdrop div when drawerIsOpen = true  */ }
         
            <SideDrawer show={drawerIsOpen} click={closeDrawerHandler} /* this 'click' prop coming from <aside> in SidrDrawer.js */ >
                 <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer> 
            
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Link to="/">
                    <h1 className="main-navigation__title">Single Page App</h1>
                </Link>
                <nav className="main-navigation__header ">
                    <NavLinks />
                </nav>
            </MainHeader>

        </React.Fragment>
    );
}

export default MainNavigation;
