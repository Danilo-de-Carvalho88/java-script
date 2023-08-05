function gerarTabuada() {
    var divisor = document.getElementById('textd');
    var tab = document.getElementById('seltab');

    if(divisor.value == '' || divisor.value < 0) {
        alert('Número invalido!');
    } else {
        var d = Number(divisor.value);
        tab.innerHTML = '';
        for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option');
            var q = d*c;
            item.text = `${d} x ${c} = ${q}`;
            tab.appendChild(item);
        }
    }
}