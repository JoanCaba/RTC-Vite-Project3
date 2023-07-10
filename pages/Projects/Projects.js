import CardContainer from '../../components/CardContainer/CardContainer';
import Link from '../../components/Link/Link';
import TechSub from '../../components/TechSub/TechSub';
import { i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import './Projects.css';

const projectToCard = (project, viewCode, visitSite) => {
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
    newCard.cardName = title;
    newCard.cardNameShort = shortName;
    newCard.title = title;
    const projectUrlElement = Link(url, visitSite, 'visit-anchor');
    const projectCodeUrlElement = Link(codeUrl, viewCode, 'code-anchor');
    projectUrlElement.rel = 'noreferrer';
    projectCodeUrlElement.rel = 'noreferrer';
    const subLinksContainer = document.createElement('div');
    subLinksContainer.classList = 'sub-links';
    subLinksContainer.append(projectUrlElement);
    subLinksContainer.append(projectCodeUrlElement);
    newCard.subTitle = subLinksContainer;
    newCard.description = description;
    newCard.subDescription = TechSub(technologies);
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
  const { projectsList, projectsTitle, viewCode, visitSite } = i18n[getLanguage()];
  const projectsContainer = document.createElement('section');
  const innerProjectsContainer = document.createElement('div');
  const projectsTitleElement = document.createElement('h2');
  projectsTitleElement.innerHTML = projectsTitle;
  projectsContainer.id = 'projects';
  projectsContainer.classList.remove('fade-out');
  projectsContainer.classList.add('fade-in');

  const projectsArray = projectsList.map((project) => projectToCard(project, viewCode, visitSite));
  const projectSection = CardContainer(projectsArray);
  innerProjectsContainer.append(projectsTitleElement);
  innerProjectsContainer.append(projectSection);
  projectsContainer.append(innerProjectsContainer);
  return projectsContainer;
};

export default Projects;
