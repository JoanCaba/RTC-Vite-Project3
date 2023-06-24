import InfoButton from '../../components/InfoButton/InfoButton';
import InfoCard from '../../components/InfoCard/InfoCard';
import { i18n } from '../../data/i18n';
import getLanguage from '../../utils/getLanguage';
import './Experience.css';

const Experience = () => {
  const { experienceTitle, experiencesList } = i18n[getLanguage()];
  const experienceContainer = document.createElement('div');
  const innerExperienceContainer = document.createElement('div');
  const experienceTitleElement = document.createElement('h2');
  const experienceSection = document.createElement('section');
  const buttonsContainer = document.createElement('div');
  const experienceCardContainer = document.createElement('div');
  experienceTitleElement.innerHTML = experienceTitle;
  experienceContainer.classList = 'experience';
  experienceSection.classList = 'experience-section';
  buttonsContainer.classList = 'experience-buttons';
  const experiences = Object.keys(experiencesList);
  experiences.forEach((experience) => {
    const {
      company,
      companyShort,
      title,
      startDate,
      endDate,
      description,
      technologies,
      defaultCard,
      showCard
    } = experiencesList[experience];
    if (showCard) {
      const subTitle = `${startDate} - ${endDate}`;
      const card = InfoCard(
        experience,
        'experience-card',
        defaultCard,
        title,
        subTitle,
        description,
        technologies
      );
      experienceCardContainer.append(card);
      buttonsContainer.append(
        InfoButton(company, companyShort, card, 'experience-card', defaultCard)
      );
    }
  });

  experienceSection.append(buttonsContainer);
  experienceSection.append(experienceCardContainer);
  innerExperienceContainer.append(experienceTitleElement);
  innerExperienceContainer.append(experienceSection);
  experienceContainer.append(innerExperienceContainer);
  return experienceContainer;
};

export default Experience;
