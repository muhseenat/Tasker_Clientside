import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import styles from '.././styles/Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router';

function AppBar() {
  const user = useSelector(state => state.user.userData);
  const [search,setSearch] = useState()
  const router = useRouter();
const onSearch=()=>{
   router.push(`/jobs?search=${search}`)
}

  return (
    <>
      <Navbar bg="light" style={{ margin: "0", boxShadow: "0px 2px 5px #777" }} text="white" expand="sm" sticky="top" >
        <Container>
          <Navbar.Brand href="#"><img className="logo" src="./logo.png" />TASKER</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link href='/'><a className='nav-link'>Home</a></Link>
              <Link href='/jobs'><a className='nav-link'>Jobs</a></Link>


            </Nav>
            <div className="d-flex justify-content-center">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>{setSearch(e.target.value)}} />
             
              <button className='btn btn-success' style={{ marginRight: "10px" }} onClick={()=>{onSearch()}}>Search</button>
            </div>
            <Form >
              {user ? <Link href='/profile'><a className='btn btn-success' >My Account</a></Link>
                :
                <Link href='/login'><a className='btn btn-success'>Login</a></Link>
              }

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>

        {
          `
      .btn-success{
        background: #231e39
        border: 1px solid #231e39;
        border-color:#243e7e;
        padding: 10px 25px;
        color: #231e39;
        border-radius:15px;
        font-family: Montserrat, sans-serif;
        cursor: pointer;
        margin-left: 10px;
        background: transparent;
        color: #231e39;
      }
    
       .btn-success:hover{
        color: #fff;
        background: #231e39;
        transition: .5s;
        background:rgb(102,102,214);
        color:white;
        border:none;
        outline:none;
        transition:all 0.4s
      }
      
      `
        }
      </style>
    </>
  )
}

export default AppBar