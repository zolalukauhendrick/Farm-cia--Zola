// TESTE
console.log("JS ligado!");

// CADASTRO
function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (nome === "" || email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    alert("Cadastro feito!");
    window.location.href = "index.html";
}

// LOGIN
function login() {
    let email = document.getElementById("loginEmail").value;
    let senha = document.getElementById("loginSenha").value;

    let emailSalvo = localStorage.getItem("email");
    let senhaSalva = localStorage.getItem("senha");

    if (email === emailSalvo && senha === senhaSalva) {
        window.location.href = "home.html";
    } else {
        alert("Dados errados!");
    }
}

// HOME
if (window.location.pathname.includes("home.html")) {
    let nome = localStorage.getItem("nome");

    if (!nome) {
        window.location.href = "index.html";
    } else {
        document.getElementById("usuarioNome").innerText = nome;
    }
}

// LOGOUT
function logout() {
    window.location.href = "index.html";
}
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// COMPRAR
function comprar(nome, preco) {
    carrinho.push({ nome, preco });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();
}

// MOSTRAR
function mostrarCarrinho() {
    let lista = document.getElementById("carrinhoLista");
    let totalEl = document.getElementById("total");

    if (!lista) return;

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;

        let li = document.createElement("li");
        li.innerHTML = `
            ${item.nome} - ${item.preco} Kz 
            <button onclick="remover(${index})">❌</button>
        `;
        lista.appendChild(li);
    });

    totalEl.innerText = total;
}

// REMOVER
function remover(index) {
    carrinho.splice(index, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();
}

// CARREGAR

