import React,{useState,useEffect} from 'react'
import ChatOnline from './ChatOnline'
import Conversation from './Conversation'
import Message from './Message'
import {useSelector} from 'react-redux'
import axios from '../../axios'

const Chat = () => {
const [conversations,setConversations] = useState([])
const [currentChat,setCurrentChat] = useState(null)
const [messages,setMessages] = useState([])
const [newMessage,setNewMessage] = useState("")

  const user = useSelector(state=>state.user.userData)
 console.log(user._id);
 //USEEFFECT TO FETCH CONVERSATION DEATILS
  useEffect(()=>{
    axios.get('/conversation/'+user._id).then((resp)=>{
      console.log(resp.data);
      setConversations(resp?.data);
    }).catch(err=>console.log(err))
  },[user._id])

  //USEEFFECT TO FETCH MESSAGES OF CURRENT USER
  useEffect(()=>{
    axios.get('/messages/'+currentChat?._id).then((res)=>{
  console.log(res,'thi is resssss');
      setMessages(res.data)
    }).catch(err=>console.log(err))
  },[currentChat])

  console.log(messages,'this is messages');
  console.log(currentChat,'ithann current chat');
//NEW MESSAGES CREATING FUNCTION
  const handleSubmit=(e)=>{
   e.preventDefault();
    const message={
   sender:user._id,
   text:newMessage,
   conversationId:currentChat._id,
    }
    axios.post('/messages',message).then((res)=>{
      setMessages([...messages,res.data])
      setNewMessage("");
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
      <>
      
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
        
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
              
                  {messages?.map((m) => (
                    <div 
                    // ref={scrollRef}
                    >
                      <Message message={m} 
                      own={m.sender === user._id}
                       />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton"
                   onClick={handleSubmit}
                   >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline/>
            {/* <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            /> */}
          </div>
        </div>
      </div>
      
      
      </>
  )
}

export default Chat