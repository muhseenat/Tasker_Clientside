import { useSelector,useDispatch } from "react-redux"
import MainSection from "../components/MainSection"
import Category from "../components/Category"
import ApplyJob from "../components/ApplyJob"
import PostJob from "../components/PostJob"
import JobProviders from "../components/JobProviders"
import Footer from "../components/Footer"
import WorkFlow from "../components/WorkFlow"
import AppBar from "../components/Nav"
import { useEffect } from "react"
import {testData } from "../store/actions/userActions"

const index = () => {

  return (
    <>

      <AppBar/>
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