export class Jokes {
    constructor() {
        this.jokes = [];
    }

    getJokes() {
        console.log('jokes: fetching jokes')
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=5")
        .then((response) => response.json())
        .then((response) => {
            console.log("response", response);
            response.jokes.forEach(element => {
                // console.log('element', element)
                this.jokes.push(element);
            });
            console.log('jokes: joke', this.jokes)
            console.log('jokes: joke1', this.jokes[0])

            const jokelist = []
            this.jokes.forEach(joke => {
                jokelist.push(joke)
            })

            return jokelist;
        })
    }

}