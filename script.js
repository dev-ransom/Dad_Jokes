const JokesText = document.querySelector('.container #jokes'), JokeBtn = document.querySelector('.container #btn'), soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'), Icon_container = document.querySelector('.icons-container'),bugIcon =document.querySelector('.fa-bug'),
twitterBtn = document.querySelector('.twitter');


// eventlistener for sound 
soundBtn.addEventListener('click', function(){
    soundBtn.disabled = true;
let utterance = new SpeechSynthesisUtterance(`${JokesText.innerText}`)
speechSynthesis.speak(utterance)
})

// eventlistener for copy

copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(`${JokesText.innerText}`);
})

//  eventlistener for twitter

twitterBtn.addEventListener('click', ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${JokesText.innerText}`;
    console.log(window.open(tweetUrl, "_blank"));
})

// for joke finding 
JokeBtn.addEventListener('click', getJoke);
 
const apikey = "+kVPx5PZIXzNIfChijij3w==KmTztKPLbnwbfDdV";

const options = {
    method: 'GET',
    headers:{
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
    JokesText.innerText = 'Updating...';
    JokeBtn.disabled = true;
    JokeBtn.innerText = 'loading...';
    const response = await fetch(apiURL, options);
    const data = await response.json();
    JokesText.innerText = data[0].joke
    JokeBtn.disabled = false;
    JokeBtn.innerText = 'TELL ME A JOKE ';
        
    } catch (error) {

        JokesText.innerText = "This site can't be reached, internet disconnected, try again later";
        JokesText.style.color = 'rgba(0, 0, 0, 0.508)';
        // JokeBtn.style.color = 'rgba(0, 0, 0, 0.508)';
        Icon_container.style.display = 'none';
        bugIcon.style.display = 'block';
        JokeBtn.disabled = false;
        JokeBtn.innerText = 'TELL ME A JOKE ';
        console.log(error);
    }
    
}

