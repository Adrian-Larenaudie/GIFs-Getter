import './styles.scss';
import Link from 'react-scroll/modules/components/Link';

// eslint-disable-next-line arrow-body-style
const GoingTopButton = () => {
  return (
    <div className="goingTopButtonContainer">
      <Link className="goingTopButtonContainer__link" smooth duration={500} to="topPageAnchor">Retour haut de page</Link>
    </div>
  );
};

export default GoingTopButton;
