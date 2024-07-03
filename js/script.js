// Variável para controlar o índice do item atual no carrossel
let currentIndex = 0;

// Seleciona todos os elementos com a classe '.carousel-item'
const items = document.querySelectorAll('.carousel-item');

// Obtém o número total de itens no carrossel
const itemCount = items.length;

// Seleciona o botão de navegação "anterior"
const prevButton = document.querySelector('.prev');

// Seleciona o botão de navegação "próximo"
const nextButton = document.querySelector('.next');

// Função para exibir o item específico com base no índice fornecido
function showItem(index) {
    // Itera sobre todos os itens do carrossel
    items.forEach((item, i) => {
        // Calcula a posição do item com base no índice atual e aplica o estilo transform para deslizar horizontalmente
        item.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

// Função para mostrar o próximo item no carrossel
function showNextItem() {
    // Atualiza o índice para o próximo item de forma circular usando o operador %
    currentIndex = (currentIndex + 1) % itemCount;
    // Chama a função para exibir o item atualizado
    showItem(currentIndex);
}

// Função para mostrar o item anterior no carrossel
function showPrevItem() {
    // Atualiza o índice para o item anterior de forma circular usando o operador %
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    // Chama a função para exibir o item atualizado
    showItem(currentIndex);
}

// Adiciona eventos de clique aos botões de navegação
prevButton.addEventListener('click', showPrevItem); // Botão "anterior"
nextButton.addEventListener('click', showNextItem); // Botão "próximo"

// Exibe o item inicial quando a página carrega
showItem(currentIndex);
