🎁 Amigo Secreto
Este projeto é um jogo simples de Amigo Secreto, desenvolvido utilizando HTML, CSS e JavaScript. Ele permite adicionar nomes de participantes, sortear aleatoriamente um amigo secreto e, como desafio extra, adicionei um botão de recomeçar o jogo.

📂 Estrutura do Projeto
📁 amigo-secreto
│── index.html   # Estrutura da página
│── style.css    # Estilos e layout
│── app.js       # Lógica do jogo
│── assets/      # Imagens e ícones
└── README.md    # Documentação do projeto

<<>>Funcionalidades

🖥️ HTML (index.html)
  Criado uma estrutura semântica com um título, campo de entrada para os nomes, botões para adicionar e sortear amigos, e uma área para exibir os resultados.
  Implementado o botão "Recomeçar o Jogo", inicialmente desabilitado, para limpar a lista de participantes e permitir um novo jogo.

🎨 CSS (style.css)
  Ajustado a aparência dos botões com efeitos de hover e um estado desabilitado para o botão "Recomeçar".
  Criado uma tipografia personalizada e organizado os elementos para melhorar a usabilidade.

⚡ JavaScript (app.js)
Criado um array para armazenar os nomes dos participantes.
Desenvolvido funções para:
  Adicionar amigos à lista.
  Sortear um amigo secreto aleatoriamente.
  Atualizar a interface conforme os nomes são inseridos.
  Recomeçar o jogo, limpando a lista e desabilitando o botão até que novos nomes sejam adicionados.

O desafio extra foi a implementação do botão "Recomeçar", que reseta completamente o jogo.
