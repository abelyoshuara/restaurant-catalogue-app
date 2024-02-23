import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Favorites = {
  async render() {
    return `
      <div class="favorite restaurant container">
        <h1 class="favorite-title">Favorite Page</h1>
        <restaurant-list class="restaurant-list"></restaurant-list>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAll();
    const restaurantListElement = document.querySelector("restaurant-list");

    if (restaurants.length) {
      restaurantListElement.restaurants = restaurants;
    } else {
      restaurantListElement.innerHTML +=
        '<p class="restaurant-item__not__found">Tidak ada restauran favorit untuk ditampilkan</p>';
    }
  },
};

export default Favorites;
