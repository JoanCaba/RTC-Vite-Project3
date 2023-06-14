import './Footer.css';

const initFooter = () => {
  const app = document.querySelector('#app');
  const footer = document.createElement('footer');

  footer.innerHTML = `
    <div></div>
  `;

  app.append(footer);
};

export default initFooter;
