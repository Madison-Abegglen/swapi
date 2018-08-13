import SwapiService from "./swapi-service.js";

const swapiService = new SwapiService

function draw() {
    app.innerHTML = `<button onclick="app.controllers.swapi.test()">Test</button>`
}

export default class SwapiController {
    constructor() {
        draw()
    }

    test() {
        console.log("HELLO FROM SWAPICONTROLLER.JS!")
        swapiService.test()
    }

}

