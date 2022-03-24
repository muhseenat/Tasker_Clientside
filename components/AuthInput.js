

const AuthInput = ({setInput,type,placeholder,name}) => {

  return (
    <div className="fform-controoool">
        <input type={type} placeholder={placeholder} name={name} onChange={(e)=>setInput(e)}/>
    </div>
  )
}

export default AuthInput