const btn = document.getElementsByTagName("button")[0];
const input = document.getElementById("inputText");

function entry() {
  let li = document.createElement("li");
  li.innerHTML = input.value;
  document.getElementById("newText").appendChild(li);
  input.value = "";
}

function clickBtn() {
  if (input.value !== "") {
    entry();
  } else {
    alert("Please Enter a valid Item");
  }
}

function pressKey(e) {
  if (input.value === "") {
  } else if (e.keyCode === 13) {
    entry();
  }
}
btn.addEventListener("click", clickBtn);
input.addEventListener("keypress", pressKey);
