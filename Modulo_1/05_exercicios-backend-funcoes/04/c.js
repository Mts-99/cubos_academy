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
    }
}
contaBancaria.depositar(300_00);