const nxtBtn = document.getElementById("next");
const head = document.getElementById("testa")
const setup = document.getElementById("card-setup")
const punch = document.getElementById("card-punchline")
const type = document.getElementById("card-type")
const url = "https://raw.githubusercontent.com/FedericoGavazzi/TPI_API/main/jokes.json";

getJoke(url);

nxtBtn.onclick = () => {
  getJoke(url);
}

function getJoke(collegamento) {
    fetch(collegamento)
        .then(response => response.json())
        .then(file => {
            let jokes = file.jokes;
            let random = jokes[Math.floor(Math.random()*386)];
            changeJoke(random);
        })
}

function changeJoke(joke){
  head.innerHTML = "Funny joke no: " + joke.id
  setup.innerHTML = joke.setup
  punch.innerText = joke.punchline
  type.innerHTML = joke.type
  
}
