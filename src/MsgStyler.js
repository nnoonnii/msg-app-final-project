//messages are sent to this file for styling
import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './MsgStyler.css';
import { useStateValue } from "./StateProvider";




function MsgStyler ({msg, userid,senttime}) {

    const [{user}, dispatch] = useStateValue();

 /* different styling for current user and other user*/    
   let isUser;

    if(msg.userid===user.displayName){
        isUser = userid;
        
    } 

    //  <span className="sentTime" lang="en">{msg.senttime  && new Date(msg.senttime?.toDate()).toLocaleTimeString() }</span>
    return (
        
        
        <div className={`msg_box ${isUser && 'msg_user'} `}>
            
            <Card className={isUser && "msg_userBox" || !isUser && "msg_guestBox"}>
                <CardContent>
                <Typography variant="h5" component="h1">
                {isUser ? `${msg.usertext}` : `${ 'Guest' || msg.userid } : ${msg.usertext}`}
              
                <span className="sentTime" lang="en">{msg.senttime  && new Date(msg.senttime?.toDate()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }</span>                

                </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default MsgStyler
