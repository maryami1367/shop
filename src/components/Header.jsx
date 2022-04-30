
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Maincontext } from './../provider/Provider';
import { Link } from 'react-router-dom';

const Header = () => {
    const { factor } = useContext(Maincontext)
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    return (
        <header className='mx-2'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <div className="d-flex align-items-center">
                    <Link to="/product" className="navbar-brand mx-2" href="#">Mary Shop</Link>
                    <button className="btn btn-outline-secondary" onClick={() => navigate("/factor")}>Factor</button>
                    <p className="m-0 mx-2">{factor.length}</p>
                </div>
                <li className="nav-item d-flex">
                    <Link to="/product" className="nav-link active" aria-current="page">Home</Link>
                    <button className='btn btn-outline-primary' onClick={() => navigate("/login")}>Join us</button>
                </li>
            </nav>
        </header>
    );
}

export default Header;