import CardContainer from '../../components/CardContainer/CardContainer';
import { i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import './Projects.css';

const projectTechnologiesButtons = (technologies) => {
  return false;
};
const projectLinkButtons = (codeUrl, projectUrl) => {
  return false;
};

const projectToCard = (project) => {
  const newCard = {};
  const {
    title,
    shortName,
    projectImage,
    projectAlt,
    url,
    codeUrl,
    description,
    technologies,
    defaultProject,
    showProject
  } = project;
  if (showProject) {
    // TODO: create links to code and url
    newCard.cardName = title;
    newCard.cardNameShort = shortName;
    newCard.title = title;
    newCard.subTitle = url + codeUrl;
    newCard.description = description;
    newCard.subDescription = technologies; //TODO: projectTechnologiesButtons()
    newCard.classCard = 'project-card';
    newCard.cardId = title;
    newCard.defaultCard = defaultProject;
    newCard.imageUrl = projectImage;
    newCard.imageAlt = projectAlt;
    return newCard;
  }
  return false;
};

const Projects = () => {
  const { projectsList, projectsTitle } = i18n[getLanguage()];
  const projectsContainer = document.createElement('section');
  const innerProjectsContainer = document.createElement('div');
  const projectsTitleElement = document.createElement('h2');
  projectsTitleElement.innerHTML = projectsTitle;
  projectsContainer.id = 'projects';
  projectsContainer.classList.remove('fade-out');
  projectsContainer.classList.add('fade-in');

  const projectsArray = projectsList.map((project) => projectToCard(project));
  const projectSection = CardContainer(projectsArray);
  innerProjectsContainer.append(projectsTitleElement);
  innerProjectsContainer.append(projectSection);
  projectsContainer.append(innerProjectsContainer);
  return projectsContainer;
};

export default Projects;
