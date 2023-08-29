import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut = () =>{
        auth.signOut().then(() =>{dispatch(logout ())
        })
    };
    return (
        <div className ="header">
            <div className="header__left">
                <IconButton>
                <MenuIcon/>
                </IconButton>
                <img src ="data:image/jpeg;base64,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" alt=""/>

            </div>
        
        <div className ="header__middle">
            <SearchIcon />
            <input placeholder="Search mail" type="text"/>
            <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                <AppsIcon/>
                </IconButton>
                <IconButton>
               < NotificationsIcon />   
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>

                </div>
            </div>
            

    );
}

export default Header

