import './styles.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Form from '../form';
import Results from '../results';
import Loader from '../loader';

const App = () => {
  useEffect(() => {

  });
  const isLoading = useSelector((state) => state.isLoading);
  const ApiResults = useSelector((state) => state.gifs);
  return (
    <div className="app-container">
      <h1>Bonjour le monde !</h1>
      <Form />
      {ApiResults !== undefined && <Results />}
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
