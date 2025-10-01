// Jokes API Example

const randomJokes = async () => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const data = await response.json();
  const joke = `${data.setup}  </br> </br> ${data.punchline}`;
  document.querySelector("#loadingJoke").innerHTML = joke;
  console.log(data);
};
