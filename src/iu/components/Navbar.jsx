
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    


    const handleLogout = () => {

        logout();

        navigate('/login', {
            replace:true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        style={({isActive}) => isActive ? {color:'#F4BD1D'} : {}}
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active':''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        style={({isActive}) => isActive ? {color:'#F4BD1D'} : {}}
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active':''}` } 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        style={({isActive}) => isActive ? {color:'#F4BD1D'} : {}}
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active':''}` } 
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {user?.name}
                    </span>
                    <button onClick={handleLogout} className='nav-item nav-link btn'>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}