import './styles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
  // use of ternaries in this component to inform the user if one of the data is unknown
  <div className="itemContainer">
    <h1>Titre: {item.title === '' ? 'inconnu' : item.title}</h1>
    <h1>Auteur: {item.username === '' ? 'inconnu' : item.username}</h1>
    <p>Date de parution: {item.import_datetime === '1970-01-01 00:00:00' ? 'inconnu' : item.import_datetime}</p>
    <Link to={`gif/${item.slug}`}><img src={item.images.downsized.url} alt={item.title} /></Link>
  </div>
);

// Property types is what type we expect for each used data on this component
Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    import_datetime: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.shape({
      downsized: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Item;
