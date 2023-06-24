import InfoButton from '../../components/InfoButton/InfoButton';
import InfoCard from '../../components/InfoCard/InfoCard';
import SocialButton from '../../components/SocialButton/SocialButton';
import { i18n } from '../../data/i18n';
import MEDIA from '../../data/mediaLinks';
import getLanguage from '../../utils/getLanguage';

const Experience = () => {
  const { hello, myName, professionTitle } = i18n[getLanguage()];
  const divtest = document.createElement('div');
  const ulEl = document.createElement('ul');
  const ulEl2 = document.createElement('ul');
  const ulEl3 = document.createElement('ul');
  ulEl.innerHTML = `
  <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
  <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
  <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
  <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
  `;
  ulEl2.innerHTML = `
  <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
  <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
  <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
  <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
  `;
  ulEl3.innerHTML = `
  <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
  <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
  <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
  <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
  `;
  const card = InfoCard(
    'lead',
    'experience-card',
    true,
    'Lead Engineer',
    'May 2018 - Present',
    ulEl
  );
  const card2 = InfoCard(
    'super',
    'experience-card',
    false,
    'SUPER MAN',
    'May 2018 - Present',
    ulEl2
  );
  const card3 = InfoCard(
    'haha',
    'experience-card',
    false,
    'HAHAHAHAHAHA',
    'May 2018 - Present',
    ulEl3
  );
  divtest.append(card);
  divtest.append(card2);
  divtest.append(card3);
  divtest.append(InfoButton(card, 'experience-card', true));
  divtest.append(InfoButton(card2, 'experience-card', false));
  divtest.append(InfoButton(card3, 'experience-card', false));
  return divtest;
};

export default Experience;
