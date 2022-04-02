import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import styles from '.././styles/Navbar.module.css'
import {useSelector,useDispatch} from 'react-redux';
import Link from 'next/link'

function AppBar() {
  const user =useSelector(state=>state.user.userData);


  return (
    <>
    <Navbar bg="light" style={{margin: "0"}}  text="white" expand="sm" sticky="top" >
    <Container>
      <Navbar.Brand href="#">Tasker</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link href='/'><Nav.Link>Home</Nav.Link></Link>
          <Link href='/jobs'><Nav.Link>Jobs</Nav.Link></Link>

        
        </Nav>
        <Form className="d-flex justify-content-center">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <a className='btn btn-success' style={{marginRight:"10px"}}>Search</a>
        </Form>
        <Form >
        {user ?<Link href='/profile'><a className='btn btn-success' >My Account</a></Link>
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
        background: #03bfbc;
        border: 1px solid #03bfbc;
        padding: 10px 25px;
        color: #231e39;
        border-radius:15px;
        font-family: Montserrat, sans-serif;
        cursor: pointer;
        margin-left: 10px;
        background: transparent;
        color: #02899c;
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