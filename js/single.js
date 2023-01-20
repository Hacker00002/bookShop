const id = localStorage.getItem("id");
const elFather = document.querySelector(".single");
let arr = [];

fetch(`https://639c73ba16d1763ab14a56ac.mockapi.io/posts/${id}`)
  .then((resItem) => {
    return resItem.json();
  })
  .then((elem) => {
    arr = elem;
    render(arr);
  });

function render(element) {
  elFather.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div class="singleImg">
        <img src="${element.avatar}" width="250px" alt="" />
        <p>
          ${element.descriptionTwo}
        </p>
        <div class="singleBtns">
          <h5>Name: <span>${element.title}</span></h5>
          <h5>Year: <span>${element.year}</span></h5>
          <h5>Reeds: <span>${element.reed}</span></h5>
          <h5>Categories: <span>${element.Categories}</span></h5>
          <h5>Publishers: <span>Amazon</span></h5>
        </div>
      </div>
        `;
  elFather.appendChild(newDiv);
}
