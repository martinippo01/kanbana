import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return(
        <Navbar bg="dark" variant="dark" className='d-flex justify-content-center'>
            <Navbar.Brand className="my-auto" href="/">
                <img
                    src="/logo.png"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Kanbana"
                />
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavBar;
