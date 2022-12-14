import { Navbar, Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header() {
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
                localStorage.getItem('user-info') ?
                <>
                <Nav.Link>
                <Link to="/add">Add Mineral</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/update">Update Mineral</Link>
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
                <Nav.Link>
                    <Link to="/Logout">logout</Link>
                </Nav.Link>
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