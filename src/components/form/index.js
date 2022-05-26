import { useDispatch, useSelector } from 'react-redux';
import { changeIsLoadingStatus, getApiResults, setInputValue } from '../../actions/actions';
import './styles.scss';

const Form = () => {
  // store dispatch hook in a const
  const dispatch = useDispatch();

  // consts which stores part of the state
  const isLoading = useSelector((state) => state.isLoading);
  const keyWord = useSelector((state) => state.keyWord);
  const resultNumber = useSelector((state) => state.resultNumber);
  const resultsLanguage = useSelector((state) => state.resultsLanguage);

  // handlers methods, listen every change on field form
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(changeIsLoadingStatus(!isLoading));
    dispatch(getApiResults());
  };
  const onChangeKeyWord = (event) => {
    dispatch(setInputValue(event.target.value, event.target.name));
  };
  const onChangeResultsNumber = (event) => {
    dispatch(setInputValue(event.target.value, event.target.name));
  };
  const onChangeSelectLanguage = (event) => {
    dispatch(setInputValue(event.target.value, event.target.name));
  };
  return (
    <div className="formContainer">
      <form className="formContainer__form" onSubmit={handleSubmit}>
        <label className="formContainer__keyWordLabel" htmlFor="keyWord">
          Entrez un mot clef*
          <input className="formContainer__keyWordInput" id="keyWord" name="keyWord" type="text" placeholder="Mot clef" value={keyWord} onChange={onChangeKeyWord} />
        </label>
        <label className="formContainer__resultsNumberLabel" htmlFor="resultsNumber">
          Entrez un nombre de résultats (max 30)*
          <input className="formContainer__resultsNumberInput" id="resultsNumber" name="resultsNumber" type="number" value={resultNumber} onChange={onChangeResultsNumber} />
        </label>
        <select className="formContainer__selectLanguage" name="resultsLanguage" id="resultsLanguage" defaultValue={resultsLanguage} onChange={onChangeSelectLanguage}>
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
