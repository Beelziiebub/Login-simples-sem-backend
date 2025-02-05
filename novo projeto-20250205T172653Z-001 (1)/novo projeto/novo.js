// CÓDIGO PARA ARMAZENAR OS USUÁRIOS NO LOCALSTORAGE PARA SIMPLIFICAR

function saveUserData(email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
}

// EXIBIR LOGIN

function getUserData() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// FUNÇÃO PARA EXIBIR O LOGIN

function showLogin() {
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('resetContainer').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.getElementById("message").style.display = "block";
}

// EXIBIR TELA DE CADASTRO

function showRegister() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('resetContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'block';
    document.getElementById("registerMessage").textContent = "";
}

// EXIBIR RESETAR SENHA

function showReset() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('resetContainer').style.display = 'block';
    document.getElementById("resetMessage").textContent = "";
}

// FAZER LOGIN

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("loginPassword").value;

    const users = getUserData();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        document.getElementById("message").textContent = "Seja Bem Vindo!";
        document.getElementById("message").style.color = "green";

        // REDIRECIONAR PARA UMA PÁGINA ALEATÓRIA

        window.location.href = "Pagina.html";
    } else {
        document.getElementById("message").textContent = "Erro de autenticação, tente novamente.";
        document.getElementById("message").style.color = "red";
    }
}

// CADASTRAR USUÁRIO

function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const users = getUserData();
    const userExists = users.some(u => u.email === email);

    if (userExists) {
        document.getElementById("registerMessage").textContent = "Email já cadastrado, tente novamente.";
        document.getElementById("registerMessage").style.color = "red";
    } else {
        saveUserData(email, password);
        document.getElementById("registerMessage").textContent = "Cadastro realizado com sucesso!";
        document.getElementById("registerMessage").style.color = "green";
    }
}

// REDEFINIR SENHA

function resetPassword() {
    const email = document.getElementById("resetEmail").value;

    const users = getUserData();
    const user = users.find(u => u.email === email);

    if (user) {
        // ENVIAR UM EMAIL PARA REDEFINIÇÃO DE SENHA
        document.getElementById("resetMessage").textContent = "Verifique seu email para redefinir a senha.";
        document.getElementById("resetMessage").style.color = "green";
    } else {
        document.getElementById("resetMessage").textContent = "Email não encontrado.";
        document.getElementById("resetMessage").style.color = "red";
    }
}

// FAZER LOGIN

showLogin();
