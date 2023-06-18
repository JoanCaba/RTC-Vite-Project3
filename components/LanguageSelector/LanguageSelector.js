import LanguageButton from '../LanguageButton/LanguageButton';
import LanguageOptions from '../LanguageOptions/LanguageOptions';

const LanguageSelector = () => {
  const boxElement = document.createElement('div');
  boxElement.classList = 'lang-selector';
  const languageButton = LanguageButton();
  boxElement.append(languageButton);
  const options = LanguageOptions();
  boxElement.append(options);
  return boxElement;
};

export default LanguageSelector;
