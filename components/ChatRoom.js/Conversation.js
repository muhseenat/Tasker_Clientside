import React, { useEffect,useState } from 'react'
import axios from '../../axios';
const Conversation = ({conversation,currentUser}) => {

const [user,setUser] = useState(null)
useEffect(()=>{
  const friendId=conversation?.members.find((m)=>m!==currentUser._id)
  axios.get('/users?userId='+friendId).then((resp)=>{
    setUser(resp.data)
  }).catch(err=>console.log(err))

},[currentUser,conversation])

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src='https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'
        // src={
        //   user?.profilePicture
        //     ? PF + user.profilePicture
        //     : PF + "person/noAvatar.png"
        // }
        // alt=""
      />
      <span className="conversationName">
        {user?.name}
        </span>
    </div>
  )
}

export default Conversation