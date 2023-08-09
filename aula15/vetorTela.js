let valores = [3, 7, 10, 12, 33, 45];

/* for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
} */

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}