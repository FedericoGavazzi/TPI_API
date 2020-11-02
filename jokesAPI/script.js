const nxtBtn = document.getElementById("next");
const head = document.getElementById("testa")
const setup = document.getElementById("card-setup")
const punch = document.getElementById("card-punchline")
const type = document.getElementById("card-type")
const response = document.getElementById("response")
const previous = document.getElementById("previous")
const url = "https://raw.githubusercontent.com/FedericoGavazzi/TPI_API/main/jokes.json";
const url_ans = "https://raw.githubusercontent.com/FedericoGavazzi/TPI_API/main/answer.json";
let pointer = 0;
let previous_joke = []
let answer = getAnswer(url_ans)

nxtBtn.onclick = () => {
    getJoke(url)
    pointer++
}

previous.onclick = () => {
    prevJoke()
    pointer--
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
            let jokes = file.jokes;
            let random = jokes[Math.floor(Math.random() * 386)];
            changeJoke(random);
        })
        .catch(err => console.log(err))
}

function prevJoke() {
    if (pointer == 0) {
        pointer = previous_joke.length
        getJoke(url)
    } else {
        head.innerHTML = "Funny joke no: " + previous_joke[pointer - 1].id
        setup.innerHTML = previous_joke[pointer - 1].setup
        punch.innerText = previous_joke[pointer - 1].punchline
        type.innerHTML = previous_joke[pointer - 1].type
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
    } else {
        head.innerHTML = "Funny joke no: " + previous_joke[pointer].id
        setup.innerHTML = previous_joke[pointer].setup
        punch.innerText = previous_joke[pointer].punchline
        type.innerHTML = previous_joke[pointer].type
        response.innerHTML = answer[Math.floor(Math.random() * 3)].answer
    }


}