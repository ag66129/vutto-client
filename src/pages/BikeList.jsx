import { useEffect, useState } from 'react';
import API from '../services/api';
import BikeCard from '../components/BikeCard';
import { Container } from '@mui/material';

const BikeList = () => {
    const [bikes, setBikes] = useState([]);
    const [search, setSearch] = useState('');

    const fetchBikes = async () => {
        try {
            const res = await API.get(`/bikes?search=${search}`);
            setBikes(res.data);
        } catch (err) {
            console.error('Error fetching bikes:', err);
        }
    };

    useEffect(() => {
        fetchBikes();
    }, [search]);

    return (
        <Container>
            <h2>Used Bikes</h2>
            <input
                type="text"
                placeholder="Search by brand/model..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                {bikes.map(bike => (
                    <BikeCard key={bike.id} bike={bike} />
                ))}
            </div>
        </Container>
    );
};

export default BikeList;
