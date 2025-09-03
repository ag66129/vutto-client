import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    // <AppBar position="static">
      <Container maxWidth={false} style={{justifyContent: 'flex-start'}}>
          <nav>
            <Link style={{padding: "10px"}} to="/bikes">Home</Link>
            {user ? (
              <>
                <Link  style={{padding: "10px"}} to="/my-bikes">My Listings</Link>
                <Link style={{padding: "10px"}} to="/add-bike">Add Bike</Link>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <Link style={{padding: "10px"}} to="/login">Login</Link>
                <Link style={{padding: "10px"}} to="/register">Register</Link>
              </>
            )}
          </nav>
      </Container>
    // </AppBar>

  );
};

export default Navbar;
