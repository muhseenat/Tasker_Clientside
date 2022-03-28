import Nav from "../components/Navbar"
import { setUserDeatails } from "../store/actions/userActions"
import { useSelector,useDispatch } from "react-redux"
const index = () => {
const user=useSelector(state=>state.user.userData)

  return (
    <div>
      <h1>{user?.name||""}</h1>
    homepage
    </div>
  )
}

export default index