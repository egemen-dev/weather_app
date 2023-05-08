import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import _ from "lodash";
import "./style.css";
import search from "./logic/search";

function component() {
  search();

  document.getElementById("container").style.display = "flex";
}

document.body.appendChild(component());
