const getLanguage = () => {
  const currentPath =
    window.location.pathname.split('/')[1] || window.navigator.language.slice(0, 2);
  if (currentPath === 'es' || currentPath === 'en') return currentPath;
  return 'en';
};

export default getLanguage;
