const form = document.querySelector(".form");
const textArea = document.querySelector(".textarea");
const buttonPost = document.querySelector(".btn-submit");
const msg = document.querySelector(".msg");

buttonPost.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button pressed!");
  formValidation();
});

const formValidation = () => {
  if (textArea.value === "") {
    msg.innerHTML = "Your post cannot be empty!!";
    console.log("fail");
  } else {
    console.log("pass");
    msg.innerHTML = "";
  }
};
