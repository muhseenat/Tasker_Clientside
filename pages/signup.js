import {useState } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import  loginStyles from '../styles/Login.module.css';
import Input from '../components/AuthInput';
import axios from '../axios'
import { useSelector } from 'react-redux';
const signup= () => {
  
   
	 const validationSchema=Yup.object().shape({
		name: Yup.string()
		.required('Name is required'),
		email:Yup.string()
           .required('Email is required')
           .email('Email is invalid'),
        password:Yup.string()
             .min(6,'Password must be atleast 6 characters')
             .required('Password is required') ,
	    confirmPassword: Yup.string()
			 .oneOf([Yup.ref('password'), null], 'Passwords must match')
			 .required('Confirm Password is required'),	   
    })
	//  const userDetails = useSelector(state=>state.user.userData)
	//  console.log(userDetails)
    const formOptions = { resolver: yupResolver(validationSchema) };

	const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;


	const [signupError,setSignupError]= useState("")

	 const onSubmit= async(data)=>{
		 try {
			 const res=await axios.post('/signup',forminput)
			 console.log(res);
			 if(res){
				 router.push({
					 pathname:'/',
					 query:{returnUrl:router.asPath}
				 })
			 }
		 } catch (error) {
         setSignupError(error.response?.errorMessage)
		}
	 }
	
	 
  return (
    <div>
     <h3 className={loginStyles.heading}>Signup Form </h3>
<div className={loginStyles.app}>
		<div className={loginStyles.bg}></div>
		<form className={loginStyles.loginform} onSubmit={handleSubmit(onSubmit)}>
			<header className={loginStyles.header}>
				<img className={loginStyles.image} src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80"/>
			
				</header>

			<div className={loginStyles.inputs}>
			<div className="form-group col">
                            <input name="name" type="text" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Enter Username" />
                            <div className="invalid-feedback">{errors.name?.message}</div>
                        </div>
						<div className="form-group col">
                            <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Enter Email"/>
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
						<div className="form-group col">
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Password"/>
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="form-group col">
                            <input name="cPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} placeholder="Confirm Password"/>
                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                        </div>
               


			</div>


	   {signupError&&<p className={loginStyles.error}>{ signupError}</p>}
			<button className={loginStyles.button} type="submit">Signup</button>
			<p className={loginStyles.para}> Already have an account?
            <Link href="/login"><a className={loginStyles.a} >Login</a></Link></p>
	
		</form>


	</div>



    </div>
  )
}

export default signup