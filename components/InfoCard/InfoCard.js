import './InfoCard.css';

const InfoCard = (title, subTitle, innerDescription, subDescription) => {
  const infoCardContainer = document.createElement('div');
  const titleContainer = document.createElement('div');
  const titleElement = document.createElement('h3');
  const subTitleElement = document.createElement('h4');
  const innerDescriptionElement = document.createElement('div');
  infoCardContainer.classList = 'card-container';
  titleContainer.classList = 'card-title-container';
  titleElement.append(title);
  subTitleElement.append(subTitle);
  innerDescriptionElement.append(innerDescription);
  titleContainer.append(titleElement);
  titleContainer.append(subTitleElement);
  infoCardContainer.append(titleContainer);
  infoCardContainer.append(innerDescriptionElement);
  if (subDescription) {
    const subDescriptionElement = document.createElement('div');
    subDescriptionElement.classList = 'card-sub-description';
    subDescriptionElement.append(subDescription);
    infoCardContainer.append(subDescriptionElement);
  }
  return infoCardContainer;
};

export default InfoCard;
