const DrawerInitiator = {
  init({ button, drawer, appBar }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    window.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer, appBar);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("active");
  },

  _closeDrawer(event, drawer, appBar) {
    event.stopPropagation();
    if (event.target !== appBar && event.target !== drawer) {
      drawer.classList.remove("active");
    }
  },
};

export default DrawerInitiator;
