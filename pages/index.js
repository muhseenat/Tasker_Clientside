import Nav from "../components/Navbar"
import { setUserDeatails } from "../store/actions/userActions"
import { useSelector,useDispatch } from "react-redux"
import MainSection from "../components/MainSection"
import Category from "../components/Category"
import ApplyJob from "../components/ApplyJob"
import PostJob from "../components/PostJob"
import JobProviders from "../components/JobProviders"
import Footer from "../components/Footer"
import WorkFlow from "../components/WorkFlow"
const index = () => {
// const user=useSelector(state=>state.user.userData)

  return (
    <>
      {/* <h1>{user?.name||""}</h1> */}
    <MainSection/>
    <Category/>
    <ApplyJob/>
    <WorkFlow/>
    <PostJob/>

    <JobProviders/>
    <Footer/>
    </>
  )
}

export default index