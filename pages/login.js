import {useState } from 'react';
import  loginStyles from '../styles/Login.module.css';
import Input from '../components/AuthInput';

const login = () => {
    const [forminput,setFormInput] = useState({});
     const setInput=(e)=>{
         const key= e.target.name;
         const value=e.target.value;
         setFormInput({...forminput,[key]:value})
     }
  return (
    <div>
<h3 className={loginStyles.heading}>Login </h3>

<div className={loginStyles.app}>

		<div className={loginStyles.bg}></div>

		<form className={loginStyles.loginform}>
			<header className={loginStyles.header}>
				<img className={loginStyles.image} src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80"/>
			</header>

			<div className={loginStyles.inputs}>
               <Input className={loginStyles.input}  type={"email"} placeholder={"Email"} name={"email"} setInput={setInput}/>
               <Input className={loginStyles.input}  type={"password"} placeholder={"Password"} name={"password"} setInput={setInput}/>
        

			</div>

		</form>

		<footer className={loginStyles.footer}>
			<button className={loginStyles.button}>Login</button>
			<p className={loginStyles.para}> Don't have an account? <a className={loginStyles.a} href="#">Sign Up</a></p>
		</footer>


	</div>



    </div>
  )
}

export default login