const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
}
const vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];


vetorFilter = vetor.filter((item) => {
    return item > 15;
});

console.log(vetorFilter);

obj.filter = (callback) => {
    const itens = Object.entries(obj);
    let new_obj = {};

    for (let index = 0; index < itens.length; index++) {
        if (typeof itens[index][1] !== "function") {
            if (callback(itens[index], index, itens)) {
                new_obj = { ...new_obj, [itens[index][0]]: itens[index][1] };
            }
        }
    }
    return new_obj;
}


objFilter = obj.filter((item) => {
    return item[1] > 15;
});

console.log(objFilter);