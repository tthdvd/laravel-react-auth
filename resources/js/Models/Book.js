import IndexedDBModel from "./IndexedDBModel";

class Book extends IndexedDBModel {
    constructor() {
        super();
        this.storage = 'books'
    }
}

export default Book
