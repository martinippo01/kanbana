function NavBar(param){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{backgroundColor: param.color}}>
        <div className="container-fluid d-flow justify-content-center">
            <a className="navbar-brand" href="#">Kanbana</a>
        </div>
        </nav>
    );
}

export default NavBar;
