import feather from "feather-icons";
import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
  <h1 class="restaurant-detail-main__name">${restaurant.name}</h2>

  <div class="d-flex align-items-center">
    <p class="restaurant-detail-main__rating d-flex align-items-center">
      ${feather.icons.star.toSvg({ height: 18, width: 18 })} <span>${restaurant.rating}</span>
    </p>
    <p class="restaurant-detail-main__map d-flex align-items-center">
      ${feather.icons["map-pin"].toSvg({ height: 18, width: 18 })} <span>${restaurant.address}, ${restaurant.city}</span>
    </p>
  </div>

  <h2 class="restaurant-detail__label">Description</h2>
  <div class="restaurant-detail-main-grid">
    <p class="restaurant-detail-main-grid__description">${restaurant.description}</p>
    <img class="restaurant-detail-main-grid__picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  </div>

  <h2 class="restaurant-detail__label">Foods and Drinks</h2>
  <div class="restaurant-detail-main__menu">
    <ul>${restaurant.menus.foods.map((food) => `<li>🍔 ${food.name}</li>`).join("")}</ul>
    <ul>${restaurant.menus.drinks.map((drink) => `<li>🍺 ${drink.name}</li>`).join("")}</ul>
  </div>`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    ${feather.icons.heart.toSvg({ height: 18, width: 18, fill: "none" })}
  </button>`;

const createUnlikedRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    ${feather.icons.heart.toSvg({ height: 18, width: 18, fill: "#ffffff" })}
  </button>`;

const createCustomerReviews = (reviews) => {
  const reviewContent = reviews
    .map(
      (review) => `
  <div class="restaurant-detail-review-item">
    ${feather.icons.user.toSvg({
      class: "restaurant-detail-review-item__icon",
      height: 20,
      width: 20,
      fill: "none",
    })}
    <div>
      <p class="restaurant-detail-review-item__user">${review.name}</p>
      <p class="restaurant-detail-review-item__review">${review.review}</p>
    </div>
    <p class="restaurant-detail-review-item__date">${review.date}</p>
  </div>
  `,
    )
    .join("");

  return `
    <div class="restaurant-detail-review-list">
      ${reviewContent}
    <div>`;
};

// eslint-disable-next-line import/prefer-default-export
export {
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikedRestaurantButtonTemplate,
  createCustomerReviews,
};
