const id = localStorage.getItem("id");
const elFather = document.querySelector(".single");
const ArryLangth = document.querySelector(".len");
const elFatherTwo = document.querySelector(".day p");
const admin = document.querySelector(".addressAdmin");
const elLoader = document.querySelector(".fatherLoader");
let arr = [];

fetch(`https://639c73ba16d1763ab14a56ac.mockapi.io/posts/${id}`)
  .then((resItem) => {
    return resItem.json();
  })
  .then((elem) => {
    arr = elem;
    render(arr);
    renderTwo(arr);
    elLoader.style.display = "none";
    document.body.style.overflow = "auto";
  });

function render(element) {
  elFather.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div class="singleImg">
        <img src="${element.avatar}" width="250px" alt="" />
        <h1><span>${element.title}</span></h1>
        <h4 class="h4">${element.description}</h4>
        <p>
          ${element.descriptionTwo}
          </p>
          <div class="singleBtns">
          <a href="${element.link}"><span>Add to card</span></a>
          <h5>Book name: <span>${element.title}</span></h5>
          <h5>Year: <span>${element.year}</span></h5>
          <h5>Reeds: <span>${element.reed}</span></h5>
          <h5>Categories: <span>${element.Categories}</span></h5>
          <h5>Publishers: <span>Amazon</span></h5>
          </div>
      </div>
        `;
  elFather.appendChild(newDiv);
}

function renderTwo(renders) {
  elFatherTwo.innerHTML = "";
  const newDivTwo = document.createElement("div");
  newDivTwo.innerHTML = `
    <p>Showing <span class="len">${
      renders.length ? renders.length : "1"
    }</span> Result</p>
    `;
  elFatherTwo.appendChild(newDivTwo);
}

const register = localStorage.getItem("login");
console.log(register);
if (register) {
  admin.style.display = "block";
  registers.textContent = "Logout";
} else {
  admin.style.display = "none";
  registers.textContent = "Login";
}
registers.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "../register/register.html";
  console.log("Ashraf");
});

registers.addEventListener("click", (e) => {
  e.preventDefault();
  if (registers.textContent == "Logout") {
    localStorage.removeItem("login");
    window.location.reload();
    registers.textContent = "Login";
  }
});
