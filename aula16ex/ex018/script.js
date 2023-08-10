function adicionar() {
    var number = document.getElementById('textn');
    var seletorScree = document.getElementById('selnum');

    if(number.value == '' || number.value < 1 || number.value > 100){
        alert('Valor não é permitido! Tentar novamente!');
    } else {
        var num = Number(number.value);
        
    }
}