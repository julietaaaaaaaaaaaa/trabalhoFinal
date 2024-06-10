//definindo atribultos
class contaBancaria{
constructor(numero, titular, saldo, historicoTransações){
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
    this.historicoTransações = ["Depósito: + valor",]
}
//apresentando uma conta bancaria atraves dos this com o historico vazio
construtor(numero,titular, saldoInicial, historicoTransações){
this.numero = numero
this.titular = titular
this.saldo = saldoInicial
this.historicoTransações = historicoTransações
//ex: numero = 4 titular= "Joao" saldo = 15 historico de transaçoes = historico vazio
}
//somando saldo  com valor dado no console dessa funçao
depositar(valor){
this.saldo += valor
//ex: saldo é 10 + valor é 10 (vai ser igual a 20)

}// se meu saldo for maior que meu valor, tenho saldo suficiente para sacar qualquer valor
//caso nao, aparecera a mensagem do else
sacar(valor){
if (this.saldo >= valor ){
this.saldo -= valor
}else {
    console.log("Saldo insuficiente")
}
}
//ex:saldo é zero entao "Saldo insuficiente"
//ex: Saldo é 100 e quero sacar 20, entao é possivel (valor vai subtrair do saldo)

//meu saldo atual foi dado no parametro la embaixo, entao  podemos chamar atraves do this
consultarSaldo(saldoAtual){
    this.saldo = saldoAtual
}//ex: se meu saldoAtual for 15, aparecera 15

//
transferir(valor, conta){
//(desisti :/)
}
//imprimindo historico do array atraves do console
imprimirExtrato(){
 console.log(this.historicoTransações)
}//ex:no meu array tem o historico ['Depósito: - valor', 'Depósito:+valor', etc....]
//vai aparecer o array no terminal
}

let conta = new contaBancaria (1,"Julia", 0)


//conta.construtor(1,"Julia Lene", 0);
//console.log(conta)
//conta.depositar(10);
//console.log(conta)
//conta.sacar(5);
//console.log(conta)
//conta.consultarSaldo(20);
//console.log(conta)
//conta.transferir();
//console.log(conta)
conta.imprimirExtrato();
console.log(conta)