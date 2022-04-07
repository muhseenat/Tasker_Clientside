import React from 'react'

const Conversation = () => {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src='https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg'
        // src={
        //   user?.profilePicture
        //     ? PF + user.profilePicture
        //     : PF + "person/noAvatar.png"
        // }
        // alt=""
      />
      <span className="conversationName">MUCCc
        {/* {user?.username} */}
        </span>
    </div>
  )
}

export default Conversation