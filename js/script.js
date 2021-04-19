const container = document.querySelector(".details");
const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad/6";

async function getApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    container.innerHTML = `<h1 class="name">${json.name}</h1>
    <div class="image" style="background-image: url(${json.img})"></div>
    <div class="status">Status: <b>${json.status}</b></div>
    `;

  } catch (error) {
    console.log(error);
  }
}

getApi();
