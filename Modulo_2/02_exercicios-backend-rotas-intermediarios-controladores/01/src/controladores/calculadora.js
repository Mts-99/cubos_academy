const soma = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) + Number(num2)}`);
    }
    return res.send('Números invalidos')

}
const subtrair = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) - Number(num2)}`);
    }
    return res.send('Números invalidos')

}
const multiplicar = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) * Number(num2)}`);
    }
    return res.send('Números invalidos')

}
const dividir = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) / Number(num2)}`);
    }
    return res.send('Números invalidos')

}

module.exports = {
    soma,
    subtrair,
    multiplicar,
    dividir
}