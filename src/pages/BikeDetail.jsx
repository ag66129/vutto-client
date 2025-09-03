import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api';
import { Container } from '@mui/material';

const BikeDetail = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    API.get(`/bikes/${id}`).then(res => setBike(res.data));
  }, [id]);

  if (!bike) return <p>Loading...</p>;

  return (
    <Container>
      <h2>{bike.brand} {bike.model}</h2>
      <img src={bike.imageUrl} alt="bike" width="300" />
      <p>Year: {bike.year}</p>
      <p>Price: ₹{bike.price}</p>
      <p>KMs Driven: {bike.kilometers_driven}</p>
      <p>Location: {bike.location}</p>
    </Container>
  );
};

export default BikeDetail;
