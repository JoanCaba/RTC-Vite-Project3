import './TechSub.css';

const TechSub = (technologies) => {
  const listContainer = document.createElement('ul');
  listContainer.classList = 'technologies-list';
  technologies.forEach((technology) => {
    const newRow = document.createElement('li');
    newRow.innerText = technology;
    listContainer.append(newRow);
  });
  return listContainer;
};
export default TechSub;
