import "../../components/restaurant-list";
import RestaurantSource from "../../data/restaurant-source";

const Home = {
  async render() {
    return `
      <div class="hero"></div>

      <div class="container">
        <div class="restaurant">
          <h1 class="restaurant__label text-center">Explore Restaurant</h1>
          <restaurant-list class="restaurant-list"></restaurant-list>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.list();
    const restaurantListElement = document.querySelector("restaurant-list");
    restaurantListElement.restaurants = restaurants;
  },
};

export default Home;
