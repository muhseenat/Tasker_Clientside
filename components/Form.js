import React, { useState, useEffect } from 'react'
import axios from '../axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';


const Form = () => {

  const [categories, setCategories] = useState([])
  const user = useSelector(state => state.user.userData)
  const router = useRouter();
  useEffect(()=>{


    if (!user) {
      if(typeof window!==undefined){
  
        router.push('/login')
        return false;
      }
    }
  },[])


  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }

  const fromDate = yyyy + '-' + mm + '-' + dd;

  useEffect(() => {

    axios.get('/admin/get/category').then((resp) => {
      setCategories(resp?.data)
    }).catch(err => console.log(err))
  }, [])
  let data = {
    user_id: user?._id,
    job_designation: "",
    job_desc: "",
    category: "",
    province: "",
    city: "",
    minimum_pay: "",
    from: "",
    to: "",
    skills: ""
  }

  const [formData, setFormData] = useState(data)

  const updateFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handlePost = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/create/job', formData)
      if (res) {
        swal({
          title: "Success",
          text: "You Successfully post the job",
          icon: "success",
          button: "OK",
        });
        router.push('/jobs')
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (

    <div className='container '>
      <h3 className='text-center py-3'>POST JOB</h3>

      <form className='w-100' onSubmit={(e) => handlePost(e)}>
        <div className="form-row ">
          <div className="form-group col-md-6 m-3">
            <label name="inputEmail4">Job Designation</label>
            <input type="text" className="form-control" name="job_designation" onChange={(e) => updateFormData(e)} required />
          </div>
          <div className="form-group col-md-6 m-3">
            <label name="inputEmail4">Job Description</label>
            <input type="text-area" className="form-control" name="job_desc" onChange={(e) => updateFormData(e)} required />
          </div>
          <div className="form-group col-md-6 m-3">
            <label name="inputPassword4">Category</label>
            <select id="inputState" name="category" onChange={(e) => updateFormData(e)} className="form-control">
              {categories.map((category, index) => { return (<option key={index}>{category.name}</option>) })}

            </select>
          </div>
        </div>
        <div className="form-group col-md-6 m-3">
          <label name="inputAddress">Province</label>
          <input type="text" className="form-control" id="inputAddress" name="province" onChange={(e) => updateFormData(e)} required />
        </div>
        <div className="form-group col-md-6 m-3">
          <label name="inputAddress2">City</label>
          <input type="text" className="form-control" id="inputAddress2" name="city" onChange={(e) => updateFormData(e)} required />
        </div>
        <div className="form-row ">
          <div className="form-group col-md-6 m-3">
            <label name="inputCity">Minimum Payment</label>
            <input type="text" className="form-control" id="inputCity" name="minimum_pay" onChange={(e) => updateFormData(e)} required />
          </div>

          <div className="form-group col-md-6 m-3">
            <label name="skills">Skills Required</label>
            <input type="text" className="form-control" name="skills" onChange={(e) => updateFormData(e)} required />
          </div>
          <div className="form-group col-md-4 m-3">
            <label name="inputState">Time Period From:</label>
            <input type="date" min={fromDate} className="form-control" id="inputCity" name="from" onChange={(e) => updateFormData(e)} required />
            <label name="inputState">To:</label>
            <input type="date" min={fromDate} className="form-control" id="inputCity" name="to" onChange={(e) => updateFormData(e)} required />
          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-primary m-3 ">Post Job</button>
        </div>
      </form>
    </div>
  )
}

export default Form