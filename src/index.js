import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import _ from "lodash";
import "./style.css";
import search from "./logic/search";

function component() {
  const element = document.createElement("div");

  search();

  return element;
}

document.body.appendChild(component());
