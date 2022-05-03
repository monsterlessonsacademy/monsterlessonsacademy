const $form = document.querySelector(".form");
const $input = document.querySelector(".input");
const $list = document.querySelector(".list");
const items = [];

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  items.push($input.value);

  const $newItem = document.createElement("div");
  $newItem.innerText = $input.value;
  $list.appendChild($newItem);

  $input.value = "";
});

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || (event.metaKey && event.key === "z")) {
    console.log("ctrl + z pressed!");
    if (items.length > 0) {
      items.pop();
      $list.removeChild($list.lastChild);
    }
  }
});

hotkeys("ctrl+z,command+z", function (event, handler) {
  console.log("hotkeys", event, handler);
  if (items.length > 0) {
    items.pop();
    $list.removeChild($list.lastChild);
  }
});
