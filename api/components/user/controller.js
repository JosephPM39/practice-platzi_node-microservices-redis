const TABLA = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    async function list() {
        return await store.list(TABLA);
    }

    async function get(id) {
        return await store.get(TABLA, id);
    }

    async function remove(id) {
        return await store.remove(TABLA, id);
    }

    async function upsert(data) {
        const reg = await list();
        const finaldata = {
            id: reg.length, 
            name: data
        }
        console.log(finaldata)
        return await store.upsert(TABLA, finaldata);
    }

    return {
        list,
        get,
        remove,
        upsert
    };
};
