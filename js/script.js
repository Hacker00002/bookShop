// dark-mode
const elFather = document.querySelector(".cardFather");
const month = document.querySelector(".month");
const elForm = document.querySelector("#searchForm");
const elSearch = document.querySelector(".searchInput");
const errorMessage = document.querySelector(".error");
const header = document.querySelector("header");
const yearBtn = document.querySelector("#yearBtn");
const yearSelect = document.querySelector("#select");
const ArryLangth = document.querySelector(".len");
const elFatherTwo = document.querySelector(".day p");
const markBtn = document.querySelector(".mark");
const addCard = document.querySelector(".mainFather");
const notFound = document.querySelector(".notFound");
const elLoader = document.querySelector(".loaderFather");
let arr = [];
// swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// fetch api
fetch("https://639c73ba16d1763ab14a56ac.mockapi.io/posts")
  .then((resItem) => {
    return resItem.json();
  })
  .then((dataTwo) => {
    arr = dataTwo;
    render(arr);
    renderTwo(arr);
    elLoader.style.display = "none";
    document.body.style.overflow = "auto";
  })
  .catch((error) => {
    console.log(error);
  });

function render(element) {
  elFather.innerHTML = "";
  element.forEach((renderArr) => {
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
    <div class="cardsColor">
    <div class="imgColor">
      <img src="${renderArr.avatar}" width="150px" height="200px" alt="" />
    </div>
    <div class="cardTexts">
      <p class="name">${renderArr.title}</p>
      <p class="title">${renderArr.description}</p>
      <p class="year">Year:${renderArr.year}</p>
    </div>
    <div class="btnFather">
      <div class="cardBtns">
        <a href="#" class="bookMark">Add to card</a>
        <button data-id=${renderArr.id} class="moreInfo">More Info</button>
      </div>
      <a href="${renderArr.link}" class="read">Buy Now</a>
    </div>
  </div>
  `;
    elFather.appendChild(newDiv);
  });
}

function renderTwo(renders) {
  elFatherTwo.innerHTML = "";
  const newDivTwo = document.createElement("div");
  newDivTwo.innerHTML = `
    <p>Showing <span class="len">${renders.length}</span> Result</p>
    `;
  elFatherTwo.appendChild(newDivTwo);
}
let err = [];
// search
elForm.addEventListener("keyup", (evt) => {
  evt.preventDefault();
  const elSearchValue = elSearch.value.trim();
  const elReg = new RegExp(elSearchValue, "gi");

  const filterItem = arr.filter((elem) => elem.title.match(elReg));
  renderTwo(filterItem);

  if (filterItem.length > 0) {
    notFound.style.display = "none";
    render(filterItem);
  } else {
    render(err);
    notFound.style.display = "block";
  }
});
// select-year
yearBtn.addEventListener("change", (evt) => {
  evt.preventDefault();
  const elSearchValue = yearSelect.value.trim();
  const elReg = new RegExp(elSearchValue, "gi");

  const filterItem = arr.filter((elem) => elem.year.match(elReg));
  renderTwo(filterItem);

  if (filterItem.length > 0) {
    render(filterItem);
  }
});
render(arr);
// single page
elFather.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("moreInfo")) {
    const id = evt.target.dataset.id;
    localStorage.setItem("id", id);
    window.location.href = "http://127.0.0.1:5500/pages/single.html";
  }
});
// markBtn
markBtn.addEventListener("click", (e) => {
  addCard.classList.toggle("activeThree");
});
