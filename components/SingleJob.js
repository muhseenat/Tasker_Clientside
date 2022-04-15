import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import axios from '../axios'
import Link from 'next/link'
import { setJobDetails } from '../store/actions/jobAction'
import { useRouter } from 'next/router'

const SingleJob = () => {
  const dispatch = useDispatch();
  const [jobs, setJobs] = useState([{}]);
  const {push,query}=useRouter();
  console.log(query,'thuis dfhjk');
  console.log(query.search,'thuis dfhbfghfghjk');
  const user=useSelector(state=>state.user.userData);
  // {categories.map((catg,index)=>
  //   <div className='row py-5' key={index}>
  //        <div className='col-lg-3'>
  //            <div className='card py-3'>
  //                <div className='card-body'>
  //                    <img src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80" className='img-fluid' />
  //                    <h6>{catg.name}</h6>
  //                    <h6 className='red'>(25)</h6>
  //                </div>
  //            </div>
  //        </div>
  //    </div> ) }
  
  // useEffect(() => {
  //   axios.get(`/get/jobs?search=${query.search}`).then((res) => {
     
  //    dispatch(setJobDetails(res.data))
  //    localStorage.setItem('jobs',JSON.stringify(res.data))
  //     setJobs(res.data)
  //     console.log(res.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }, [])
  useEffect(() => {
    axios.get(`/get/jobs?search=${query.search}`).then((res) => {
     
     dispatch(setJobDetails(res.data))
     localStorage.setItem('jobs',JSON.stringify(res.data))
      setJobs(res.data)
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [query])
  const job=useSelector(state=>state.user.userData);

  const createConversation=(receiverId)=>{
     const data={
       senderId:user._id,
       receiverId,
     }
  console.log(data,'this is data');
  axios.post('/conversation',data).then((resp)=>{
   push('/chat')
  })
  }

  console.log(jobs);
  return (

    <>
      <div className='container'>

        {jobs.map((job, index) => {
          return (
            <div className="card mb-4 mt-4" key={{ index }}>
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGpvYiUyMHNlYXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="card-image" />
              <div className="card-body">
                <h5 className="card-title">{job.job_designation}({job.category})</h5>
                <p className="card-text">{job.job_desc}</p>

                <p className="card-text">Place:{job.province},{job.city}</p>
                {/* <p className="card-text">Posted by:{job._id}</p> */}
                <p className="card-text">Minimum Payment : {job.minimum_pay}</p>

                <p className="card-text">Skills Required:{job.skills}</p>
                <p className="card-text"><small className="text-muted">{new Date(job.from).toDateString()}-{new Date(job.to).toDateString()}</small></p>
                <Link href={`/apply/${job._id}`}  ><button className='btn btn-primary'>APPLY</button></Link>
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
      }
    }
       `
        }
      </style>
    </>
  )
}

export default SingleJob