import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (token && email) {
      setUser({ email });
    }
  }, []);

  const login = (token, email) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    setUser({ email });
    // navigate('/bikes');
  };

  const register = async (formData) => {
    try {
      const res = await API.post('/auth/register', formData);
      const token = res.data.token;
      login(token, formData.email); // Automatically logs in after register
    } catch (err) {
      throw err; // Let the component catch and display the error
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    // navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
