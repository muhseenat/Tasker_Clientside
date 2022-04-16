import React from 'react'
import AppBar from '../components/Nav'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { setUserDetails } from '../store/actions/userActions';

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const user = useSelector(state => state.user.userData);
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jobs");
    dispatch(setUserDetails(null))
    router.push('/')
  }

  return (
    <>
      <AppBar />
      <body>
        <div className="container">
          <div className="cover-photo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHGvAsJP8rcCnvYDZvqvNfWcTUqRc2EDpvg&usqp=CAU" className="profile" />
          </div>
          <div className="profile-name">{user?.name}</div>
          <p className="about">Email : <br />{user?.email}</p>
          <Link href={`/postedJobs/${user?._id}`}><button className="msg-btn">Posted Jobs</button></Link>
          <Link href="/appliedJobs"><button className="follow-btn">Applied Jobs</button></Link>
          <button className='btn msg-btn mt-1' onClick={handleLogout} style={{ marginBottom: "05px" }} >Logout</button>

        </div>
        <style jsx>
          {
            `
            html,body{
                font-family: Montserrat, sans-serif;
               
              }
              .container{
                user-select: none;
                margin: 100px auto;
                background: #231e39;
                color: #b3b8cd;
                border-radius: 5px;
                width: 600px;
                text-align: center;
                box-shadow: 0 10px 20px -10px rgba(0,0,0,.75);
              }
              .cover-photo{
                background: url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGpvYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60);
                height: 160px;
                width: 100%;
                border-radius: 5px 5px 0 0;
              }
              .profile{
                height: 120px;
                width: 120px;
                border-radius: 50%;
                margin: 93px 0 0 -175px;
                border: 1px solid #1f1a32;
                padding: 7px;
                background: #292343;
              }
              .profile-name{
                font-size: 25px;
                font-weight: bold;
                margin: 27px 0 0 120px;
              }
              .about{
                margin-top: 35px;
                line-height: 21px;
              }
              button{
                margin: 10px 8px 40px 0;
              }
              .msg-btn,.btn-success,.follow-btn{
                background: #03bfbc;
                border: 1px solid #03bfbc;
                padding: 10px 25px;
                color: #231e39;
                border-radius: 3px;
                font-family: Montserrat, sans-serif;
                cursor: pointer;
                margin-left: 10px;
                background: transparent;
                color: #02899c;
              }
            
              .msg-btn:hover, .btn-success,.follow-btn:hover{
                color: #231e39;
                background: #03bfbc;
                transition: .5s;
              }
              .container i{
                padding-left: 20px;
                font-size: 20px;
                margin-bottom: 20px;
                cursor: pointer;
                transition: .5s;
              }
              .container i:hover{
                color: #03bfbc;
              }
              @media screen and (max-width: 500px) {
               .container{
                width: 350px;
               }
            `
          }
        </style>
      </body>
    </>
  )
}

export default Profile