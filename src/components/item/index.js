import './styles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
  <div className="itemContainer">
    <Link to={`gif/${item.slug}`}>
      <img src={item.images.downsized.url} alt={item.title} />
    </Link>
  </div>
);

// Property types is what type we expect for each used data on this component
Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.shape({
      downsized: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Item;
