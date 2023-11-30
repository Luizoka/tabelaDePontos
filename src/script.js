var listaJogadores = [];
var elementoTabela = document.getElementById('tabelaJogadores');
var permiteCriarJogador = true;

function adicionarVitoria(index) {
  listaJogadores[index].vitoria++;
  listaJogadores[index].pontos = listaJogadores[index].pontos + 3;
  exibirTela();
  bloquearJogador();
};

function adicionarEmpate(index) {
  listaJogadores[index].empate++;
  listaJogadores[index].pontos = listaJogadores[index].pontos + 1;
  exibirTela();
  bloquearJogador();
};

function adicionarDerrota(index) {
  listaJogadores[index].derrota++;
  exibirTela();
  bloquearJogador();
};

function exibirTela() {
  elementoTabela.innerHTML = "";
  listaJogadores.forEach((jogador, index) => {
    console.log(jogador);
    elementoTabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
          </tr>
    `;
  });
}

function bloquearJogador() {
  permiteCriarJogador = false;
}

function desbloqueiaJogador() {
  permiteCriarJogador = true;
}

function criarJogador() {
  if (permiteCriarJogador) {
    var nomeNovoJogador = document.getElementById("campoNomeJogador").value;
    if (nomeNovoJogador != '') {
      listaJogadores.push({
        nome: nomeNovoJogador,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
      });
      document.getElementById("campoNomeJogador").value = "";
      exibirTela();
    }
  } else {
    alert("Não dá de adicionar um novo jogador depois da partida já ter começado!");
    document.getElementById("campoNomeJogador").value = "";
  }
}

function novoJogo() {
  listaJogadores = [];
  exibirTela();
  desbloqueiaJogador();
}


