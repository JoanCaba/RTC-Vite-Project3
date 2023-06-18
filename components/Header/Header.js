import './Header.css';

const initHeader = () => {
  const app = document.querySelector('#app');
  const header = document.createElement('header');

  header.innerHTML = `
    <nav>
    <ul id="list">
    <li> <a href="/experience" id="test" class="nav-link">experience </a></li>
    <li> <a href="/projects" id="test" class="nav-link">projects </a></li>
    <li> <a href="/About" id="test" class="nav-link">Accessories </a></li>
    </ul>
    </nav>
  `;

  app.append(header);
};

export default initHeader;
