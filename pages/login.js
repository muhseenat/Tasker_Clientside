import {useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Link from 'next/link'
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import  loginStyles from '../styles/Login.module.css';
import axios from '../axios';

const login = () => {
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

    // const onSubmit = data => console.log(data);
    const onSubmit = async(data)=>{
		 console.log('working.....');
		 try {
			 const res=await axios.post('/signup',data)
			 console.log(res);
			 if(res){
				 router.push({
					 pathname:'/',
					 query:{returnUrl:router.asPath}
				 })
			 }
		 } catch (error) {
			 console.log(error);
		 }
	 }

  return (
    <div>
<h3 className={loginStyles.heading}>Login </h3>

<div className={loginStyles.app}>

		<div className={loginStyles.bg}></div>

		<form className={loginStyles.loginform}  onSubmit={handleSubmit(onSubmit)}>
			<header className={loginStyles.header}>
				<img className={loginStyles.image} src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80"/>
			</header>        
            <div className="form-group col">
                            <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}  placeholder="Enter the email"/>
                            <div className="invalid-feedback">{errors.email?.message}</div>
             </div>
             <div className="form-group col">
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`}  placeholder="Password  "/>
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
            <div className="form-group">
            <button className={loginStyles.button} type="submit">Login</button>
			<p className={loginStyles.para}>Don't have an account?
            <Link href="/login"><a className={loginStyles.a} >Signup</a></Link></p>
                        {/* <button type="submit" className="btn btn-primary mr-1">Register</button>
                        <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button> */}
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
               @media screen and (max-width: 640px) {
                #footer{
                    margin-top:150px
                }
               }`
           }
    </style>


    </div>
  )
}

export default login