import './styles.scss';
import { useSelector } from 'react-redux';
import Form from '../form';
import Results from '../results';
import Loader from '../loader';

const Home = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const data = useSelector((state) => state.gifsData);
  return (
    <div className="homeContainer">
      <Form />
      {data.data !== undefined && <Results />}
      {isLoading && <Loader />}
    </div>
  );
};
export default Home;
