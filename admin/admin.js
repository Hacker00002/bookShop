const elForm = document.querySelector("form");
const render = document.querySelector(".render");
const border = document.querySelector(".spinner-border");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const title = evt.target.title.value;
  const subTitle = evt.target.subtitle.value;
  const img = evt.target.img.value;
  const year = evt.target.year.value;
  const link = evt.target.link.value;
  const descriptionTwoS = evt.target.descriptionTwo.value;
  const redsTwo = evt.target.reds.value;
  const categories = evt.target.categories.value;

  const post = {
    title: title,
    avatar: img,
    description: subTitle,
    year,
    link: link,
    descriptionTwo: descriptionTwoS,
    reed: redsTwo,
    Categories: categories,
    id: "body 1",
  };
  fetch("https://639c73ba16d1763ab14a56ac.mockapi.io/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      border.style.display = "block !important";
      res.json();
    })
    .then((data) => {
      alert("Post yuklandi 📥📥📥📬");
      elForm.reset();
      window.location.href = "http://127.0.0.1:5500/index.html";
    });
});
