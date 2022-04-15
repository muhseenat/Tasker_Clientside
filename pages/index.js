import MainSection from "../components/MainSection"
import Category from "../components/Category"
import ApplyJob from "../components/ApplyJob"
import PostJob from "../components/PostJob"
import JobProviders from "../components/JobProviders"
import Footer from "../components/Footer"
import WorkFlow from "../components/WorkFlow"
import AppBar from "../components/Nav"
import {useState,useEffect} from 'react';
import axios from '../axios'
const index = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {

      axios.get('/admin/get/category').then((resp) => {
        console.log(resp);
        setCategories(resp?.data.slice(0,4))
      }).catch(err => console.log(err))
    }, [])

  return (
    <>
      <AppBar />
      <MainSection />
      <Category  categories={categories} button={true}/>
      <ApplyJob />
      <WorkFlow />
      <PostJob />
      <JobProviders />
      <Footer />
    </>
  )
}

export default index