import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js";
import "./script/data/time.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/jquery/dist/jquery.slim.min.js"
// import "../node_modules/jquery/dist/popper.min.js";
// import "../node_modules/jquery/dist/script.js";
// import "../node_modules/jquery/dist/jquery.min.js";
import main from "./script/view/main.js";

process.env.API_KEY = "443758fe6fdfcf1ffc5b7cb2bc9fa554";
document.addEventListener("DOMContentLoaded", main);