let chave = 'cebcde482eda57fa9a6714c12ba91885';

function colocarNaTela(dados) {
  console.log(dados); // Para depuração

  // Verifique se os dados foram retornados com sucesso
  if (dados) {
    document.querySelector('.cidade').textContent = 'Tempo em ' + dados.name;
    document.querySelector('.temp').textContent = Math.floor(dados.main.temp) + '°C';
    document.querySelector('.icone').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
  } else {
    console.error('Erro ao obter dados da API.');
  }
}

async function buscarCidade(cidade) {
  try {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric`);
    const dados = await resposta.json();
    colocarNaTela(dados);
  } catch (error) {
    console.error('Erro ao buscar cidade:', error);
  }
}

function cliqueiNoBotao() {
  const cidade = document.querySelector('.input-cidade').value;
  buscarCidade(cidade);
}

// Associar o evento de clique ao botão (ajuste o seletor conforme o seu HTML)
document.getElementById('botao-buscar').addEventListener('click', cliqueiNoBotao);

