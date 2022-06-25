goit /*window.openRequest = indexedDB.open('store', 1)

window.openRequest.onupgradeneeded = function () {
    let db = window.openRequest.result
    if (!db.objectStoreNames.contains('books')) { // if there's no "books" store
        db.createObjectStore('books', {keyPath: 'id', autoIncrement: true}); // create it
    }
}

window.openRequest.onsuccess = function () {
    window.db = openRequest.result
}*/

import {openDB} from "idb";

async function doDatabaseStuff() {

    window.db = await openDB('store', 1, {
        upgrade(database, oldVersion, newVersion, transaction) {
            if (!database.objectStoreNames.contains('books')) { // if there's no "books" store
                database.createObjectStore('books', {keyPath: 'id', autoIncrement: true}); // create it
            }
        }
    })
}

doDatabaseStuff()
