
import {useRouter} from 'next/router'
const Category = ({categories,button}) => {
    const {push} = useRouter()
   

      const onSearch=(search)=>{
        push(`/jobs?search=${search}`)
     }

    return (
        <>
            <section className='ceta py-5'>
                <div className='container-fluid py-5 text-center'>
                    <h1>Browse Top Catagories</h1>
                    <div className='row py-5'>
                        <div className='col-lg-11 m-auto pt-3'>
                            <div className='row py-5'>
                          {categories.map((i,index)=>
                          <div className='col-lg-3 mt-5'key={index} onClick={()=>onSearch(i?.name)}>
                                    <div className='card py-3'>
                                        <div className='card-body'>
                                            <img src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80" className='img-fluid' />
                                            <h6>{i.name}</h6>
                                        </div>
                                    </div>
                                </div> )}
                               
                             
                                  


                            </div>
                           {button && <div className="row">
                                <div className="col-lg-12">
                                    <div className="browse-btn2 text-center mt-50">
                                        <button className='btn2'><a href="#" className="border-btn2 "onClick={(e)=>push('/categories')}>Browse All Sectors</a></button>
                                    </div>
                                </div>
                            </div>}
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
            .btn2 {
                height:70px;
                width:20%;
                border:1px solid rgb(130,130,231);
                background:transparent;
                border-radius:5px;
                color:rgb(130,130,231);
                transition:all 0.4s
            }
            .btn2:hover {
              
                background:rgb(102,102,214);
                color:white
                border:none;
                outline:none;
                transition:all 0.4s
            }
            a{
                text-decoration:none;
                color:rgb(130,130,231);
            }

            a:hover{
                color:white;
            }
            @media screen and (max-width: 640px) {
                .btn2{
                    width:50%
                }
            }
        `
                }
            </style>
        </>)
}

export default Category