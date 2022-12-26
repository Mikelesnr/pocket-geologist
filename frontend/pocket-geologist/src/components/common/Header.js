import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    function Logout() {
        localStorage.clear();
        navigate("/")
    }

    let user = JSON.parse(localStorage.getItem('user-info'));
    //displays add mineral and update mineral for admin
    let admin = false
    if (user) {
        if (user.type === "admin") {
            admin = true
        }
    }

    return (
        <div className='position-fixed'>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="danger">
                <Container>
                    <Navbar.Brand><Link className='brand-link' to="/">Pkt-Geologist</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbar-wrapper">
                            {
                                localStorage.getItem('user-info') ?
                                    <>
                                        <Nav.Link>
                                            <Link to="/">Home</Link>
                                        </Nav.Link>
                                    </> :
                                    <></>
                            }
                            <Nav.Link>
                                <Link to="/all">All Minerals</Link>
                            </Nav.Link>
                            {
                                localStorage.getItem('user-info') ?
                                    <>
                                        <Nav.Link>
                                            <Link to="/info">Information</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/contact">Contact Us</Link>
                                        </Nav.Link>
                                        <NavDropdown title="Search">
                                            <NavDropdown.Item><Link to="/searchK">Keyword Search</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link to="/searchP">Property Search</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link to="/weather">Weather Search</Link></NavDropdown.Item>
                                        </NavDropdown>
                                    </> :
                                    <></>
                            }
                            {
                                localStorage.getItem('user-info') && admin ?
                                    <>
                                        <NavDropdown title="Update Minerals">
                                            <NavDropdown.Item><Link to="/add">Add Mineral</Link></NavDropdown.Item>
                                            <NavDropdown.Item><Link to="/delete">Update Delete</Link></NavDropdown.Item>
                                        </NavDropdown>
                                    </> :
                                    <>
                                    </>
                            }

                        </Nav>
                        <Nav className='navbar-wrapper'>
                            {
                                localStorage.getItem('user-info') ?
                                    <>
                                        <Nav.Link>
                                            <Link to="/about">About Me</Link>
                                        </Nav.Link>
                                        <NavDropdown title={user && user.name}>
                                            <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </> :
                                    <>
                                        <Nav.Link>
                                            <Link to="/login">login</Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to="/register">Signup</Link>
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