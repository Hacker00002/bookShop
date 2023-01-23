const errorMessage = document.querySelector(".errorMessage");
const elForm = document.querySelector("#register");
const elInput = document.querySelector("#register input");
const registers = document.querySelector("#login");
const admin = document.querySelector(".addressAdmin");
const elInput1 = document.querySelector("#email"),
  elInput2 = document.querySelector("#username"),
  elInput3 = document.querySelector("#password");
font = document.querySelector(".users");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (elInput.value == "") {
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
    colors(elInput1, elInput2, elInput3);
  } else {
    colorsBorder(elInput1, elInput2, elInput3);
    elForm.reset();
    window.location.href = "../index.html";
    localStorage.setItem("login", "true");
  }
});

function colors(elInput1, elInput2, elInput3) {
  elInput3.style.border = "1.5px solid red";
  elInput1.style.border = "1.5px solid red";
  elInput2.style.border = "1.5px solid red";
}

function colorsBorder(elInput1, elInput2, elInput3) {
  elInput1.style.border = "1.5px solid #fff";
  elInput2.style.border = "1.5px solid #fff";
  elInput3.style.border = "1.5px solid #fff";
}
