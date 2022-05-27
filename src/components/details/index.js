import './styles.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// This component find a gif by using the current parameter in the URL
// and return datas about this gif
// use ternaries in this component to inform the user if one of the data is unknown
const Details = () => {
  // Store url parameter
  const { slug } = useParams();
  // Store API results
  const data = useSelector((state) => state.gifsData.data);
  // Find the gif that matches the parameter
  const item = data.find((gif) => gif.slug === slug);
  return (
    <div className="detailsContainer">
      <h1>Titre: {item.title === '' ? 'inconnu' : item.title}</h1>
      <h1>Auteur: {item.username === '' ? 'inconnu' : item.username}</h1>
      <p>Date de parution: {item.import_datetime === '1970-01-01 00:00:00' ? 'inconnu' : item.import_datetime}</p>
      <img src={item.images.downsized.url} alt={item.title} />
      <Link to="/">Retourner à la liste</Link>
    </div>
  );
};

export default Details;
