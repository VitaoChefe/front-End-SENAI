// Elementos HTML
const $list = document.getElementById('list');
const $error = document.getElementById('error');
const $spinner = document.getElementById('spinner');

const API = 'https://dummyjson.com/products'; // API pública de testes

// Mostrar ou ocultar o spinner de carregamento
function showSpinner(show) {
    if (show) {
        $spinner.style.display = 'block';
        $spinner.innerHTML = '<span>Carregando produtos<span class="dots"></span></span>';
    } else {
        $spinner.style.display = 'none';
    }
}

// Mostrar mensagens de erro
function showError(msg) {
    if (msg) {
        $error.textContent = msg;
        $error.style.display = 'block';
    } else {
        $error.textContent = '';
        $error.style.display = 'none';
    }
}

// Função para converter nota em estrelas
function ratingToStars(rating) {
    const maxStars = 5;
    const filledStars = Math.floor(rating); // estrelas preenchidas
    const halfStar = (rating - filledStars) >= 0.5 ? true : false;
    const emptyStars = maxStars - filledStars - (halfStar ? 1 : 0);

    let stars = '★'.repeat(filledStars);
    if (halfStar) stars += '☆';  // pode substituir por um símbolo de meia estrela se quiser
    stars += '☆'.repeat(emptyStars);

    return stars;
}

// Função para exibir os produtos na página
function renderPosts(posts) {
    $list.innerHTML = posts.products.map(produto => `
        <div class="card">
            <img src="${produto.thumbnail}" alt="${produto.title}" class="product-img" />
            <div class="product-info">
                <h2>${produto.title}</h2>
                <p><strong>Categoria:</strong> ${produto.category}</p>
                <p><strong>Preço:</strong> R$ ${produto.price}</p>
                <p><strong>Avaliação:</strong> ${ratingToStars(produto.rating)} (${produto.rating.toFixed(1)})</p>
                <p><strong>Estoque:</strong> ${produto.stock}</p>
            </div>
        </div>
    `).join('');
}

// Função assíncrona para buscar os produtos da API
async function getProducts() {
    showError('');
    showSpinner(true);
    try {
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error(`Erro HTTP ${response.status}`);
        }

        const data = await response.json();
        renderPosts(data);

    } catch (err) {
        showError(err.message || 'Falha ao buscar dados');
    } finally {
        showSpinner(false);
    }
}

// Iniciar ao carregar a página
document.addEventListener('DOMContentLoaded', getProducts);
