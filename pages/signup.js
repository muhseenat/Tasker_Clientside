import {useState } from 'react';
import  loginStyles from '../styles/Login.module.css';
import Input from '../components/AuthInput';

const signup= () => {

	const user=false;
    const [forminput,setFormInput] = useState({});
     const setInput=(e)=>{
         const key= e.target.name;
         const value=e.target.value;
         setFormInput({...forminput,[key]:value})

     }
  return (
    <div>

<div className={loginStyles.app}>

		<div className={loginStyles.bg}></div>

		<form className={loginStyles.loginform}>
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

		</form>

		<footer className={loginStyles.footer}>
			<button className={loginStyles.button}>Signup</button>
			<p className={loginStyles.para}> Already have an account? <a className={loginStyles.a} href="#">Login</a></p>
		</footer>


	</div>



    </div>
  )
}

export default signup