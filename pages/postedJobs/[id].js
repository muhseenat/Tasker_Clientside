import React from 'react'
import { useSelector } from 'react-redux'
import AppBar from '../../components/Nav'
import { useRouter } from 'next/router';
import axios from '../../axios'
import Link from 'next/link';

const appliedJobs = () => {

  const router = useRouter()
  const allJob = useSelector(state => state.jobs?.jobData)
  const { id } = router.query;
   const jobs = allJob?.filter(job => job.user_id == id)||[]
   const handleCancel=(jobId)=>{
     alert("are you sure want to cancel")
     console.log('not workingg');
     axios.delete(`/cancel/job/${jobId}`).then((resp)=>{
       //successbar
     }).catch(err=>console.log(err))
   }

  return (
    <>
      <AppBar />
      <div className='container'>
        {jobs.map((job, index) => {
          return (
            <div className="card mb-4 mt-4" key={{ index }}>
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGpvYiUyMHNlYXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="card-image" />
              <div className="card-body">
                <h5 className="card-title">{job.job_designation}({job.category})</h5>
                <p className="card-text">{job.job_desc}</p>
                
                <p className="card-text">Place:{job.province},{job.city}</p>
                <p className="card-text">Minimum Payment : {job.minimum_pay}</p>

                <p className="card-text">Skills Required:{job.skills}</p>
                <p className="card-text"><small className="text-muted">{new Date(job.from).toDateString()}-{new Date(job.to).toDateString()}</small></p>
                <Link href={`/view/users/${job._id}`}  ><button className='btn btn-primary'>View</button></Link>
                <button className='btn btn-danger m-5'onClick={(e)=>handleCancel(job._id)}>Cancel</button>

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

export default appliedJobs