import "regenerator-runtime"; /* for async await transpile */
import feather from "feather-icons";
import "../styles/main.scss";
import "./components/app-bar";
import swRegister from "./utils/sw-register";
import App from "./views/app";

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector("#menu"),
  drawer: document.querySelector("#drawer"),
  appBar: document.querySelector("app-bar"),
  content: document.querySelector("main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
  feather.replace();

  if (!navigator.onLine) {
    console.log("offline");
  }
});

window.addEventListener("offline", () => {
  console.log("offline2");
});

window.addEventListener("online", () => {
  console.log("online");
});
