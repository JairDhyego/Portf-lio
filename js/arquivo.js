const hamburguer = document.querySelector(".hamburguer").addEventListener("click", () => document.querySelector(".container").classList.toggle("show-menu"));

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
  const prazo = document.querySelector("#prazo").value
  document.querySelector("label[for=prazo]").textContent = `prazo: ${prazo} semanas`
  atualizarPreco()
})

function atualizarPreco() {
  const qntd = document.querySelector("#qtde").value
  const temJS = document.querySelector("#js").checked
  const incluiLayout = document.querySelector("#layout-sim").checked
  const prazo = document.querySelector("#prazo").value


  let preco = qntd * 100;
  if (temJS) preco *= 1.1
  if (incluiLayout) preco += 300
  let taxaUrgencia = 1 - prazo * 0.1;
  preco *= 1 + taxaUrgencia
  
  
  document.querySelector("#precofinal").textContent = `R$ ${preco.toFixed(2)}`
}