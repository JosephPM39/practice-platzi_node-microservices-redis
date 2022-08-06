const db = {
    'user': [
        { id: 1, name: 'Carlos' },
    ],
};

async function list(tabla) {
    return db[tabla];
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === parseInt(id))[0] || null;
}

async function upsert(tabla, data) {
    db[tabla].push(data);
    return await list(tabla);
}

async function remove(tabla, id) {
    const index = db[tabla].findIndex((item) => item.id === parseInt(id));
    db[tabla].splice(index, 1);
    return await list(tabla);
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};
