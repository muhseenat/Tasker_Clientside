import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import loginStyles from '../styles/Login.module.css';
import { Snackbar, Stack, Button, MuiAlert } from '@mui/material';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/actions/userActions'
import { ToastContainer, toast } from 'react-toastify';




const login = () => {

  ;


  const dispatch = useDispatch()
  // form validation rules 
  const validationSchema = Yup.object().shape({


    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const router = useRouter();
  const [loginError, setLoginError] = useState("")

  const onSubmit = async (data) => {
    console.log('working.....');
    try {
      const res = await axios.post('/login', data)
      console.log(res);
      if (res) {
        dispatch(setUserDetails(res.data))

        localStorage.setItem("user", JSON.stringify(res.data))
        toast.success('Login Succesfull');
        setTimeout(() => {
          router.push({
            pathname: '/',
            query: { returnUrl: router.asPath }
          })
        }, 2000)
      }
    } catch (error) {
      console.log(error.response)
      console.log(error);
      setLoginError(error.response?.data?.err)
      toast.error('Email or Password invalid', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
  }

  return (
    <>



      <div>
        <ToastContainer />
        <h3 className={loginStyles.heading}>Login </h3>

        <div className={loginStyles.app}>

          <div className={loginStyles.bg}></div>

          <form className={loginStyles.loginform} onSubmit={handleSubmit(onSubmit)}>
            <header className={loginStyles.header}>
              <img className={loginStyles.image} src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80" />
            </header>
            <div className="form-group col">
              <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Enter the email" />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="form-group col">
              <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Password  " />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="form-group">
              {/* {loginError && <p className={loginStyles.error}>{loginError}</p>} */}

              <div className='button'><button className={loginStyles.button} type="submit">Login</button></div>
              <p className={loginStyles.para}>Don't have an account?
                <Link href="/signup"><a className={loginStyles.a} >Signup</a></Link></p>

            </div>

          </form>


        </div>
        <style jsx>
          {
            `#footer{
                   margin-top:100px
               }
               #inputs{
                margin-top:1px  
               }
               .form-group{
                margin-top:1px  
                
               }
               .button{
                   margin-top:100px
               }
               @media screen and (max-width: 640px) {
                #footer{
                    margin-top:150px
                }
               }`
          }
        </style>


      </div>
    </>
  )
}

export default login