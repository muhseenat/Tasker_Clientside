import { useState } from "react";
import Input from "../components/AuthInput";

const auth = () => {
  const [forminput, setFormInput] = useState({})
  const setInput = (e) => {
    const key = e.target.name
    const value = e.target.value
    setFormInput({ ...forminput, [key]: value })
  }


  return (
    <div>

      <Input type={"text"} placeholder={"Enter the name"} name={"user"} setInput={setInput} />
      <Input type={"email"} placeholder={"Enter the email"} name={"email"} setInput={setInput} />
      <Input type={"tel"} placeholder={"Enter the phone"} name={"phone"} setInput={setInput} />
      <Input type={"password"} placeholder={"Enter the password"} name={"password"} setInput={setInput} />
      <Input type={"password"} placeholder={"Confirm Password"} name={"cpassword"} setInput={setInput} />

    </div>
  )
}

export default auth