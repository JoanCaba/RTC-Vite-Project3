import InfoButton from '../InfoButton/InfoButton';
import InfoCard from '../InfoCard/InfoCard';
import './CardContainer.css';

const CardContainer = (cardsArray) => {
  // [{card1}, {card2}]
  const cardSection = document.createElement('section');
  const cardsContainer = document.createElement('div');
  const buttonsContainer = document.createElement('div');
  cardSection.classList.add('cards-section');
  cardsContainer.classList.add('cards-container');
  buttonsContainer.classList.add('cards-button');
  cardsArray.forEach((card) => {
    const {
      cardName,
      cardNameShort,
      title,
      subTitle,
      description,
      subDescription,
      classCard,
      defaultCard
    } = card;
    const newCard = InfoCard(
      cardName,
      classCard,
      defaultCard,
      title,
      subTitle,
      description,
      subDescription
    );
    cardsContainer.append(newCard);
    buttonsContainer.append(InfoButton(cardName, cardNameShort, newCard, classCard, defaultCard));
  });
  cardSection.append(buttonsContainer);
  cardSection.append(cardsContainer);
  return cardSection;
};

export default CardContainer;
