const first = document.querySelectorAll("strong")[0];
const second = document.querySelectorAll("strong")[1];
const third = document.querySelectorAll("strong")[2];
const fourth = document.querySelectorAll("strong")[3];

first.onclick = () => {
  // console.log(first.className);

  // first.className = "user-inactive";

  // first.classList.add("font-22");

  first.classList.remove("font-22");
};

second.onclick = () => {
  second.classList.toggle("user-deleted");
};

third.onclick = () => {
  if (third.classList.contains("user")) {
    console.log("Tem a classe user");
  } else {
    console.log("Não tem a classe user");
  }
};

fourth.onclick = () => {
  fourth.classList.replace("user-inactive", "user-deleted");
}
