import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { useContext } from 'react';

// Pages
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import BikeList from './pages/BikeList.jsx';
import BikeDetail from './pages/BikeDetail.jsx';
import AddEditBike from './pages/AddEditBike.jsx';
import MyBikes from './pages/MyBikes.jsx';

// Components
import Navbar from './components/Navbar.jsx';
import { Grid } from '@mui/material';

// Protected route wrapper
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Grid>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/bikes" element={<BikeList />} />
            <Route path="/bikes/:id" element={<BikeDetail />} />

            <Route
              path="/add-bike"
              element={
                <PrivateRoute>
                  <AddEditBike />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit-bike/:id"
              element={
                <PrivateRoute>
                  <AddEditBike />
                </PrivateRoute>
              }
            />
            <Route
              path="/my-bikes"
              element={
                <PrivateRoute>
                  <MyBikes />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/bikes" />} />
          </Routes>
        </Grid>

      </Router>
    </AuthProvider>
  );
}

export default App;
