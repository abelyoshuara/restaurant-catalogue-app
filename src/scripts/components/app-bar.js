class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a href="#" class="header__brand">Restoay</a>

    <button id="menu" class="header__menu">
      <i class="feather-28" data-feather="menu"></i>
    </button>

    <nav id="drawer" class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="#/">Home</a></li>
        <li class="nav__item"><a href="#/favorites">Favorites</a></li>
        <li class="nav__item"><a href="https://github.com/abelyoshuara">About Us</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
