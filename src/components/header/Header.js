import React from 'react';

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#link0">Meal DB</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#link1">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#link1">Today's Offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#link1">Our Recommendation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#link2">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex flex-fill mx-5">
                            <input onChange={props.handleSearch} className="form-control me-2" type="search" placeholder="Type The Food Name" aria-label="Search"></input>
                            <button className ="btn btn-warning" type ="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;