import { useEffect, useState } from 'react';
import API from '../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container } from '@mui/material';

const MyBikes = () => {
  const navigate = useNavigate();
  const [bikes, setBikes] = useState([]);

  const fetchMyBikes = async () => {
    try {
      const res = await API.get('/bikes');
      const tokenData = JSON.parse(atob(localStorage.getItem('token').split('.')[1])); // decode JWT
      const userId = tokenData.id;

      const myBikes = res.data.filter(bike => bike.sellerId === userId);
      setBikes(myBikes);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/bikes/${id}`);
      fetchMyBikes();
    } catch (err) {
      alert("Failed to delete bike.");
    }
  };

  useEffect(() => {
    fetchMyBikes();
  }, []);

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between', height: "2.5rem" }}>
        <h2 >My Bike Listings</h2>
        <Button size='small' variant="contained" color='success' onClick={() => navigate(`/add-bike`)}>Sell Bike</Button>
      </div>
      {bikes.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', marginTop: '2rem' }}>
          {bikes.map(bike => (
            <li key={bike.id}>
              <h3>{bike.brand} {bike.model}</h3>
              <img src={bike.imageUrl} alt="bike" width="150" />
              <p>₹{bike.price} - {bike.kilometers_driven} km</p>
              <Button variant="contained" onClick={() => navigate(`/edit-bike/${bike.id}`)}>Edit</Button>
              <Button style={{ marginLeft: 10 }} variant="contained" color='error' onClick={() => handleDelete(bike.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default MyBikes;
