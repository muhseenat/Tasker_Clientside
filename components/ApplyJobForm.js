import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../axios'
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import swal from 'sweetalert';



const ApplyJobForm = () => {
  const user = useSelector(state => state.user?.userData);
  useEffect(() => {

  })
  const router = useRouter();
  const { id } = router.query

  // const formData = {
  //   user_id: user?._id,
  //   provider_id: jobDetails[0]?.user_id,
  //   job_name: jobDetails[0]?.job_designation,
  //   province: jobDetails[0]?.province,
  //   city: jobDetails[0]?.city,
  //   pay: jobDetails[0]?.minimum_pay,
  //   expiry_date: jobDetails[0]?.to,
  //   job_id: id,
  //   name: "",
  //   place: "",
  //   email: "",
  //   qualification: "",
  //   skill: "",
  //   experience: ""
  // }
  // const [data, setData] = useState(formData)




  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    place: Yup.string()
      .required('Place is required'),

    qualification: Yup.string()
      .required('Qualification is required'),
    skill: Yup.string()
      .required('Skill  is required'),
    experience: Yup.string()
      .required('Experience  is required'),
  })
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const onSubmit = (data) => {

    data = {
      ...data,
      user_id: user?._id,
      // provider_id: jobDetails[0]?.user_id,
      // job_name: jobDetails[0]?.job_designation,
      // province: jobDetails[0]?.province,
      // city: jobDetails[0]?.city,
      // pay: jobDetails[0]?.minimum_pay,
      // expiry_date: jobDetails[0]?.to,
      job_id: id,

    }
    axios.post('/apply/job', data).then((res) => {
      swal({
        title: "Success",
        text: "You Successfully applied the job",
        icon: "success",
        button: "OK",
      });
      router.push('/jobs')


    }).catch(err => console.log(err))
  }
  useEffect(() => {


    if (!user) {
      if (typeof window !== undefined) {

        router.push('/login')
        return false;
      }
    }
  }, [])


  if (!id) {
    return null;
  }
  return (
    <div>

      <div className="container">
        <ToastContainer />
        <form id="contact" action="" method="post" onSubmit={handleSubmit(onSubmit)}>
          <h3>Apply Form</h3>
          <fieldset>
            <input placeholder="Your Name" type="text" tabIndex="1" {...register('name')} autoFocus />
            <p className='red'>{errors.name?.message}</p>
          </fieldset>
          <fieldset>
            <input placeholder="Your Place" type="text" tabIndex="2"  {...register('place')} />
            <p className='red'>{errors.place?.message}</p>

          </fieldset>
          <fieldset>
            <input placeholder="Your Email" type="email"  {...register('email')} tabIndex="3" />
            <p className='red'>{errors.email?.message}</p>

          </fieldset>
          <fieldset>

            <input placeholder="Your Qualification" type="text"  {...register('qualification')} tabIndex="4" />
            <p className='red'>{errors.qualification?.message}</p>

          </fieldset>
          <fieldset>
            <input placeholder="Skills" type="text" tabIndex="4"  {...register('skill')} />
            <p className='red'>{errors.skill?.message}</p>

          </fieldset>
          <fieldset>
            <textarea placeholder="Any Experience" tabIndex="5"  {...register('experience')} ></textarea>
            <p className='red'>{errors.experience?.message}</p>

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




