import './styles.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// This component find a gif by using the current parameter in the URL
// and return datas about this gif
const Details = () => {
  // Store url parameter
  const { slug } = useParams();
  // Store API results
  const data = useSelector((state) => state.gifsData.data);
  // Find the gif that matches the parameter
  const item = data.find((gif) => gif.slug === slug);
  return (
    <div className="detailsContainer">
      <h1>{item.title}</h1>
      <img src={item.images.downsized.url} alt={item.title} />
      <Link to="/">Retourner à la liste</Link>
    </div>
  );
};

export default Details;
