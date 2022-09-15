const form = document.querySelector(".form");
const textArea = document.querySelector(".textarea");
const buttonPost = document.querySelector(".btn-submit");
const msg = document.querySelector(".msg");
const posts = document.querySelector(".right");

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
    addData();
  }
};

const data = {};
const addData = () => {
  data["text"] = textArea.value;
  console.log(data);
  createPost();
};

const createPost = () => {
  posts.innerHTML += `
  <div class="container-right">
  <h5>${data.text}</h5>
  <div class="options">
      <i class="fa-regular fa-pen-to-square"></i>
      <i class="fa-solid fa-trash"></i>
  </div>
</div>
  `;
  textArea.value = "";
};
