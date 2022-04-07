import React from 'react'

const ChatOnline = () => {
  return (
    <div className="chatOnline">
      {/* {onlineFriends.map((o) => ( */}
        <div className="chatOnlineFriend" 
        // onClick={() => handleClick(o)}
        >
          <div className="chatOnlineImgContainer">
            <img
            //   className="chatOnlineImg"
            //   src={
            //     o?.profilePicture
            //       ? PF + o.profilePicture
            //       : PF + "person/noAvatar.png"
            //   }
            //   alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">
              {/* {o?.username} */}
              </span>
        </div>
      {/* ))} */}
    </div>
  )
}

export default ChatOnline