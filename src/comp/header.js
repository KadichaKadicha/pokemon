import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header className="  d-block p-2   text-white ">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link className="navbar-brand text-white display-1 sizeMy"  to="/" >PIKA
                    </Link>
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link mr-2" to="/"> Home</Link>
                    </div>
                </nav>
                <div>
                </div>

            </div>
        </header>
    );
};
export default Header;