import React from 'react'

const Category = () => {
  return (
<>
<section className='ceta py-5'>
    <div className='container-fluid py-5 text-center'>
        <h1>Browse Top Catagories</h1>
        <div className='row py-5'>
            <div className='col-lg-11 m-auto pt-3'>
                <div className='row py-5'>
                   <div className='col-lg-3'>
                       <div className='card py-3'>
                           <div className='card-body'>
                            <img src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80" className='img-fluid'/>
                            <h6>Electrician</h6>
                            <h6 className='red'>1000-20000</h6>
                           </div>
                       </div>
                   </div>
                   <div className='col-lg-3'>
                       <div className='card py-3'>
                           <div className='card-body'>
                            <img src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80" className='img-fluid'/>
                            <h6>Electrician</h6>
                            <h6 className='red'>1000-20000</h6>
                           </div>
                       </div>
                   </div>
                   <div className='col-lg-3'>
                       <div className='card py-3'>
                           <div className='card-body'>
                            <img src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80" className='img-fluid'/>
                            <h6>Electrician</h6>
                            <h6 className='red'>1000-20000</h6>
                           </div>
                       </div>
                   </div>
                   <div className='col-lg-3'>
                       <div className='card py-3'>
                           <div className='card-body'>
                            <img src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80" className='img-fluid'/>
                            <h6>Electrician</h6>
                            <h6 className='red'>1000-20000</h6>
                           </div>
                       </div>
                   </div>
   

                </div>
            </div>
        </div>
    </div>
</section>

<style jsx>
    {
        `
            .red{
                color:red;
            }
            .ceta h1{
                font-size: 3.5rem;
                color:rgb(7,7,78)
            }
            .ceta .card:hover{
                color:red;
                cursor:pointer;
                transition: all .3s;
                box-shadow: -2px 2px 22px -11px rgba(0,0,0,0.75);
            -webkit-box-shadow: -2px 2px 22px -11px rgba(0,0,0,0.75);
            -moz-box-shadow:  -2px 2px 22px -11px rgba(0,0,0,0.75);
        
            }
        `
    }
</style>
</>  )
}

export default Category