var someElement = document.querySelector(".foo");
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
