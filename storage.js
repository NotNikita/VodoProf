
const firebaseConfig = {
    apiKey: "AIzaSyDosIYB0O-MRqMxEp8bEyyzWCowY41afn0",
    authDomain: "pizzadb-66739.firebaseapp.com",
    databaseURL: "https://pizzadb-66739-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pizzadb-66739",
    storageBucket: "pizzadb-66739.appspot.com",
    messagingSenderId: "532660940502",
    appId: "1:532660940502:web:13706d4e164037f3222377"
};

class Storage {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        this.database = firebase.database();
    }

    async getCatalog() {
        return (await this.database.ref('Vodoprof/').once('value')).val();
    }

    async getCategory(category) {
        return (await this.database.ref('Vodoprof/' + category).once('value')).val();
    }

    async getCategoryClass(category, categType) {
        let typesList = (await this.database.ref('Vodoprof/' + category + '/types').once('value')).val();
        for (var i = 0; i < typesList.length; i++) {
            if (typesList[i].route === categType)
                // категория внутри класса найдена и мы возвращаем ее данные
                return typesList[i]
            else
                return null
        }
    }
}

let appStorage = new Storage();