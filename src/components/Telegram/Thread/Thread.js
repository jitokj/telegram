import { Avatar, IconButton } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import React, { useState } from 'react';
import "./Thread.css";

const Thread = () => {
    const [input,setInput] = useState("");
    const sendMessage = (e)=>{
        e.preventDefault();
        console.log(input);
        setInput("");
    }
    return (
        <div className="thread">
         <div className="thread__header">
          <div className="thread__header__contents">
              <Avatar />
              <div className="thread__header__contents__info">
                  <h4>Thread Name</h4>
                  <h5>Last seen:</h5>
              </div>
          </div>
          <IconButton>
              <MoreHoriz className="thread__header__details" />
          </IconButton>
         </div>
         <div className="thread__messages"></div>
         <div className="thread__input">
         <form>
             <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="write a message..." />
             <button onClick={sendMessage}>Send</button>
             </form>
         </div>
        </div>
    );
};

export default Thread;