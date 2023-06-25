import getLanguage from '../../utils/getLanguage';

const Projects = () => {
  //const { hello, myName, professionTitle } = i18n[getLanguage()];
  const projectsContainer = document.createElement('section');
  projectsContainer.id = 'projects';
  projectsContainer.classList.remove('fade-out');
  projectsContainer.classList.add('fade-in');

  projectsContainer.append(divCont);
  return projectsContainer;
};

export default Projects;
