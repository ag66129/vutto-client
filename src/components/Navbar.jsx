import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
      <Container maxWidth={false} style={{position: 'fixed', top: 0, margin: '1rem'}}>
          <nav style={{border: '1px dashed grey', borderRadius: "10px", height: "50px",  alignContent: 'center'}}>
            <Link style={{padding: "10px"}} to="/bikes">Home</Link>
            {user ? (
              <>
                <Link  style={{padding: "10px"}} to="/my-bikes">My Listings</Link>
                <Link style={{padding: "10px"}} to="/add-bike">Add Bike</Link>
                <button style={{float: 'right', marginRight: "10px"}} onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <Link style={{padding: "10px"}} to="/login">Login</Link>
                <Link style={{padding: "10px"}} to="/register">Register</Link>
              </>
            )}
          </nav>
      </Container>

  );
};

export default Navbar;
