let card = document.querySelector(".card");
let cardName = document.querySelector(".name")
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/vinayaka0305");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);
      const image = document.createElement("img");
      image.src = data.avatar_url; // Use the avatar_url from the fetched data
      card.appendChild(image);
      cardName.innerHTML = "vinayaka  "
    
  }
};
xhr.send();


