import Navbar from 'react-bootstrap/Navbar';
function NavBar(param){
    return(
        <Navbar  bg="dark" variant="dark" className='d-flex justify-content-center'>
            <Navbar.Brand className="my-auto" href="#home">Kanbana</Navbar.Brand>
        </Navbar>
    );
}

export default NavBar;
