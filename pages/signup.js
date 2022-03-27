import {useState } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link'
import  loginStyles from '../styles/Login.module.css';
import Input from '../components/AuthInput';
import axios from '../axios'
import { useSelector } from 'react-redux';
const signup= () => {

    const [forminput,setFormInput] = useState({});
	const router=useRouter();
     const setInput=(e)=>{
         const key= e.target.name;
         const value=e.target.value;
         setFormInput({...forminput,[key]:value})

     }
	 const userDetails = useSelector(state=>state.user.userData)
	 console.log(userDetails)
	 const handleSignup= async(e)=>{
		 e.preventDefault()
		 console.log('working.....');
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
			 console.log(error);
		 }
	 }
	
	 
  return (
    <div>
     <h3 className={loginStyles.heading}>Signup Form </h3>
<div className={loginStyles.app}>
		<div className={loginStyles.bg}></div>
		<form className={loginStyles.loginform} onSubmit={handleSignup}>
			<header className={loginStyles.header}>
				<img className={loginStyles.image} src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80"/>
			
				</header>

			<div className={loginStyles.inputs}>
               <Input className={loginStyles.input}type={"text"} placeholder={"Username"} name={"name"} setInput={setInput}/>
<Input className={loginStyles.input} type={"email"} placeholder={"Email"} name={"email"} setInput={setInput}/>
<Input className={loginStyles.input} type={"tel"} placeholder={"Phone number"} name={"phone"} setInput={setInput}/>
<Input className={loginStyles.input} type={"password"} placeholder={"Password"} name={"password"} setInput={setInput}/>
<Input className={loginStyles.input} type={"password"} placeholder={"Confirm Password"} name={"cpassword"} setInput={setInput}/>


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