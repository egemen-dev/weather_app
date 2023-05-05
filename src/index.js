import _ from "lodash";
import "./style.css";
import search from "./logic/search";

function component() {
  const element = document.createElement("div");

  search();

  return element;
}

document.body.appendChild(component());
