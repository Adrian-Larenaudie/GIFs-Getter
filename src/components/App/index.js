import './styles.scss';
import { Routes, Route } from 'react-router-dom';
import Home from '../home';
import Details from '../details';

const App = () => (
  <div className="app-container">
    <h1>Bonjour le monde !</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gif/:slug" element={<Details />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  </div>
);

export default App;
