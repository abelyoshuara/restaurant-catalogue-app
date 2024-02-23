import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import LikeButtonInitiator from "../../utils/like-button-presenter";
import {
  createCustomerReviews,
  createRestaurantDetailTemplate,
} from "../templates/template-creator";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Detail = {
  async render() {
    return `
      <div class="restaurant-detail container">
        <div class="restaurant-detail-main"></div>

        <h2 class="restaurant-detail__label">Customer Reviews</h2>
        <div class="restaurant-detail-review"></div>

        <div id="likeButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detail(url.id);
    const restaurantContainer = document.querySelector(
      ".restaurant-detail-main",
    );
    const customerReviews = document.querySelector(".restaurant-detail-review");

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(
      data.restaurant,
    );

    customerReviews.innerHTML = createCustomerReviews(
      data.restaurant.customerReviews,
    );

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        description: data.restaurant.description,
        city: data.restaurant.city,
        address: data.restaurant.overview,
        pictureId: data.restaurant.pictureId,
        menus: data.restaurant.menus,
        rating: data.restaurant.rating,
        customerReviews: data.restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
