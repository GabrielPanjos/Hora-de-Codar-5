var saldo = 100.5; //Float
var usuario;

function user() {
    usuario = prompt("Qual seu nome?")
    if (!isNaN(usuario) || usuario === "") {
        alert("Nome inválido")
        user()
    } else {
        alert("Olá " + usuario + " é um prazer ter você por aqui!")
        inicio()
    }
}

user();

function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair'));

    switch (escolha) {
        case 1:
            inserir_senha();
            ver_saldo();
            break
        case 2:
            inserir_senha();
            ver_extrato();
            break
        case 3:
            inserir_senha();
            fazer_saque();
            break
        case 4:
            inserir_senha();
            fazer_deposito();
            break
        case 5:
            inserir_senha();
            fazer_transferencia();
            break
        case 6:
            sair();
            break
        default:
            erro();
            break
    }
}

function inserir_senha() {
    var senha = parseInt(prompt("Digite sua senha"))
    if (isNaN(senha) || senha === "") {
        alert('Por favor, informe um número:');
        inserir_senha();
    } else if (senha === 3589) {

    } else {
        alert("Senha errada, tente novamente")
        inserir_senha();
    }
}

function ver_saldo() {
    alert('Seu saldo atual é: ' + saldo);
    inicio();
}

function fazer_deposito() {

    var deposito = parseFloat(prompt('Qual o valor para depósito?'));

    // Not a Number
    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe um número:');
        fazer_deposito(); // recursão
    } else if (deposito <= 0) {
        alert("Operação não autorizada")
        fazer_deposito()
    } else {
        saldo += deposito;
        // saldo = saldo + deposito;
        ver_saldo();
    }
}

function fazer_saque() {
    var saque = parseFloat(prompt('Qual o valor para saque?'));
    if (isNaN(saque) || saque === '') {
        alert('Por favor, informe um número:');
        fazer_saque();
    } else if (saldo - saque < 0 || saque <= 0) {
        alert("Operação não autorizada")
        fazer_saque();
    } else {
        saldo -= saque;

        ver_saldo();
    }

}

function fazer_transferencia() {
    var conta_banco = parseInt(prompt("Digite o número da conta na qual deseja transferir dinheiro"))
    if (isNaN(conta_banco) || conta_banco === '') {
        alert('Por favor, informe um número:');
        fazer_transferencia();
    } else {
        transferir_dinheiro();
    }
    function transferir_dinheiro() {
        var transferencia = parseFloat(prompt("Qual o valor da transferência?"))
        if (isNaN(transferencia) || transferencia === '') {
            alert('Por favor, informe um número:');
            transferir_dinheiro();
        } else if (transferencia > saldo || transferencia <= 0) {
            alert("Operação não autorizada")
            transferir_dinheiro();
        } else {
            saldo -= transferencia;

            ver_saldo();
        }

    }

}

function ver_extrato() {
    alert("Você depositou +R$100.5 \nVocê sacou -R$50")
    inicio();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(usuario + ", foi um prazer ter você por aqui!");
        window.close();
    } else {
        inicio();
    }
}

inicio();