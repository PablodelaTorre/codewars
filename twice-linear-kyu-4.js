function dblLinear(n) {
    let x = 1;
    let y = [];
    let z = [];
    for (let i = 0; i < n; i++) {
        y.push(2 * x + 1);
        z.push(3 * x + 1);
        let minimo = Math.min(y[0], z[0]);
        if (minimo === y[0]) x = y.shift();
        if (minimo === z[0]) x = z.shift();
    }
    return x;
}