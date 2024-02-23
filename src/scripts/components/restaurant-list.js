import "./restaurant-item";

class RestaurantList extends HTMLElement {
  constructor() {
    super();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement("restaurant-item");
      restaurantItemElement.restaurant = restaurant;
      this.appendChild(restaurantItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `Error ${message}`;
  }
}

customElements.define("restaurant-list", RestaurantList);
