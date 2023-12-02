const apiKey = "25b5c59ba17b43289a6fef958ae90621";
const baseURL = "https://api.rawg.io/api";

function getGame(GameTitle) {
  const url = `${baseURL}/games?key=${apiKey}&search=${GameTitle}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

getGame("Assassin's Creed");
