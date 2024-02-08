const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;"
      ],
      correta: 0 // A resposta correta é a opção 0 (var myVar;)
    },
    {
      pergunta: "Qual método JavaScript é usado para exibir algo em um alerta?",
      respostas: [
        "print()",
        "alert()",
        "console.log()"
      ],
      correta: 1 // A resposta correta é a opção 1 (alert())
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1 // A resposta correta é a opção 1 (===)
    },
    {
      pergunta: "Como você inicia um bloco de código em JavaScript?",
      respostas: [
        "parênteses ()",
        "colchetes []",
        "chaves {}"
      ],
      correta: 2 // A resposta correta é a opção 2 (chaves {})
    },
    {
      pergunta: "Qual função JavaScript é usada para remover espaços em branco do início e do final de uma string?",
      respostas: [
        "trim()",
        "removeWhitespace()",
        "deleteSpaces()"
      ],
      correta: 0 // A resposta correta é a opção 0 (trim())
    },
    {
      pergunta: "Qual é o operador de incremento em JavaScript?",
      respostas: [
        "++",
        "--",
        "**"
      ],
      correta: 0 // A resposta correta é a opção 0 (++)
    },
    {
      pergunta: "Qual método JavaScript é usado para adicionar um elemento a um array?",
      respostas: [
        "push()",
        "add()",
        "append()"
      ],
      correta: 0 // A resposta correta é a opção 0 (push())
    },
    {
      pergunta: "O que o método 'indexOf()' em JavaScript retorna se o elemento não for encontrado no array?",
      respostas: [
        "null",
        "undefined",
        "-1"
      ],
      correta: 2 // A resposta correta é a opção 2 (-1)
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "function",
        "method",
        "funct"
      ],
      correta: 0 // A resposta correta é a opção 0 (function)
    },
    {
      pergunta: "Qual método JavaScript é usado para converter uma string em um número?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()"
      ],
      correta: 0 // A resposta correta é a opção 0 (parseInt())
    }
  ];
  
  const quiz = document.getElementById('quiz')
  const template = document.querySelector('template')

  //quanto utilizo o set() ele entende e guarda apenas uma informação, sem ficar repetindo a informação
  const corretas = new Set() 

  const totalPerguntas = perguntas.length

  const mostrarTotal = document.querySelector('#acertos span') //dentro do acertos, to pegando o valor do span
  mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas


  //loop ou laço de repetição
  for (const item of perguntas){
    const quizItem = template.content.cloneNode(true) //clonando a estrutura template do html
    quizItem.querySelector('h3').textContent = item.pergunta //modificando os h3 do html

    //respostas
    for (let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true) //dentro do dl, estou procurando um dt
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta- ' + perguntas.indexOf(item)) //pegando os valores dos indices de cada pergunta do array. [0,1,2...9]
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        
        //verificando os eventos, interação contida na tela (click, seleção, botão, etc)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta //atribuindo uma comparação para saber se a resposta é verdadeira ou falta, ou seja, correta ou errada
            
            //primeiro ele deleta o item caso tenha, pra em seguida entrar na função e adicionar a escolha do usuário
            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas

        }

        quizItem.querySelector('dl').appendChild(dt) //adicionando um filho a estrutura
    }

    quizItem.querySelector ('dl dt').remove() //removendo a instrução "RESPOSTA A" das alternativas

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }