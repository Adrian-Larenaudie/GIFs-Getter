import './styles.scss';
import Form from '../form';
import Results from '../results';
import Loader from '../loader';

const App = () => {
  console.log('hello world !');
  return (
    <div className="app-container">
      <h1>Bonjour le monde !</h1>
      <Form />
      <Results />
      <Loader />
    </div>
  );
};

export default App;
