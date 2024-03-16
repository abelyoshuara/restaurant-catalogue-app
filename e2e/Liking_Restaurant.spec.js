const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorites");
});

Scenario("Liked one of the restaurants", async ({ I }) => {
  I.see(
    "Tidak ada restauran favorit untuk ditampilkan",
    ".restaurant-item__not__found",
  );

  I.amOnPage("/");

  I.waitForElement(".restaurant-item__title", 5);
  I.seeElement(".restaurant-item__title");

  const firstRestaurant = locate(".restaurant-item__title a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorites");

  I.seeElement(".restaurant-item");
  const likedRestaurantTitle = await I.grabTextFrom(".restaurant-item__title");

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("Canceled like of the restaurant", async ({ I }) => {
  I.see(
    "Tidak ada restauran favorit untuk ditampilkan",
    ".restaurant-item__not__found",
  );

  I.amOnPage("/");

  I.waitForElement(".restaurant-item__title", 5);
  I.seeElement(".restaurant-item__title");

  const firstRestaurant = locate(".restaurant-item__title a").first();
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorites");

  const secondRestaurant = locate(".restaurant-item__title a").first();
  await I.grabTextFrom(secondRestaurant);
  I.click(secondRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorites");

  I.see(
    "Tidak ada restauran favorit untuk ditampilkan",
    ".restaurant-item__not__found",
  );
});
