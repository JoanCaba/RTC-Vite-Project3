import './Header.css';

const initHeader = () => {
  const app = document.querySelector('#app');
  const header = document.createElement('header');

  header.innerHTML = `
    <nav>
    <ul id="list">
    <li> <a href="/About" id="test" class="nav-link">Accessories </a></li>
    </ul>
    </nav>
  `;

  app.append(header);
};

export default initHeader;
