import Person from "../models/Person.js";

export default class SwapiService {
  getPeople(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE!");
    fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(res => {
        let myPoeple = res.results.map(rawPerson => {
          return new Person(rawPerson);
        });
        draw(myPoeple);
      })
      .catch(drawError);

    console.log("HERE I AM");
  }

  getStarships(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE!");
    fetch("https://swapi.co/api/starships")
      .then(res => res.json())
      .then(draw)
      .catch(drawError);

    console.log("HERE I AM");
  }
}
