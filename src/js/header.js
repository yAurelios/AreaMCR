function loadHeader() {
    const headerHTML = `
    <header>
        <button class="hamburger" aria-label="Toggle menu">☰</button>

        <figure class="logo">
            <img src="../../../src/img/logo/logoAreaMCR.png" alt="areaMCRlogo"/>
        </figure>
        <nav class="navBox">
            <ul>
                <li><a href="${location.pathname === '../../../src/html/inicio.html' ? '#' : '../../../src/html/inicio.html'}">Página Inicial</a></li>
                <!-- <li><a href="${location.pathname === '../../../src/html/contatos.html' ? '#' : '../../../src/html/contatos.html'}">Contate-nos</a></li> --!>
                <li><a href="${location.pathname === '../../../src/html/eventos.html' ? '#' : '../../../src/html/eventos.html'}">Eventos</a></li>
                <li><a href="${location.pathname === '../../../src/html/certificados.html' ? '#' : '../../../src/html/certificados.html'}">Certificados</a></li>
                <li><a href="${location.pathname === '../../../src/html/revista.html' ? '#' : '../../../src/html/revista.html'}">Revista</a></li>
            </ul>
        </nav>
    </header>
    `;

    document.getElementById('header').innerHTML = headerHTML;

    // Evento para o botão de hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navBox = document.querySelector('.navBox');

    hamburger.addEventListener('click', () => {
        navBox.classList.toggle('active');
    });
}

// Inicializa o cabeçalho ao carregar a página
document.addEventListener("DOMContentLoaded", loadHeader);
