import { useDispatch, useSelector } from 'react-redux';
import { changeIsLoadingStatus, getApiResults } from '../../actions/actions';
import './styles.scss';

const Form = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(changeIsLoadingStatus(!isLoading));
    dispatch(getApiResults());
  };
  return (
    <div className="formContainer">
      <form className="formContainer__form" onSubmit={handleSubmit}>
        <label className="formContainer__keyWordLabel" htmlFor="keyWord">
          Entrez un mot clef*
          <input className="formContainer__keyWordInput" id="keyWord" name="keyWord" type="text" placeholder="Mot clef" />
        </label>
        <label className="formContainer__resultsNumberLabel" htmlFor="resultsNumber">
          Entrez un nombre de résultats (max 30)*
          <input className="formContainer__resultsNumberInput" id="resultsNumber" name="resultsNumber" type="number" />
        </label>
        <select className="formContainer__selectLanguage">
          <option className="formContainer__option" value="">--Langue de la recherche*--</option>
          <option className="formContainer__option" value="en">en</option>
          <option className="formContainer__option" value="fr">fr</option>
        </select>
        <button className="formContainer__submit" type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;
