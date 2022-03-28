import { fontSize } from '@mui/system'
import React from 'react'

const ApplyJob = () => {
  return (
      <>
      
      <div className="job py-5 text-center text-white">
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-lg-10 m-auto">
                            <h1> Make a Difference in your life with Tasker</h1>
                        </div>
                </div>
                <div className='row'>
                    <div className='col-lg-5 m-auto'>
                        <button className='btn2'>
                            Apply Job
                        </button>
                    </div>
                </div>
            </div>
        </div>
      

      <style jsx>
          {
              `
              .job{
                  
                  background-size: cover;
                  height: 90vh;
                  width: 100%;
              }
              .job h1{
                 fontSize: 3.8rem;
              }`
          }
      </style>
      </>
  )
}

export default ApplyJob