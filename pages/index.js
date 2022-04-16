import MainSection from "../components/MainSection"
import Category from "../components/Category"
import ApplyJob from "../components/ApplyJob"
import PostJob from "../components/PostJob"
import Footer from "../components/Footer"
import WorkFlow from "../components/WorkFlow"
import AppBar from "../components/Nav"
import { useState, useEffect } from 'react';
import axios from '../axios'
import { setJobDetails } from '../store/actions/jobAction'
import { useDispatch,useSelector } from 'react-redux'
import Taskers from "../components/Taskers"


const Index = () => {
  const [categories, setCategories] = useState([])
  const dispatch = useDispatch();
  const user = useSelector(state => state.user?.userData);

  useEffect(() => {

    axios.get('/admin/get/category').then((resp) => {
      console.log(resp);
      setCategories(resp?.data.slice(0, 4))
    }).catch(err => console.log(err))

    // axios.get(`/get/jobs`).then((res) => {
    //   dispatch(setJobDetails(res.data))
    //   localStorage.setItem('jobs', JSON.stringify(res.data))
    // }).catch((err) => {
    //   console.log(err);
    // })


  }, [user?._id])

  return (
    <>
      <AppBar />
      <MainSection />
      <Category categories={categories} button={true} />
      <ApplyJob />
      <WorkFlow />
      <PostJob />
      {/* <JobProviders /> */}
      <Taskers/>
      <Footer />
    </>
  )
}

export default Index