import React from 'react';
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import {IconButton} from "@material-ui/core";
import SidebarThread from './SidebarThread/SidebarThread';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                <SearchIcon className="sidebar__searchIcon" />
                    <input type="text" placeholder="Search" className="sidebar__input"/>
                </div>
                <IconButton variant="outlined" id="sidebar__button">
                    <BorderColorOutlinedIcon />
                    </IconButton>
            </div>
            <div className="sidebar__threads">
               <SidebarThread />
            </div>
            <div className="sidebar__bottom"></div>
        </div>
    );
};

export default Sidebar;