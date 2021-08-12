const ICMS = 18;
const IPI = 4;
const PIS = 1.86;
const COFINS = 8.54;
const unidade = 4.50;
var quantidade = document.getElementById('segundoValor')
function formatar(numero){
    return numero.toFixed(2)
}
function somar() {
  let valorInput = parseInt(quantidade.value)
  let valorTotalEnergeticos =  valorInput * unidade;

      let porcentagemIcms = valorTotalEnergeticos * ICMS / 100
      let porcentagemIpi = valorTotalEnergeticos * IPI / 100
      let porcentagemPis = valorTotalEnergeticos * PIS / 100
      let porcentagemCofins = valorTotalEnergeticos * COFINS / 100
      document.getElementById("ICMS").value = porcentagemIcms
      document.getElementById("IPI").value = porcentagemIpi
      document.getElementById("PIS").value = formatar(porcentagemPis)
      document.getElementById("COFINS").value = formatar(porcentagemCofins)
      let valorTotal = porcentagemIcms + porcentagemIpi + porcentagemPis + porcentagemCofins
      document.getElementById("tImpostos").value = formatar(valorTotal)
      document.getElementById("tMercadorias").value = formatar(valorTotalEnergeticos)
      let valorGeral = valorTotal + valorTotalEnergeticos
      document.getElementById("tGeral").value = formatar(valorGeral)
}


