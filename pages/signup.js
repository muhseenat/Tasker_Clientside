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
        email:Yup.string()
           .required('Email is required')
           .email('Email is invalid'),
        password:Yup.string()
             .min(6,'Password must be atleast 6 characters')
             .required('Password is required')   
    })
	//  const userDetails = useSelector(state=>state.user.userData)
	//  console.log(userDetails)

	const {register,handleSubmit,errors}=useForm({
		resolver: yupResolver(validationSchema)
	});

	const onSubmit=(data)=>console.log(data);

	//  const handleSignup= async(e)=>{
	// 	 e.preventDefault()
	// 	 console.log('working.....');
	// 	 try {
	// 		 const res=await axios.post('/signup',forminput)
	// 		 console.log(res);
	// 		 if(res){
	// 			 router.push({
	// 				 pathname:'/',
	// 				 query:{returnUrl:router.asPath}
	// 			 })
	// 		 }
	// 	 } catch (error) {
	// 		 console.log(error);
	// 	 }
	//  }
	
	 
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
               {/* <Input className={loginStyles.input}  {...register('name')} type={"text"} placeholder={"Username"} name={"name"} setInput={setInput}/> */}
<Input className={loginStyles.input} type={"email"} placeholder={"Email"}  {...register('email')}  name={"email"} />
{/* <Input className={loginStyles.input} type={"tel"} placeholder={"Phone number"}  {...register('phone')} name={"phone"} setInput={setInput}/> */}
<Input className={loginStyles.input} type={"password"} placeholder={"Password"} name={"password"}  {...register('password')} />
{/* <Input className={loginStyles.input} type={"password"} placeholder={"Confirm Password"} name={"cpassword"}  {...register('cpassword')} setInput={setInput}/> */}
<div className={loginStyles.errors}>{errors?.password?.message}</div>


			</div>


	
			<button className={loginStyles.button} type="submit">Signup</button>
			<p className={loginStyles.para}> Already have an account?
            <Link href="/login"><a className={loginStyles.a} >Login</a></Link></p>
	
		</form>


	</div>



    </div>
  )
}

export default signup