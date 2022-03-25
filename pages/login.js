import {useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import  loginStyles from '../styles/Login.module.css';
import Input from '../components/AuthInput';
import axios from '../axios';

const login = () => {
    const router=useRouter()
    const [forminput,setFormInput] = useState({});
     const setInput=(e)=>{
         const key= e.target.name;
         const value=e.target.value;
         setFormInput({...forminput,[key]:value})
     }
   console.log(forminput);
  const handleLogin=async(e)=>{
    console.log('not working....');
      e.preventDefault();
      try {
          console.log(forminput);
         const res = await axios.post('/login',forminput);
         if(res){
            router.push('/')
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

		<form className={loginStyles.loginform} onSubmit={handleLogin}>
			<header className={loginStyles.header}>
				<img className={loginStyles.image} src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80"/>
			</header>

			<div id='inputs' className={loginStyles.inputs}>
               <Input className={loginStyles.input}  type={"email"} placeholder={"Email"} name={"email"} setInput={setInput}/>
               <Input className={loginStyles.input}  type={"password"} placeholder={"Password"} name={"password"} setInput={setInput}/>
        

			</div>
	
			<button  id='footer' className={loginStyles.button} type="submit">Login</button>
			<p className={loginStyles.para}> Don't have an account? 
            <Link href="/signup"><a className={loginStyles.a} >Signup</a></Link></p>

		</form>


	</div>
    <style jsx>
           {
               `#footer{
                   margin-top:100px
               }
               #inputs{
                margin-top:1px  
               }`
           }
    </style>


    </div>
  )
}

export default login