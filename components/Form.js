import React,{useState,useEffect} from 'react'
import axios from '../axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
const categories=['ELECTRICIAN','SOFTWARE ENGINEER','PLUMBER','GARDENER'];
// const [categories,setCategories]=useState([])
const user=useSelector(state=>state.user.userData)
useEffect(()=>{
   axios.get('/admin/get/category').then((resp)=>{
     console.log(resp);
     setCategories(resp.data)
   }).catch(err=>console.log(err))
},[])
    const router = useRouter();
    let data={
         user_id:user?._id,
        job_designation:"",
        job_desc:"",
        category:"",
        province:"",
        city:"",
        minimum_pay:"",
        from:"",
        to:"",
        skills:""
    }

    const [formData,setFormData]=useState(data)
    
    const updateFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
      };

const handlePost=async(e)=>{
    e.preventDefault()
    console.log(formData);
    try {
        const res= await axios.post('/create/job',formData)
        if(res){
            router.push('/')
        }
    } catch (error) {
        console.log(error);
    }

}

  return (
      
<div className='container '>
<form className='w-100' onSubmit={(e)=>handlePost(e)}>
  <div className="form-row ">
    <div className="form-group col-md-6 m-3">
      <label name="inputEmail4">Job Designation</label>
      <input type="text" className="form-control"  name="job_designation" onChange={(e)=>updateFormData(e)}/>
    </div>
    <div className="form-group col-md-6 m-3">
      <label name="inputEmail4">Job Description</label>
      <input type="text-area" className="form-control"  name="job_desc" onChange={(e)=>updateFormData(e)}/>
    </div>
    <div className="form-group col-md-6 m-3">
      <label name="inputPassword4">Category</label>
      <select id="inputState"  name="category"  onChange={(e)=>updateFormData(e)} className="form-control">
       {categories.map((category,index)=> {return(<option key={index}>{category}</option>)})}
    
      </select>
    </div>
  </div>
  <div className="form-group col-md-6 m-3">
    <label name="inputAddress">Province</label>
    <input type="text" className="form-control" id="inputAddress"  name="province" onChange={(e)=>updateFormData(e)}/>
  </div>
  <div className="form-group col-md-6 m-3">
    <label name="inputAddress2">City</label>
    <input type="text" className="form-control" id="inputAddress2"  name="city" onChange={(e)=>updateFormData(e)}/>
  </div>
  <div className="form-row ">
    <div className="form-group col-md-6 m-3">
      <label name="inputCity">Minimum Payment</label>
      <input type="text" className="form-control" id="inputCity" name="minimum_pay" onChange={(e)=>updateFormData(e)}/>
    </div>
    <div className="form-group col-md-4 m-3">
      <label name="inputState">Time Period From:</label>
      <input type="date" className="form-control" id="inputCity" name="from" onChange={(e)=>updateFormData(e)} />
      <label name="inputState">To:</label>
      <input type="date" className="form-control" id="inputCity" name="to" onChange={(e)=>updateFormData(e)} />
    </div>
    <div className="form-group col-md-2 m-3">
      <label name="inputZip">Skills Required</label>
      <input type="text" className="form-control" id="inputZip" name="skills" onChange={(e)=>updateFormData(e)}/>
    </div>
  </div>
  
  <button type="submit" className="btn btn-primary mt-3">Post Job</button>
</form>
</div>
    )
}

export default Form