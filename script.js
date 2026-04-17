const projetos = [
  { nome: "Site Pessoal", descricao: "Projeto em HTML e CSS" },
  { nome: "Calculadora", descricao: "Feito com JavaScript" },
  { nome: "Portfólio", descricao: "Meu site profissional" }
];

const area = document.getElementById("projetos");

projetos.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
  `;

  area.appendChild(div);
});
