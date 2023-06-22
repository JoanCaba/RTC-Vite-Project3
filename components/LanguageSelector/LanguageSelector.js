import getLanguage from '../../utils/getLanguage';
import LanguageButton from '../LanguageButton/LanguageButton';
import LanguageOptions from '../LanguageOptions/LanguageOptions';
import hamburgerButton from '../hamburgerButton/hamburgerButton';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const lang = getLanguage();
  const boxElement = document.createElement('div');
  boxElement.classList = 'lang-selector';
  const languageButton = hamburgerButton('language-button', LanguageButton(lang));
  boxElement.append(languageButton);
  const options = LanguageOptions();
  boxElement.append(options);
  return boxElement;
};

export default LanguageSelector;
