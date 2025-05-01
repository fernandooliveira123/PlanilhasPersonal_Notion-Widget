// avaliacaofisica.js
const alunos = JSON.parse(localStorage.getItem("alunos")) || {};

const studentSelect = document.getElementById("studentSelect");
const btnAdicionar = document.getElementById("btnAdicionarAluno");
const btnExcluir = document.getElementById("btnExcluirAluno");
const novoAlunoContainer = document.getElementById("novoAlunoContainer");
const excluirAlunoContainer = document.getElementById("excluirAlunoContainer");

const edicaoContainer = document.getElementById("edicaoAvaliacaoContainer");
const evaluationForm = document.getElementById("evaluationForm");
const results = document.getElementById("results");
const evaluationList = document.getElementById("evaluationList");
const excluirEvalContainer = document.getElementById("excluirAvaliacaoContainerEval");

let alunoAtual = "";
let avaliacaoEditando = null;

function carregarAlunos() {
  studentSelect.innerHTML =
    `<option value="" disabled selected>Selecione ou adicione um aluno</option>`;
  Object.keys(alunos).forEach((nome) => {
    const option = document.createElement("option");
    option.value = nome;
    option.textContent = nome;
    studentSelect.appendChild(option);
  });
}

/* ─── Adicionar Novo Aluno ─────────────────────────────────────────────────── */
btnAdicionar.addEventListener("click", () => {
  excluirAlunoContainer.innerHTML = "";
  novoAlunoContainer.innerHTML = `
    <input id="inputNovoAluno" type="text" placeholder="Nome do novo aluno" />
    <button id="criarAluno">Criar</button>
    <button id="cancelarCriacao">Cancelar</button>
  `;

  document.getElementById("criarAluno").addEventListener("click", () => {
    const nome = document.getElementById("inputNovoAluno").value.trim();
    if (!nome) return;
    if (alunos[nome]) {
      // feedback em tela
      document.getElementById("inputNovoAluno").classList.add("input-error");
      return;
    }
    alunos[nome] = [];
    localStorage.setItem("alunos", JSON.stringify(alunos));
    carregarAlunos();
    novoAlunoContainer.innerHTML = "";
    studentSelect.value = nome;
    mostrarFormulario(nome);
  });

  document.getElementById("cancelarCriacao").addEventListener("click", () => {
    novoAlunoContainer.innerHTML = "";
  });
});

/* ─── Excluir Aluno ───────────────────────────────────────────────────────── */
btnExcluir.addEventListener("click", () => {
  novoAlunoContainer.innerHTML = "";
  excluirAlunoContainer.innerHTML = `
    <select id="selectExcluirAluno">
      <option value="" disabled selected>Selecione o aluno</option>
    </select>
    <div id="confirmExcluirCard"></div>
  `;
  const sel = document.getElementById("selectExcluirAluno");
  Object.keys(alunos).forEach((nome) => {
    const opt = document.createElement("option");
    opt.value = nome;
    opt.textContent = nome;
    sel.appendChild(opt);
  });

  sel.addEventListener("change", () => {
    const nome = sel.value;
    document.getElementById("confirmExcluirCard").innerHTML = `
      <div class="card">
        <p>Tem certeza que deseja excluir <strong>${nome}</strong>?</p>
        <button id="confirmSim">Sim</button>
        <button id="confirmNao">Não</button>
      </div>
    `;
    document.getElementById("confirmSim").addEventListener("click", () => {
      delete alunos[nome];
      localStorage.setItem("alunos", JSON.stringify(alunos));
      carregarAlunos();
      excluirAlunoContainer.innerHTML = "";
      evaluationForm.style.display = "none";
      results.style.display = "none";
      evaluationList.innerHTML = "";
      alunoAtual = "";
    });
    document.getElementById("confirmNao").addEventListener("click", () => {
      excluirAlunoContainer.innerHTML = "";
    });
  });
});

/* ─── Mostrar Formulário / Carregar Avaliações ────────────────────────────── */
function mostrarFormulario(nome) {
  alunoAtual = nome;
  edicaoContainer.innerHTML = "";
  excluirEvalContainer.innerHTML = "";
  evaluationForm.style.display = "block";
  results.style.display = "block";
  evaluationForm.reset();
  document.getElementById("name").value = nome;
  carregarAvaliacoes(nome);
}

