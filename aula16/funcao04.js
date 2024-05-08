function fatorial (n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c //fat vai receber fat * c
    }
    return fat
}

console.log(fatorial(5))