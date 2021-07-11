function getURLParam(param) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let value = urlParams.get(param);
    return value;
}

async function searchCoffee() {
    let input = document.getElementById("search-input");
    let text = input.value.trim().toLowerCase();
    input.value = "";
    if (text.trim() == "") {
        return;
    }

    if (text.length < 3) {
        alert('Use a longer string for search.');
        return;
    }

    let catalog = await coffeeStorage.getCatalog();

    for (let id in catalog) {
        let coffeeName = catalog[id].name.toLowerCase();
        if (coffeeName.includes(text) || text.includes(coffeeName)) {
            onNavigate('/coffee-info?id=' + id);
            return;
        }
    }
    alert("Sorry, we don't have such coffee yet.");
}


function getCoffeeRating(coffee) {
    if (!('marks' in coffee)) {
        return 0;
    }

    let marks = Object.values(coffee.marks);
    if (marks.length == 0) {
        return 0;
    }
    return marks.reduce((a, b) => (a + b)) / marks.length;
}

function setEventListeners() {
    const indexLink = document.querySelector('#index-link');
    const aboutLink = document.querySelector('#about-link');
    const contactLink = document.querySelector('#contact-link');
    const infoLink = document.querySelector('#info-link');
    const productLink = document.querySelector('#product-link');

    indexLink.addEventListener("click", function (e) {
        onNavigate('/');
        e.preventDefault();
    }, true);

    aboutLink.addEventListener("click", function (e) {
        onNavigate('/about');
        e.preventDefault();
    }, true);

    contactLink.addEventListener("click", function (e) {
        onNavigate('/contact');
        e.preventDefault();
    }, true);

    infoLink.addEventListener("click", function (e) {
        onNavigate('/info');
        e.preventDefault();
    }, true);

    productLink.addEventListener("click", function (e) {
        onNavigate('/product');
        e.preventDefault();
    }, true);

    // for (link of [imageLink, catalogLink]) {
    //     link.addEventListener("click", function (e) {
    //         onNavigate('/');
    //         e.preventDefault();
    //     }, true);
    // }
}

setEventListeners();