function carregarAvaliacoes(nome) {
  evaluationList.innerHTML = "";
  alunos[nome].forEach((avaliacao, idx) => {
    const li = document.createElement("li");
    li.className = "evaluation-item";
    li.innerHTML = `
      <span>Avaliação ${idx + 1}: Peso: ${avaliacao.weight} kg, Estatura: ${avaliacao.height} cm, IMC: ${avaliacao.imc}</span>
      <div class="evaluation-actions">
        <button class="btn-edit" data-index="${idx}"><i class="fas fa-edit"></i></button>
        <button class="btn-delete" data-index="${idx}"><i class="fas fa-trash"></i></button>
      </div>
    `;
    evaluationList.appendChild(li);
  });
}

/* ─── Editar Avaliação ────────────────────────────────────────────────────── */
evaluationList.addEventListener("click", (e) => {
  const editBtn = e.target.closest(".btn-edit");
  if (editBtn) {
    const idx = +editBtn.dataset.index;
    const avaliacao = alunos[alunoAtual][idx];

    // preenche o formulário
    document.getElementById("weight").value = avaliacao.weight;
    document.getElementById("height").value = avaliacao.height;
    avaliacaoEditando = idx;

    // mostra modo edição
    edicaoContainer.innerHTML = `
      <div class="card">
        <p>Editando avaliação <strong>#${idx + 1}</strong></p>
        <button id="cancelarEdicao">Cancelar Edição</button>
      </div>
    `;
    document
      .getElementById("cancelarEdicao")
      .addEventListener("click", () => {
        avaliacaoEditando = null;
        edicaoContainer.innerHTML = "";
        evaluationForm.reset();
      });

    // garante que o usuário veja o form
    evaluationForm.scrollIntoView({ behavior: "smooth" });
  }
});

/* ─── Excluir Avaliação ───────────────────────────────────────────────────── */
evaluationList.addEventListener("click", (e) => {
  const delBtn = e.target.closest(".btn-delete");
  if (delBtn) {
    const idx = +delBtn.dataset.index;
    excluirEvalContainer.innerHTML = `
      <div class="card">
        <p>Confirma exclusão da avaliação <strong>#${idx + 1}</strong>?</p>
        <button id="confirmSimEval">Sim</button>
        <button id="confirmNaoEval">Não</button>
      </div>
    `;
    document
      .getElementById("confirmSimEval")
      .addEventListener("click", () => {
        alunos[alunoAtual].splice(idx, 1);
        localStorage.setItem("alunos", JSON.stringify(alunos));
        excluirEvalContainer.innerHTML = "";
        carregarAvaliacoes(alunoAtual);
      });
    document
      .getElementById("confirmNaoEval")
      .addEventListener("click", () => {
        excluirEvalContainer.innerHTML = "";
      });
  }
});

/* ─── Submissão do Formulário ─────────────────────────────────────────────── */
evaluationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const peso = parseFloat(document.getElementById("weight").value);
  const altura = parseFloat(document.getElementById("height").value) / 100;
  const imc = (peso / (altura * altura)).toFixed(2);
  const novaAvaliacao = {
    weight: peso,
    height: altura * 100,
    imc,
  };

  if (avaliacaoEditando !== null) {
    alunos[alunoAtual][avaliacaoEditando] = novaAvaliacao;
    avaliacaoEditando = null;
    edicaoContainer.innerHTML = "";
  } else {
    alunos[alunoAtual].push(novaAvaliacao);
  }

  localStorage.setItem("alunos", JSON.stringify(alunos));
  carregarAvaliacoes(alunoAtual);
  evaluationForm.reset();
});

/* ─── Seleção de Aluno ────────────────────────────────────────────────────── */
studentSelect.addEventListener("change", () => {
  const nome = studentSelect.value;
  if (nome) mostrarFormulario(nome);
});

/* ─── Inicialização ───────────────────────────────────────────────────────── */
carregarAlunos();
