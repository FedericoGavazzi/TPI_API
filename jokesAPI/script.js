const nxtBtn = document.getElementById("next");
const head = document.getElementById("joke-id")
const setup = document.getElementById("card-setup")
const punch = document.getElementById("card-punchline")
const type = document.getElementById("joke-type")
const response = document.getElementById("response")
const previous = document.getElementById("previous")
const url = "https://raw.githubusercontent.com/FedericoGavazzi/TPI_API/main/jokes.json";
const url_ans = "https://raw.githubusercontent.com/FedericoGavazzi/TPI_API/main/answer.json";
let jokes = []
let pointer = 0;
let previous_joke = []
let answer = getAnswer(url_ans)
getJoke(url)


nxtBtn.onclick = () => {
    changeJoke(jokes[Math.floor(Math.random() * 386)]);
    pointer++
}

previous.onclick = () => {
    pointer--
    prevJoke()
}

function getAnswer(collegamento) {
    fetch(collegamento).then(r => r.json())
        .then(vector => answer = vector.answers)
        .then(getJoke(url))
        .catch(err => console.log(err))
}

function getJoke(collegamento) {
    fetch(collegamento)
        .then(resp => resp.json())
        .then(file => {
            jokes = file.jokes
        })
        .catch(err => {
            console.log(err)
            getJoke(url)
        })
}

function prevJoke() {
    if (pointer < 0) {
        pointer = previous_joke.length
        getJoke(url)
    } else if (pointer >= 0) {
        head.innerHTML = "Funny joke no: " + previous_joke[pointer].id
        setup.innerHTML = previous_joke[pointer].setup
        punch.innerText = previous_joke[pointer].punchline
        type.innerHTML = previous_joke[pointer].type
        response.innerHTML = answer[Math.floor(Math.random() * 3)].answer
    }
}

function changeJoke(joke) {
    if (pointer == previous_joke.length) {
        head.innerHTML = "Funny joke no: " + joke.id
        setup.innerHTML = joke.setup
        punch.innerText = joke.punchline
        type.innerHTML = joke.type
        response.innerHTML = answer[Math.floor(Math.random() * 3)].answer
        previous_joke[previous_joke.length] = joke
    } else if (pointer < previous_joke.length) {
        head.innerHTML = "Funny joke no: " + previous_joke[pointer].id
        setup.innerHTML = previous_joke[pointer].setup
        punch.innerText = previous_joke[pointer].punchline
        type.innerHTML = previous_joke[pointer].type
        response.innerHTML = answer[Math.floor(Math.random() * 3)].answer
    } else if (pointer > previous_joke.length) {
        pointer--
    }


}