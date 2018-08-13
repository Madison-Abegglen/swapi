import SwapiService from "./swapi-service.js";

const swapiService = new SwapiService();
let app = document.getElementById("app");

function draw(data) {
  console.log(data);
  app.innerHTML = `
    <div id="error"></div>
    <button onclick="app.controllers.swapi.getStarships()">
    Get Starships
    </button>
    <button onclick="app.controllers.swapi.getPeople()">
    Get People
    </button>
    <main id="main-content"></main>`;
}

function drawPeople(data) {
  let peopleElem = document.getElementById("main-content");
  let template = "";
  data.results.forEach(person => {
    template += `
    <div>
        <p>
            <b>Name:</b>
            <span>
            ${person.name}
            </span>
        </p>

        <p>
            <b>Height:</b>
            <span>
            ${person.height}
            </span>
        </p>  

        <p>
            <b>Mass:</b>
            <span>
            ${person.mass}
            </span>
        </p>  

        <p>
            <b>Hair Color:</b>
            <span>
            ${person.hairColor}
            </span>
        </p>  

        <p>
            <b>Skin Color:</b>
            <span>
            ${person.skinColor}
            </span>
        </p>  

        <p>
            <b>Eye Color:</b>
            <span>
            ${person.eyeColor}
            </span>
        </p>  

        <p>
            <b>Birth Date:</b>
            <span>
            ${person.creationDate}
            </span>
        </p>  

        <p>
            <b>Gender:</b>
            <span>
            ${person.gender}
            </span>
        </p>  

        <p>
            <b>Homeworld:</b>
            <span>
            ${person.homeworld}
            </span>
        </p>  

        <p>
            <b>Films:</b>
            <span>
            ${person.films}
            </span>
        </p>  

        <p>
            <b>Species:</b>
            <span>
            ${person.species}
            </span>
        </p>  

        <p>
            <b>Starships:</b>
            <span>
            ${person.starships}
            </span>
        </p>  

        <p>
            <b>Url:</b>
            <span>
            ${person.url}
            </span>
        </p>  
    </div>`;
  });

  peopleElem.innerHTML = template;
}

function drawStarships(data) {
  let starshipsElem = document.getElementById("main-content");
  let template = "";
  data.results.forEach(starship => {
    template += `
    <div>
        <p>
            <b>Name:</b>
            <span>
            ${starship.name}
            </span>
        </p>

        <p>
            <b>Height:</b>
            <span>
            ${starship.model}
            </span>
        </p>  

        <p>
            <b>Mass:</b>
            <span>
            ${person.mass}
            </span>
        </p>  

        <p>
            <b>Hair Color:</b>
            <span>
            ${person.hairColor}
            </span>
        </p>  

        <p>
            <b>Skin Color:</b>
            <span>
            ${person.skinColor}
            </span>
        </p>  

        <p>
            <b>Eye Color:</b>
            <span>
            ${person.eyeColor}
            </span>
        </p>  

        <p>
            <b>Birth Date:</b>
            <span>
            ${person.creationDate}
            </span>
        </p>  

        <p>
            <b>Gender:</b>
            <span>
            ${person.gender}
            </span>
        </p>  

        <p>
            <b>Homeworld:</b>
            <span>
            ${person.homeworld}
            </span>
        </p>  

        <p>
            <b>Films:</b>
            <span>
            ${person.films}
            </span>
        </p>  

        <p>
            <b>Species:</b>
            <span>
            ${person.species}
            </span>
        </p>  

        <p>
            <b>Starships:</b>
            <span>
            ${person.starships}
            </span>
        </p>  

        <p>
            <b>Url:</b>
            <span>
            ${person.url}
            </span>
        </p>  
    </div>`;
  });

  starshipsElem.innerHTML = template;
}

function drawError(error) {
  console.log(error);
  document.getElementById("error").innerHTML = error.message;
}

export default class SwapiController {
  constructor() {
    draw();
  }

  getStarships() {
    console.log("HELLO FROM CONTROLLER");
    swapiService.getStarships(drawStarships, drawError);
  }

  getPeople() {
    swapiService.getPeople(drawPeople, drawError);
  }
}
