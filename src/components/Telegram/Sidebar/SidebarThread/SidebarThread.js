import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarThread.css";

const SidebarThread = () => {
    return (
        <div className="sidebarThread">
        <Avatar />
        <h3>Thrad Name</h3>
        <p>Info</p>
        <small>timestamp</small>
        </div>
    );
};

export default SidebarThread;