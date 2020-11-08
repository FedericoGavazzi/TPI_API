const url = "https://raw.githubusercontent.com/FedericoGavazzi/TPI_API/main/jokes.json";
const jokeList = document.getElementById("joke_list")
const drop = document.getElementById("drop-menu")
let jokes = []
jokes = getJoke(url)

function getJoke(collegamento) {
    fetch(collegamento)
        .then(resp => resp.json())
        .then(file => {
            jokes = file.jokes
        })
        .then(() => fillList())
        .catch(err => {
            console.log(err)
            getJoke(url)
        })
}

function fillList() {
    jokes.forEach(element => {
        const rowDiv = document.createElement("div")
        rowDiv.id = element.id
        rowDiv.setAttribute("class", "row border-bottom border-top border-right")
        const idDiv = document.createElement("div")
        idDiv.setAttribute("class", "col-1")
        idDiv.innerHTML = element.id
        const setupDiv = document.createElement("div")
        setupDiv.setAttribute("class", " col-5 card-text")
        setupDiv.innerHTML = element.setup
        const punchlineDiv = document.createElement("div")
        punchlineDiv.setAttribute("class", " col-6 card-text")
        punchlineDiv.innerHTML = element.punchline
        rowDiv.appendChild(idDiv)
        rowDiv.appendChild(setupDiv)
        rowDiv.appendChild(punchlineDiv)
        jokeList.appendChild(rowDiv)

    });
    addReference(jokes.length)
}

function addReference(N) {
    for (let i = 50; i < N; i += 50) {
        const newRef = document.createElement("a")
        newRef.setAttribute("class", "dropdown-item")
        newRef.setAttribute("href", "#" + i)
        newRef.innerHTML = i
        drop.appendChild(newRef)
    }
}