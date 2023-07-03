import CardContainer from '../../components/CardContainer/CardContainer';
import { i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import './Experience.css';

const experienceToCard = (experience) => {
  const newCard = {};
  const {
    company,
    companyShort,
    companyIcon,
    companyIconAlt,
    title,
    startDate,
    endDate,
    description,
    technologies,
    defaultCard,
    showCard
  } = experience;
  if (showCard) {
    const subTitle = `${startDate} - ${endDate}`;
    newCard.cardName = company;
    newCard.cardNameShort = companyShort;
    newCard.title = title;
    newCard.subTitle = subTitle;
    newCard.description = description;
    newCard.subDescription = technologies;
    newCard.classCard = 'experience-card';
    newCard.cardId = company;
    newCard.defaultCard = defaultCard;
    newCard.imageUrl = companyIcon;
    newCard.imageAlt = companyIconAlt;
    return newCard;
  }
  return false;
};

const Experience = () => {
  const { experienceTitle, experiencesList } = i18n[getLanguage()];
  const experienceContainer = document.createElement('section');
  const innerExperienceContainer = document.createElement('div');
  const experienceTitleElement = document.createElement('h2');
  experienceTitleElement.innerHTML = experienceTitle;
  experienceContainer.id = 'experience';
  experienceContainer.classList.remove('fade-out');
  experienceContainer.classList.add('fade-in');
  // TODO: Refactor as array
  const experiences = Object.keys(experiencesList);
  const cardsToDisplay = experiences.filter((exp) => experiencesList[exp].showCard === true);
  const cardsArray = cardsToDisplay.map((card) => experienceToCard(experiencesList[card]));
  const experienceSection = CardContainer(cardsArray);
  innerExperienceContainer.append(experienceTitleElement);
  innerExperienceContainer.append(experienceSection);
  experienceContainer.append(innerExperienceContainer);
  return experienceContainer;
};

export default Experience;
