
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../services/api';
import { Button, Container, TextField } from '@mui/material';

const AddEditBike = () => {
  const [bike, setBike] = useState({
    brand: '', model: '', year: '', price: '', kilometers_driven: '', location: '', imageUrl: ''
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      API.get(`/bikes/${id}`).then(res => setBike(res.data));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    id ? await API.put(`/bikes/${id}`, bike) : await API.post('/bikes', bike);
    navigate('/my-bikes');
  };

  return (
    <Container style={{ padding: 5, background: 'grey' }}>
      <form onSubmit={handleSubmit}>
        <TextField variant="outlined" placeholder="Brand" value={bike.brand} onChange={e => setBike({ ...bike, brand: e.target.value })} />
        <TextField variant="outlined" placeholder="Model" value={bike.model} onChange={e => setBike({ ...bike, model: e.target.value })} />
        <TextField variant="outlined" placeholder="Year" value={bike.year} onChange={e => setBike({ ...bike, year: e.target.value })} />
        <TextField variant="outlined" placeholder="Price" value={bike.price} onChange={e => setBike({ ...bike, price: e.target.value })} />
        <TextField variant="outlined" placeholder="KM Driven" value={bike.kilometers_driven} onChange={e => setBike({ ...bike, kilometers_driven: e.target.value })} />
        <TextField variant="outlined" placeholder="Location" value={bike.location} onChange={e => setBike({ ...bike, location: e.target.value })} />
        <TextField variant="outlined" placeholder="Image URL" value={bike.imageUrl} onChange={e => setBike({ ...bike, imageUrl: e.target.value })} />
        <Button variant='contained' type="submit">{id ? 'Update' : 'Add'} Bike</Button>
      </form>

    </Container>
  );
};

export default AddEditBike;
