"use strict";

import { Jokes } from "./jokes.js";
const jokeClass = new Jokes();

const app = {
    items: [],
    init() {
        document
            .querySelector("#btn")
            .addEventListener("click", this.getData);
    },
    async getData() {
        console.log('button pressed')
        let jokesList = await jokeClass.getJokes()
        app.render(jokesList) 
    },
    // onSearch() {
    // },
    render(jokesList) {
        console.log("rendering jokes")
        const container = document.querySelector("#list");

        jokesList.forEach((joke) => {
            const div = document.createElement("div");
            div.className = "item";
            if (joke.type == "twopart") {
                div.innerHTML = `
                <div class="item-field">joke type: ${joke.category}</div>
                <div class="item-field">${joke.setup}</div>
                <div class="item-field">${joke.delivery}</div>
                `;
            } else if (joke.type == "single") {
                div.innerHTML = `
                <div class="item-field">joke type: ${joke.category}</div>
                <div class="item-field">${joke.joke}</div>
                `
            } else {
                console.log("joke", joke)
            }
            
            container.append(div);
        });
    }
}
console.log("app running")
app.init()