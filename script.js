let container = document.getElementById("container");
let cart = document.getElementById("cartBtn");
let itemContainer = document.getElementById("itemContainer");
let btnUp = document.getElementById("up");
let btnDown = document.getElementById("down");


container.style.visibility = "hidden";
let click = () => {
    if (container.style.visibility === "hidden") {
        return (container.style.visibility = "visible");
    } else {
        return (container.style.visibility = "hidden");
    }
};

let scrollUp = () => {
    itemContainer.scrollBy(0, -220);
};

let scrollDown = () => {
    itemContainer.scrollBy(0, 220);
};


cart.addEventListener("click", click);
btnUp.addEventListener("click", scrollUp);
btnDown.addEventListener("click", scrollDown);
