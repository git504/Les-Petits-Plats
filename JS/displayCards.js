import { renderRecipes } from "./api.js";

// CARDS COMPONENT
export const DISPLAY_CARDS = (renderRecipes.prototype.displayCards = function (
  recipes
) {
  recipes.map((recipe) => {
    let listCard_HTML = "";
    recipe.ingredients.map((elt) => {
      listCard_HTML += `<li class="card__ingredient">
          <span class="card__ingredient--bold">${
            elt.ingredient ? elt.ingredient.trim() : ""
          }</span>  ${elt.quantity ? elt.quantity.toString().trim() : ""} ${
        elt.unit ? elt.unit.toLowerCase().trim() : ""
      }
         </li>`;
      return listCard_HTML;
    });
    document.querySelector(".cards").insertAdjacentHTML(
      "afterbegin",
      `<article class="card">
        <a href="#">
        <div class="card__thumb"></div>
        <div class="card__body">
        <div class="card__head">
        <h2 class="card__title">${recipe?.name}</h2>
        <div class="card__time">
        <i class="card__timeclock"></i>
        <p class="card__minutes">${recipe?.time} min</p>
        </div>
        </div>
        <div class="card__content">
        <ul class="card__ingredients">
                        ${listCard_HTML}
                        </ul>
                        <p class="card__description">
                        ${recipe?.description}
                        </p>
                      </div>
                      </div>
                  </a>
                </article>`
    );
  });
});
