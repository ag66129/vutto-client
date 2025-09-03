import { useState, useContext } from 'react';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/auth/login', form);
    login(res.data.token, form.email);
    navigate('/bikes')
  };

  return (
    <Container style={{justifyItems: 'center'}}>
      <h1>Hey, Welcome to Vutto</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input style={styles.input} placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input style={styles.input} placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button style={styles.button} type="submit">Login</button>
    </form>
    </Container>
  );
};

export default Login;

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '300px',
    margin: '0 auto',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};