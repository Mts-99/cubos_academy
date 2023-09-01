const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function(valor) { 
        this.saldo += valor;
        this.historicos[this.historicos.length] = {
            tipo: 'Deposito',
            valor: valor
        }  
        console.log(`Deposito de R$${valor / 100} realizado para o cliente: ${this.nome}`); 
    }, 
    sacar: function (valor) {
        if(valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`)
            return;
        } 
        this.saldo -= valor;
        this.historicos[this.historicos.length] =   {
            tipo: 'saldo',
            valor: valor
        }
        console.log(`Saque de R$${valor / 100} realizado para o cliente: ${this.nome}`); 

    },
    extrato: function() {
        
    }
}
contaBancaria.depositar(300_00);
contaBancaria.sacar(200_00);