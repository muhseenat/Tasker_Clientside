import React,{useEffect} from 'react'
import axios from '../axios'
import { useSelector } from 'react-redux'

const SingleUserAppliedJobs = () => {
   const user=useSelector(state=>state.user.userData)
   const id=user._id
    useEffect(()=>{
          axios.get(`/user/applied/job/${id}`).then((data)=>{
              console.log(data,'it is data');
          })
    })


  return (
      <>
      
      
      
      </>
  )
}

export default SingleUserAppliedJobs