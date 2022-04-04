import { useRouter } from 'next/router';
import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import axios from '../axios'


const ApplyJobForm = () => {
   const user = useSelector(state=>state.user?.userData);
   const router = useRouter();
   const { id } = router.query

    if(!user){
      router.push('/login')
    }
    const formData={
        user_id:user?._id,
        job_id:id,
        name:"",
        place:"",
        phone:"",
        qualification:"",
        skill:"",
        experience:""
    }
    const [data,setData] =useState(formData)
    const updateFormData=(e)=>{
       const name = e.target.name;
       const value =e.target.value;
       setData({...data,[name]:value});
    }
    
   const handleSubmit=(e)=>{
       e.preventDefault();
       
       console.log(data,'this is gong data');
       axios.post('/apply/job',data).then((res)=>{
         router.push('/jobs');
       }).catch(err=>console.log(err))
   }


  return (
    <div>

<div className="container">  
  <form id="contact" action="" method="post" onSubmit={handleSubmit}>
    <h3>Apply Form</h3>
    <fieldset>
      <input placeholder="Your Name" type="text" tabindex="1"  name='name'   required autofocus onChange={(e)=>updateFormData(e)}/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Place" type="text" tabindex="2" name='place' onChange={(e)=>updateFormData(e)} required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" name='phone' onChange={(e)=>updateFormData(e)} tabindex="3" />
    </fieldset>
    <fieldset>
      <input placeholder="Your Qualification" type="text"  name='qualification' onChange={(e)=>updateFormData(e)} tabindex="4" />
    </fieldset>
    <fieldset>
      <input placeholder="Skills" type="text" tabindex="4" name='skill' onChange={(e)=>updateFormData(e)} required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Any Experience" tabindex="5"  name='experience' onChange={(e)=>updateFormData(e)} required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>

<style jsx>
    {
        `
        
        @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  background: #4CAF50;
}

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
  background: #F9F9F9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #4CAF50;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #43A047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
        
        `
    }
</style>

    </div>
  )
}






export default ApplyJobForm;




