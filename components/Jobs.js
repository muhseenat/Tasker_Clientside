import React, { useEffect, useState } from 'react'
import axios from '../axios'
import Link from 'next/link'

const SingleJob = () => {

  const [jobs, setJobs] = useState([{}])

  useEffect(() => {
    axios.get('/get/jobs').then((res) => {

      setJobs(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (

    <>
      <div className='container'>

        {jobs.map((job, index) => {
          return (
            <div className="card mb-4 mt-4" key={index} style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start" />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{job.job_designation}({job.category})</h5>
                  <p className="card-text">{job.job_desc}</p>
                  <p className="card-text">Place:{job.province},{job.city}</p>
                  <p className="card-text">Minimum Payment : {job.minimum_pay}</p>

                  <p className="card-text">Skills Required:{job.skills}</p>
                  <p className="card-text"><small className="text-muted">{new Date(job.from).toDateString()}-{new Date(job.to).toDateString()}</small></p>
                  <Link href='apply/i123'><button className='btn btn-primary'>APPLY</button></Link>

                </div>
              </div>
            </div>
          )
        })}
      </div>
      <style jsx>
        {
          `
         @media screen and (min-width: 790px) {
          .img-fluid {
            height: 26vw;
            object-fit: cover;
          }
          
      }
        `
        }
      </style>
    </>
  )
}

export default SingleJob