
class IndexedDBModel {

    getStorage() {
        return this.storage || self.constructor.name.toLowerCase()
    }

    put = async (data) => {
        return await window.db.put(this.getStorage(), data)
    }

    get = async (id) => {
        return await window.db.get(this.getStorage(), id)
    }

    getAll = async () => {
        const store = window.db.transaction(this.getStorage()).objectStore(this.getStorage())
        return await store.getAll()
    }


}

export default IndexedDBModel
