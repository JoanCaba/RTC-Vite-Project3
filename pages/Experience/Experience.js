import InfoCard from '../../components/InfoCard/InfoCard';
import SocialButton from '../../components/SocialButton/SocialButton';
import { i18n } from '../../data/i18n';
import MEDIA from '../../data/mediaLinks';
import getLanguage from '../../utils/getLanguage';

const Experience = () => {
  const { hello, myName, professionTitle } = i18n[getLanguage()];
  const ulEl = document.createElement('ul');
  ulEl.innerHTML = `
  <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
  <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
  <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
  <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
  `;
  console.log(MEDIA.linkedin);
  return InfoCard('Lead Engineer', 'May 2018 - Present', ulEl);
};

export default Experience;
