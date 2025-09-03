import { Link } from 'react-router-dom';

const BikeCard = ({ bike }) => {
    return (
        <div className="bike-card" style={styles.card}>
            <Link to={`/bikes/${bike.id}`} style={styles.link}>
                <img src={bike.imageUrl} alt={`${bike.brand} ${bike.model}`} style={styles.image} />
                <div style={styles.info}>
                    <h3>{bike.brand} {bike.model}</h3>
                    <p><strong>Year:</strong> {bike.year}</p>
                    <p><strong>Price:</strong> ₹{bike.price}</p>
                    <p><strong>KMs Driven:</strong> {bike.kilometers_driven}</p>
                    <p><strong>Location:</strong> {bike.location}</p>
                </div>
            </Link>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        marginBottom: '16px',
        width: '250px',
        backgroundColor: '#462828ff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '4px',
    },
    info: {
        marginTop: '10px',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }
};

export default BikeCard;
