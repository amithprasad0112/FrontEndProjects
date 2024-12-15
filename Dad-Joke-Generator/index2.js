const btnEl = document.getElementById("btn");
const apiKey="7N8Ff2htCBdiVNVTKa4uAQ==Jiu7CiWfseuu8dCe";
const jokeEl= document.getElementById("joke");

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading..";
        const response = await fetch(apiUrl,options)
        const data= await response.json()
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke";
    
        jokeEl.innerText = data[0].joke

    } catch (error) {
        jokeEl.innerText = "An Error Occured."
        
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke";
        
        console.log(error);
    }


}

btnEl.addEventListener("click", getJoke);