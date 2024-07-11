const issue_container = document.querySelector("#issue_container");
const prevBtn = document.querySelector("#prev_btn");
const nextBtn = document.querySelector("#next_btn");
const pages = document.querySelector("#pages");

let currentPage = 1;

let url =
  "https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5";

function fetchIssues(pageNumber) {
    const fetchUrl = (url.replace("${pageNumberHere}", pageNumber))
  fetch(fetchUrl)
    .then((respose) => respose.json())
    .then((data) => {
      display(data);
      pages.textContent = `Page Number ${pageNumber}`;
    })
    .catch((err) => {
      console.log(err);
    });
}

function display(data) {
  issue_container.innerHTML = "";
  data.forEach((val) => {
    let li = document.createElement("li");
    li.textContent = val.title;
    issue_container.appendChild(li);
  });
}
nextBtn.addEventListener("click", () => {
  currentPage++;
  fetchIssues(currentPage);
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchIssues(currentPage);
  }
});

fetchIssues(currentPage);
