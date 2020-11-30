import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./SidebarThread.css";
import db from "../../../../firebase";
import { useDispatch } from 'react-redux';
import {setThread} from "../../../../features/threadSlice";

const SidebarThread = ({id,threadName}) => {
    const dispatch = useDispatch();
    const [threadInfo,setThreadInfo] = useState([]);
    useEffect(()=>{
        db.collection("threads").doc(id)
        .collection("messages")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>setThreadInfo(snapshot.docs.map((doc)=>doc.data())))
    },[id]);
    return (
        <div className="sidebarThread" onClick={()=>{
            dispatch(setThread({
                threadId: id,
                threadName: threadName
            }))
        }}>
        <Avatar src={threadInfo[0]?.photo} />
        <div className="sidebarThread__details">
        <h3>{threadName}</h3>
        <p>{threadInfo[0]?.message}</p>
        <small className="sidebarThread__timestamp">timestamp</small>
        </div>
        </div>
    );
};

export default SidebarThread;