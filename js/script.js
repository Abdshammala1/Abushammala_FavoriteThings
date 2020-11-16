import { fetchData } from "./modules/default.js";

function getItems(data) {

    const header = document.querySelector(".h_section");
    header.children[0].textContent = "Abdalrahman Favorite Things";

    let imgDiv = document.querySelector(".items-imgs"),
        itemDiv = document.querySelector("#item-img").content;

    for (let thumb in data) {
        let item = itemDiv.cloneNode(true),
        itemChildren = item.querySelector("div").children;


        item.children[0].id = data[thumb].ID;


        itemChildren[0].lastElementChild.src = data[thumb].image;


        itemChildren[1].textContent = data[thumb].title;
        item.children[0].addEventListener("click", getItemsInfo);
        imgDiv.appendChild(item);
    }
}

function getItemsInfo() {

    fetchData(`./includes/index.php?id=${this.id}`)
        .then((data) => getItem(data))
        .catch((err) => console.log(err));
}

function getItem(data) {
    let popup = document.querySelector(".modal"),
        popup2 = popup.querySelector(".modal-content");


    popup.classList.add("display-modal");
    popup.addEventListener("click", closeItem);


    popup2.firstElementChild.children[1].src = data[0].image;
    popup2.children[1].textContent = data[0].title;
    popup2.children[2].textContent = data[0].description;
}

function closeItem() {

    let popup = document.querySelector(".modal");
    popup.classList.remove("display-modal");
}

function getError(err) {

    console.log(err);


    const header = document.querySelector(".h_section");
    header.children[1].textContent = err;
    header.children[2].textContent = "";
}


(() => {
    fetchData("./includes/index.php")
        .then((data) => {
            getItems(data);
        })
        .catch((err) => {
            getError(err);
        });
})();
