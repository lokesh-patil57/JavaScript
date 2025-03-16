let url = "https://icanhazdadjoke.com";

async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url, config);
    let data = res.data;
    console.log(data);

    return data;
  } catch (e) {
    console.log(`Cannot Get Jokes`);
    return "Jokes Not found";
  }
}

getJokes();
