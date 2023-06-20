import './InputToggle.css';

const InputToggle = (idName) => {
  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = `${idName}-toggle`;
  inputElement.classList = 'input-toggle';
  return inputElement;
};
export default InputToggle;
