import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import axios from '../axios'
// import { setJobDetails } from '../store/actions/jobAction'
import { useRouter } from 'next/router'

const SingleJob = () => {
  // const dispatch = useDispatch();
  const [jobs, setJobs] = useState([{}]);
  const {push,query}=useRouter();
  const user=useSelector(state=>state.user.userData);
  
  useEffect(() => {
    axios.get(`/get/jobs${query.search?'?search='+query.search:''}`).then((res) => {
    //  dispatch(setJobDetails(res.data))
    //  localStorage.setItem('jobs',JSON.stringify(res.data))
      setJobs(res.data?.filter(i=>i.user_id!=user?._id&&i.status!="Done"))
    }).catch((err) => {
      console.log(err);
    })
  }, [query])
  // const job=useSelector(state=>state.user.userData);

  const createConversation=(receiverId)=>{
     const data={
       senderId:user._id,
       receiverId,
     }
  axios.post('/conversation',data).then((resp)=>{
   push('/chat')
  })
  }

  return (

    <>
      <div className='container'>

        {jobs.map((job, index) => {
          return (
            <div className="card mb-4 mt-4" key={ index }>
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGpvYiUyMHNlYXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="card-image" />
              <div className="card-body">
                <h5 className="card-title">{job.job_designation}({job.category})</h5>
                <p className="card-text">{job.job_desc}</p>

                <p className="card-text">Place:{job.province},{job.city}</p>
                {/* <p className="card-text">Posted by:{job._id}</p> */}
                <p className="card-text">Minimum Payment : {job.minimum_pay}</p>

                <p className="card-text">Skills Required:{job.skills}</p>
                <p className="card-text"><small className="text-muted">{new Date(job.from).toDateString()}-{new Date(job.to).toDateString()}</small></p>
              <button onClick={()=>{push(`/apply/${job._id}`)}} className='btn btn-primary'>APPLY</button>
                <button className='btn btn-primary ms-5' onClick={(e)=>createConversation(job.user_id)}>CHAT NOW</button>

              </div>
            </div>
          )
        })}
      </div>
      <style jsx>
        {
          `
       @media screen and (min-width: 790px){
       .card {
        flex-direction: row;
      }
      .card img {
        width: 30%;
        object-fit:cover;
      }
    }
       `
        }
      </style>
    </>
  )
}

export default SingleJob