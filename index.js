const header = document.getElementById("header");
const content = document.getElementById("content");

console.log(header, content);

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      header.textContent = data.data.content.text_head;
      content.textContent =
        data.data.content.text !== ""
          ? data.data.content.text
          : data.data.content.text_hidden;
    });
}

getJoke();

document.body.addEventListener("click", getJoke);
