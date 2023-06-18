const Link = (href, text, className) => {
  const anchorElement = document.createElement('a');
  anchorElement.href = href;
  anchorElement.text = text;
  anchorElement.classList = className;
  return anchorElement;
};
export default Link;
