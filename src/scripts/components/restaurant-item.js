import feather from "feather-icons";
import CONFIG from "../globals/config";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="restaurant-item">
      <figure class="restaurant-item__figure">
        <img class="lazyload" data-src="${this._restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId : "https://picsum.photos/id/666/800/450?grayscale"}" alt="${this._restaurant.name}" />
      </figure>
      <div class="restaurant-item__content">
        <div class="restaurant-item__info">
          <p class="restaurant-item__rating">${feather.icons.star.toSvg()} <span>${this._restaurant.rating}</span></p>
          <p class="restaurant-item__map">${feather.icons["map-pin"].toSvg()} <span>${this._restaurant.city}</span></p>
        </div>
        <h2 class="restaurant-item__title"><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h2>
        <p class="restaurant-item__description">${this._restaurant.description}...</p>
      </div>
    </article>`;
  }
}

customElements.define("restaurant-item", RestaurantItem);
