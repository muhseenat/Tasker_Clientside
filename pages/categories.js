import React from 'react'
import Category from '../components/Category'
import AppBar from '../components/Nav'
import {useState,useEffect} from 'react';
import axios from '../axios'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
  
        axios.get('/admin/get/category').then((resp) => {
          console.log(resp);
          setCategories(resp?.data)
        }).catch(err => console.log(err))
      }, [])

  return (
<>
<AppBar/>
<Category categories={categories} button={false}/>


</>

    )
}

export default Categories