import React, {useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import { FormControl,FormHelperText } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import './App.css';
import MsgStyler from './MsgStyler';
import db from './firebase';
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import { useStateValue } from "./StateProvider";
import Login from './Login';


function App() {

  const [{user}, dispatch] = useStateValue();
 
  const [input,setInput] = useState('');
  
  //store sent messages in an array
  //useState creates state variable so that page refresh is not needed to update content
  const [msg,setMsg] = useState([]); 
  const [userid, setUserid] = useState('');
  const senttime = useState([]);
  
 
  useEffect(() => { 
    //everytime a change in the firebase db is detected, run this command
    //retreive and display data from snapshot.docs as objects
    db.collection('Msg_db')
    .orderBy('senttime','desc')
    .onSnapshot(snapshot => {
      setMsg(snapshot.docs.map(doc => doc.data()))
    })
  }, []) 
  
  console.log(input);
  console.log(msg);

  const sendMsg = (e) => {
    //prevent submit when press enter
    // e.preventDefault();
    
    //send and store usertext, userid, and timestamp to firestore database
    db.collection('Msg_db').add({
      usertext: input,
      userid: user.displayName,
      senttime: firebase.firestore.FieldValue.serverTimestamp(),
    })

    //setMsg will append an object to all sent messages
    setMsg([...msg, {userid: userid, usertext:input, senttime:senttime}]);
    setInput('');
  }

  

  return (
    <div className="pageSelect">
      {!user? (
            <Login/>
            
        ): ( 
          <div className="App">
            <h1>SIKED! Online Chat</h1>
            <h2>Welcme, {user.displayName || 'Guest'}! 🔥</h2>

            <div className="printMsg">
              { //pass entire messages as an objects. 
          //this is so that a message's userid is independent of the current logged in user's id  
          //*therefore it isn't userid={msg.userid}*/
                msg.map(msg => (
                <MsgStyler userid={user.displayName} msg={msg} senttime={senttime}/>
                ))      
              }
    

                <div className="input_column" >    
                  <form>
                    <FormControl className="input_formControl" >
            
                    <Input id="msg-input" value={input} title="Enter your message" onChange={(e) => setInput(e.target.value)}/> {/* to store message draft as the user is typing*/}
            
                    <Button className="sendButton" disabled={input.length<1} type="submit" onClick={sendMsg}>
                    Submit
                    </Button>
                  </FormControl>
                  </form>
                </div>

            </div> {/* .input_column */}
          </div> // .printMsg
        ) // if !isUser is false (logged-in)//
      } {/* if !isUser is true (not logged-in)*/} 
    </div> //pageSelect
  );//return
}  //function App ()
export default App;

