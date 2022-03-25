import  loginStyles from '../styles/Login.module.css'

const login = () => {
  return (
    <div>

<div className={loginStyles.app}>

		<div className={loginStyles.bg}></div>

		<form className={loginStyles.loginform}>
			<header className={loginStyles.header}>
				<img className={loginStyles.image} src="https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80"/>
			</header>

			<div className={loginStyles.inputs}>
				<input className={loginStyles.input} type="text" name="" placeholder="username or email"/>
				<input  className={loginStyles.input} type="password" name="" placeholder="password"/>

			</div>

		</form>

		<footer className={loginStyles.footer}>
			<button className={loginStyles.button}>Continue</button>
			<p className={loginStyles.para}> Don't have an account? <a className={loginStyles.a} href="#">Sign Up</a></p>
		</footer>


	</div>



    </div>
  )
}

export default login