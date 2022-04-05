import React from 'react'
import { useSelector } from 'react-redux'
import AppBar from '../../components/Nav'
import { useRouter } from 'next/router';
import Link from 'next/link';

const appliedJobs = () => {

  const router = useRouter()
  const allJob = useSelector(state => state.jobs?.jobData)
  
  console.log(allJob,'these are jobs');
  const userId=useSelector(state=>state.user?.userData._id)
  console.log(userId,'id from redux');
  const { id } = router.query;
console.log(id,'useridddddddd');

const jobss = useSelector(state=>state.jobs?.jobData);
console.log(jobss,'this from reduxxxx')
// const jobDetails= jobs.filter(job=>job._id==id)
// const formData = {
let jobs=[];
  //  jobs = allJob?.filter(job => job.user_id == id)
  // jobs= allJob.filter(job=>job._id==id)

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

                <p className="card-text">Place:{job.province},{job.city}</p>
                <p className="card-text">Minimum Payment : {job.minimum_pay}</p>

                <p className="card-text">Skills Required:{job.skills}</p>
                <p className="card-text"><small className="text-muted">{new Date(job.from).toDateString()}-{new Date(job.to).toDateString()}</small></p>
                <Link href={`/apply/${job._id}`}  ><button className='btn btn-primary'>APPLY</button></Link>

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