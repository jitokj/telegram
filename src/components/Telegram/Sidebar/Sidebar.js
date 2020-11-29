import React from 'react';
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import {Avatar, IconButton} from "@material-ui/core";
import SidebarThread from './SidebarThread/SidebarThread';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import {Settings} from "@material-ui/icons";

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
            <div className="sidebar__bottom">
                <Avatar className="sidebar__bottom__avatar" />
                <IconButton>
                    <PhoneOutlinedIcon />
                </IconButton>
                <IconButton>
                    <QuestionAnswerOutlinedIcon />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>
        </div>
    );
};

export default Sidebar;