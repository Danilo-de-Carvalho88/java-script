function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var formSex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(formSex[0].checked) {
            genero = 'Homem';
            if(idade >= 0 && idade < 6){
                //Bebê
                img.setAttribute('src', 'src/imagens/homem-bebe.png');
            } else if(idade < 13){
                //Criança
                img.setAttribute('src', 'src/imagens/homem-child.png');
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'src/imagens/homem-jovem.png');
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'src/imagens/homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'src/imagens/homem-idoso.png')
            }
        } else if(formSex[1].checked) {
            genero = 'Mulher';
            if(idade >= 0 && idade < 6){
                //Bebê
                img.setAttribute('src', 'src/imagens/mulher-bebe.png');
            } else if(idade < 13){
                //Criança
                img.setAttribute('src', 'src/imagens/mulher-child.png');
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'src/imagens/mulher-jovem.png');
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'src/imagens/mulher-adulta.png');
            } else {
                //Idoso
                img.setAttribute('src', 'src/imagens/mulher-idosa.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}