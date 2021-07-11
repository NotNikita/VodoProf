// TODO: 1) в index.html 
// -подключить все view шаблоны
// +подключить storage
// -подключить в конце router.js

// 2) в storage:
// -конфиг
// +класс с async getCatalog
// -+класс с async getCategory
// +класс с async getCategoryClass


const catalogElem = document.querySelector('.catalog_items_list')
async function getCategories() {
    let categList = await appStorage.getCatalog();
    for (let category in categList) {
        //console.log('1-' + categList[category].types[1].name)

        let categWrapper = document.createElement("div");
        categWrapper.classList.add('category-wrapper');

        let categItem = document.createElement("div");
        categItem.classList.add('category-item');

        let categImgDiv = document.createElement("div");
        categImgDiv.classList.add('img');

        let categImgLink = document.createElement("a");
        categImgLink.setAttribute('href', '/product/' + categList[category].route);

        let img = document.createElement("img");
        img.classList.add('category-img');
        img.src = categList[category].image;
        // info block
        let categInfo = document.createElement("div");
        categInfo.classList.add('category-info');
        // info > name
        let categNameDiv = document.createElement("div");
        categNameDiv.classList.add('category-name');
        let categName = document.createElement("a");
        categName.setAttribute('href', '/product/' + categList[category].route);
        categName.innerHTML = categList[category].name;
        categName.classList.add('dark-link');
        categNameDiv.appendChild(categName);

        // info > classes
        let categClasses = document.createElement("ul");
        categClasses.classList.add('category-classes');
        let categTag = categList[category].types;
        for (var i = 0; i < categTag.length; i++) {
            let li = document.createElement("li");
            let classLink = document.createElement("a");
            classLink.setAttribute('href', '/product/' + categList[category].route + '/' + categTag[i].route);
            classLink.classList.add('category-class');
            classLink.innerHTML = categTag[i]['name'];
            li.appendChild(classLink);
            categClasses.appendChild(li);
        }

        //Appending children
        categInfo.appendChild(categNameDiv)
        categInfo.appendChild(categClasses)
        categImgLink.appendChild(img)
        categImgDiv.appendChild(categImgLink)
        categItem.appendChild(categImgDiv)
        categItem.appendChild(categInfo)
        categWrapper.appendChild(categItem)
        catalogElem.appendChild(categWrapper)
    }

    firebase.database().ref('Vodoprof/').on('value', snapshot => {
        // snapshot is value object of 'Vodoprof' key
        // childSnapshot is category
        snapshot.forEach(childSnapshot => {
            // let key = childSnapshot.key
            let data = childSnapshot.val()
            // console.log(data)
            // console.log(key + " has name " + data['name'])

            // let categWrapper = document.createElement("div");
            // categWrapper.classList.add('category-wrapper');

            // let categItem = document.createElement("div");
            // categItem.classList.add('category-item');

            // let categImgDiv = document.createElement("div");
            // categImgDiv.classList.add('img');

            // let categImgLink = document.createElement("a");
            // categImgLink.setAttribute('href', '/product/' + data['route']);

            // let img = document.createElement("img");
            // img.classList.add('category-img');
            // img.src = data['image'];
            // // info block
            // let categInfo = document.createElement("div");
            // categInfo.classList.add('category-info');
            // // info > name
            // let categNameDiv = document.createElement("div");
            // categNameDiv.classList.add('category-name');
            // let categName = document.createElement("a");
            // categName.setAttribute('href', '/product/' + data['route']);
            // categName.innerHTML = data['name'];
            // categName.classList.add('dark-link');
            // categNameDiv.appendChild(categName);

            // // info > classes
            // let categClasses = document.createElement("ul");
            // categClasses.classList.add('category-classes');
            // let categTag = data['types'];
            // for (var i = 0; i < categTag.length; i++) {
            //     let li = document.createElement("li");
            //     let classLink = document.createElement("a");
            //     classLink.setAttribute('href', '/product/' + data['route'] + '/' + categTag[i]['route']);
            //     classLink.classList.add('category-class');
            //     classLink.innerHTML = categTag[i]['name'];
            //     li.appendChild(classLink);
            //     categClasses.appendChild(li);
            // }

            // //Appending children
            // categInfo.appendChild(categNameDiv)
            // categInfo.appendChild(categClasses)
            // categImgLink.appendChild(img)
            // categImgDiv.appendChild(categImgLink)
            // categItem.appendChild(categImgDiv)
            // categItem.appendChild(categInfo)
            // categWrapper.appendChild(categItem)
            // catalog.appendChild(categWrapper)
        });
    })
}

async function getTypesFromCategory(name) {
    let category = await appStorage.getCategory(name);
    console.log(category)
}

async function getTypeFromCategory(category, type) {
    let categ = await appStorage.getCategoryClass(category, type);
    console.log(categ)
}


getCategories();
//getCategory()
//getTypesFromCategory('drenazh');
//getTypeFromCategory('drenazh', 'drenazh-kolodzi');