import React from 'react'
import Link from 'next/link'
const MainSection = () => {
  return (
    <>
   
    <section className='main py-5'>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-7'>
                    <h1>Find The Most Exciting <br/>
                    Jobs</h1>
                    <Link href='/jobs'><button className='btn1'>
                       Find Jobs
                    </button></Link>
                </div>
            </div>
        </div>
    </section>
    <style jsx>
        {
            `
                .main{
                 background:url(https://media.istockphoto.com/photos/portrait-of-cheerful-modern-female-professional-in-modern-office-picture-id1147107125?b=1&k=20&m=1147107125&s=170667a&w=0&h=-siRzIEgjeAQJ445XdDmVd786GeYMG57BAO3iWX8uJc=)no-repeat;
                 background-size:cover;
                 min-height:95vh;
                 width:100%
                }
               .main h1{
                  font-size:5rem;
                  font-weight:800;
                  color:rgb(7,7,78);

               }  
               .btn1{
                   height:70px;
                   width:25%;
                   background-color:blue;
                   color:white;
                   border:none;
                   outline:none;
                   cursor:pointer;
                   transition:all .4s;

               }   
               .btn1:hover{
                   background:blue;
                   transition:all 0.4s;
               }   `
        }
    </style>

    </>
  )
}

export default MainSection