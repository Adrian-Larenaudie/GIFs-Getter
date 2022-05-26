import './styles.scss';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  console.log(item);
  return (
    <div className="itemContainer">
      <h1>Titre: {item.title === '' ? 'inconnu' : item.title}</h1>
      <h1>Auteur: {item.username === '' ? 'inconnu' : item.username}</h1>
      <p>Date de parution: {item.import_datetime === '1970-01-01 00:00:00' ? 'inconnu' : item.import_datetime}</p>
      <img src={item.images.downsized.url} alt={item.title} />
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    import_datetime: PropTypes.string.isRequired,
    images: PropTypes.shape({
      downsized: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Item;
