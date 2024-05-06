const text = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");


text.addEventListener("keyup", function (event) {

  if (event.key == "Enter") {
    toDo(this.value)
    this.value = "";
  }
}
)

const toDo = (text) => {
  const ulList = document.createElement("li");
  ulList.innerHTML = `
    ${text}
    <i class="fas fa-times"></i>`;

  toDoBox.appendChild(ulList);

  ulList.addEventListener("click", function () {
    this.classList.toggle("done");

    ulList.querySelector("i").addEventListener("click", function () {
      ulList.remove();
    })

  })

}