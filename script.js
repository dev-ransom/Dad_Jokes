const JokesText = document.querySelector('.container #jokes'), JokeBtn = document.querySelector('.container #btn');

JokeBtn.addEventListener('click', getJoke);
 const apikey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll"
const options ={
    method: "GET",
    headers: {
        "X-Api-Key":apikey, 
    }
}

function getJoke(){
    
}