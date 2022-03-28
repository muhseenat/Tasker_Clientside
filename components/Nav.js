import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import styles from '.././styles/Navbar.module.css'
function AppBar() {
  return (
    <>
    <Navbar bg="primary" style={{margin: "0"}}  text="white" expand="sm" sticky="top" >
    <Container>
      <Navbar.Brand href="#">Tasker</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Jobs</Nav.Link>
          {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
          {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
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
        <Button variant="success" style={{marginLeft:"10px"}} >Login</Button>

        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar></>
  )
}

export default AppBar