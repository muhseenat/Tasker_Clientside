import React, { useState, useEffect, useRef } from 'react'
import ChatOnline from './ChatOnline'
import Conversation from './Conversation'
import Message from './Message'
import { useSelector } from 'react-redux'
import axios from '../../axios'
import { io } from 'socket.io-client'
const Chat = () => {
  const [conversations, setConversations] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([])
  const socket = useRef()
  const scrollRef = useRef();
  const user = useSelector(state => state.user.userData)
  console.log(user._id);


  //USEEFFECT TO CONNECT TO WS & GET MESSAGES
  useEffect(() => {
    socket.current = io("ws://tasker-01.herokuapp.com");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);


  //USEEFFECT FOR PRIVATE MESSAGES
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);


  //USEEFFET TO CONNECT GET  ONLINE USERS
  useEffect(() => {
    socket.current.emit('addUser', user._id);
    socket.current.on('getUsers', users => {
      setOnlineUsers(users)
      // setOnlineUsers(users)
    })
  }, [user])




  //USEEFFECT TO FETCH CONVERSATION DETAILS
  useEffect(() => {
    axios.get('/conversation/' + user._id).then((resp) => {
      setConversations(resp?.data);
    }).catch(err => console.log(err))
  }, [user._id])

  //USEEFFECT TO FETCH MESSAGES OF CURRENT USER
  useEffect(() => {
    axios.get('/messages/' + currentChat?._id).then((res) => {
      setMessages(res.data)
    }).catch(err => console.log(err))
  }, [currentChat])

  //private chat 




  //NEW MESSAGES CREATING FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    const receiverId = currentChat?.members.find(member => member !== user._id);

    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    }
    axios.post('/messages', message).then((res) => {
      setMessages([...messages, res.data])
      setNewMessage("");
      socket.current?.emit("sendMessage", {
        senderId: user._id,
        receiverId,
        text: newMessage,
      });
    }).catch((err) => {
      console.log(err);
    })
  }

  //USE EFFECT FOR SMOOTH SCROLLING
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: 'smooth' });
  }, [messages])
  return (
    <>

      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">

            {conversations.map((c, index) => (
              <div onClick={() => setCurrentChat(c)} key={index}>
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

                  {messages?.map((m,index) => (
                    <div
                      ref={scrollRef} key={index}
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
        {/* <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div> */}
      </div>


    </>
  )
}

export default Chat