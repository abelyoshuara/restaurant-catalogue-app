import {
  createLikeRestaurantButtonTemplate,
  createUnlikedRestaurantButtonTemplate,
} from "../views/templates/template-creator";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.get(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurants.put(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML =
      createUnlikedRestaurantButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurants.delete(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
