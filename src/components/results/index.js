import { useSelector } from 'react-redux';
import Item from '../item';
import './styles.scss';

// A map to display <Item /> component as many times as there are results
// Pass current index data into the Item component
const Results = () => {
  const data = useSelector((state) => state.gifsData.data);
  return (
    <div className="resultsContainer">
      <h1>Résultats de recherche</h1>
      {data.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Results;
