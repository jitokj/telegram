import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import "./Telegram.css";
import Thread from './Thread/Thread';

const Telegram = () => {
    return (
        <div className="telegram">
          <Sidebar />
          <Thread />
        </div>
    );
};

export default Telegram;