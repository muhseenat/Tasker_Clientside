import Nav from "../components/Navbar"
import { setUserDeatails } from "../store/actions/userActions"
import { useSelector,useDispatch } from "react-redux"
import MainSection from "../components/MainSection"
import Category from "../components/Category"
import ApplyJob from "../components/ApplyJob"
import PostJob from "../components/PostJob"
const index = () => {
// const user=useSelector(state=>state.user.userData)

  return (
    <>
      {/* <h1>{user?.name||""}</h1> */}
    <MainSection/>
    <Category/>
    <ApplyJob/>
    <PostJob/>
    </>
  )
}

export default index