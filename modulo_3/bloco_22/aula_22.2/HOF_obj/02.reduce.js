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

const vetorReduce = vetor.reduce((acc, valor, index, original) => {
    return acc + valor;
},0);

console.log(vetorReduce);

obj.reduce = (callback, initial) => {
    const items = Object.entries(obj);
    let acc;
    if(initial === null || initial === undefined) {
        acc = items.shift()[1];
    } else {
        acc = initial;
    }
    
    for(let i = 0; i < items.length; i++) {
        if(typeof items[i][1] !==  "function"){
            acc = callback(acc, items[i], i, items);
        }
    }
    return acc;
}

const objReduce = obj.reduce((acc, cur) => acc + cur[1], 0);
console.log(objReduce);
  

