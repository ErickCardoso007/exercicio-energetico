const entradaDoSUl = input2;
const SuperZottis = input2;
const ICMS = 18;
const IPI = 4;
const PIS = 1.86;
const COFINS = 8.54;
const unidade = 4.50;
var input1 = document.getElementById('primeiroValor')
var input2 = document.getElementById('segundoValor')

function somar() {
  let valorInput = parseInt(input2.value)  
  let calculo =  valorInput * unidade;
    
      let porcentagemIcms = calculo * ICMS / 100
      let porcentagemIpi = calculo * IPI / 100
      let porcentagemPis = calculo * PIS / 100
      let porcentagemCofins = calculo * COFINS / 100
      let saidaIcms = document.getElementById("ICMS").value = porcentagemIcms
      let saidaIpi = document.getElementById("IPI").value = porcentagemIpi
      let saidaPis = document.getElementById("PIS").value = porcentagemPis
      let saidaCofins = document.getElementById("COFINS").value = parseInt(porcentagemCofins)
      let valorTotal = saidaIcms + saidaIpi + saidaPis + saidaCofins
      let valorTotalInput = document.getElementById("tImpostos").value = valorTotal
      let valorTotalMercadorias = document.getElementById("tMercadorias").value = calculo
      let valorGeral = valorTotal + valorTotalMercadorias
      let ultimoInput = document.getElementById("tGeral").value = valorGeral
}