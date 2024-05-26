function calcularMedia(notasArray) {
    let soma = 0;
    for (let i = 0; i < notasArray.length; i++) {
        soma += notasArray[i];
    }
    return soma / notasArray.length;
}

function avaliarMedia(media) {
    if (media > 7) {
        document.getElementById('resultadoMedia').innerHTML += "Parabéns, você passou na média!<br>";
    } else {
        document.getElementById('resultadoMedia').innerHTML += "Infelizmente, você está de recuperação.<br>";
    }
}

function calcularNotas() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) {
        alert("Por favor, insira todas as notas corretamente (0-10).");
        return;
    }

    let notas = [nota1, nota2, nota3, nota4];
    let mediaNotas = calcularMedia(notas);
    document.getElementById('resultadoMedia').innerHTML = "A média das notas é: " + mediaNotas.toFixed(2) + "<br>";
    avaliarMedia(mediaNotas);
}

function imprimirNomes() {
    let aluno1 = document.getElementById('aluno1').value;
    let aluno2 = document.getElementById('aluno2').value;
    let aluno3 = document.getElementById('aluno3').value;
    let aluno4 = document.getElementById('aluno4').value;

    let alunos = [aluno1, aluno2, aluno3, aluno4];

    let resultado = "";
    alunos.forEach(function(nome) {
        resultado += nome + "<br>";
    });
    document.getElementById('resultadoNomes').innerHTML = resultado;
}

function exibirTabuada(numero) {
    let resultado = "<table class='tabuada'><tr><th>Operação</th><th>Resultado</th></tr>";
    for (let i = 0; i <= 10; i++) {
        resultado += "<tr><td>" + numero + " x " + i + "</td><td>" + (numero * i) + "</td></tr>";
    }
    resultado += "</table>";
    document.getElementById('tabuada').innerHTML = resultado;
}

function toggleTabuada() {
    let tabuadaDiv = document.getElementById('tabuada');
    let tabuadaButton = document.getElementById('tabuadaButton');
    let numeroTabuada = parseInt(document.getElementById('numeroTabuada').value);

    if (isNaN(numeroTabuada) || numeroTabuada < 1) {
        alert("Por favor, insira um número válido para a tabuada.");
        return;
    }

    if (tabuadaDiv.style.display === "none") {
        exibirTabuada(numeroTabuada);
        tabuadaDiv.style.display = "block";
        tabuadaButton.textContent = "Fechar Tabuada";
    } else {
        tabuadaDiv.style.display = "none";
        tabuadaButton.textContent = "Mostrar Tabuada";
    }
}

function toggleMedia() {
    let resultadoMediaDiv = document.getElementById('resultadoMedia');
    let mediaButton = document.getElementById('mediaButton');

    if (resultadoMediaDiv.style.display === "none") {
        calcularNotas();
        resultadoMediaDiv.style.display = "block";
        mediaButton.textContent = "Fechar Média";
    } else {
        resultadoMediaDiv.style.display = "none";
        mediaButton.textContent = "Calcular Média";
    }
}

function toggleNomes() {
    let resultadoNomesDiv = document.getElementById('resultadoNomes');
    let nomesButton = document.getElementById('nomesButton');

    if (resultadoNomesDiv.style.display === "none") {
        imprimirNomes();
        resultadoNomesDiv.style.display = "block";
        nomesButton.textContent = "Fechar Nomes";
    } else {
        resultadoNomesDiv.style.display = "none";
        nomesButton.textContent = "Imprimir Nomes";
    }
}
