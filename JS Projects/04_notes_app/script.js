const notesContainer = document.querySelector(".notes-container");
const createBtm = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtm.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  inputBox.setAttribute("contenteditable", "true");
  inputBox.className = "input-box";
  let img = document.createElement("img");
  img.src = "./images.png";
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
