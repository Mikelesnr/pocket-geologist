import { Navbar, Nav,Container,NavDropdown} from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    function Logout() {
    localStorage.clear();
    navigate("/login")
    }
    
    let user=JSON.parse(localStorage.getItem('user-info'));
    //displays add mineral and update mineral for admin
    let admin=false
    if (user){
        if(user.type === "admin"){
            admin=true
        }
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="danger">
      <Container>
        <Navbar.Brand><Link className='brand-link' to="/">Pkt-Geologist</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar-wrapper">
            <Nav.Link>
                <Link to="/">Home</Link>
            </Nav.Link>
            
            <Nav.Link>
                <Link to="/info">Information</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/contact">Contact Us</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/about">About Me</Link>
            </Nav.Link>
            {
                localStorage.getItem('user-info') && admin?
                <>
                <Nav.Link>
                <Link to="/all">All Minerals</Link>
                </Nav.Link>
                <NavDropdown title="Update Minerals">
                    <NavDropdown.Item><Link to="/add">Add Mineral</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/update">Update Mineral</Link></NavDropdown.Item>
                </NavDropdown>
                </>:
                <>
                </>
            }
             {
                localStorage.getItem('user-info') && !admin?
                <>
                <Nav.Link>
                <Link to="/all">All Minerals</Link>
            </Nav.Link>
                </>:
                <>
                </>
            }
            
          </Nav>
          <Nav className='navbar-wrapper'>
            {
                localStorage.getItem('user-info') ?
                <>
                <NavDropdown title={user && user.name}>
                    <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                </NavDropdown>
                </>:
                <>
            <Nav.Link>
                <Link to="/login">login</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/register">Register</Link>
            </Nav.Link>
            </>
}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
};

export default Header