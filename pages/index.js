import Nav from "../components/Navbar"
import { setUserDeatails } from "../store/actions/userActions"
import { useSelector,useDispatch } from "react-redux"
const index = () => {
  const dispatch = useDispatch();

  dispatch(setUserDeatails({name:'shubaib'}))
  return (
    <div>
    homepage
    </div>
  )
}

export default index