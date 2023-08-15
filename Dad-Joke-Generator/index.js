const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

async function getJoke() {
   try {
      const response = await fetch("https://icanhazdadjoke.com/", {
         headers: {
            Accept: "application/json",
         },
      });
      
      const data = await response.json();
      jokeEl.textContent = data.joke;
   } catch (error) {
      console.error("Error fetching joke:", error);
   }
}

btnEl.addEventListener("click", getJoke);
