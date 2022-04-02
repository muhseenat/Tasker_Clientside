import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import styles from '.././styles/Navbar.module.css'
import {useSelector,useDispatch} from 'react-redux';
import { setUserDetails } from '../store/actions/userActions';
import Link from 'next/link'

function AppBar() {
  const dispatch =useDispatch();
  const user =useSelector(state=>state.user.userData);

  const handleLogout=()=>{
    alert('its working')
    localStorage.clear();
    dispatch(setUserDetails(null))
    
  }
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
        <Link href='/login'><a className='btn btn-success'  style={{marginLeft:"10px"}} >Login</a></Link>

        
        </Nav>
        <Form className="d-flex justify-content-center">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="success" style={{marginRight:"10px"}}>Search</Button>
        </Form>
        <Form >
        {user ? <Button  onClick={handleLogout} variant="success" style={{marginLeft:"10px"}} >Logout</Button>:
        <Link href='/login'><a className='btn btn-success'  style={{marginLeft:"10px"}} >Login</a></Link>
        }

        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default AppBar