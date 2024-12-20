function loadHeader() {
    const headerHTML = `
    <header>
        <button class="hamburger" aria-label="Toggle menu">☰</button>

        <figure class="logo">
            <img src="../../../src/img/logo/logoAreaMCR.png" alt="areaMCRlogo"/>
        </figure>
        <nav class="navBox">
            <ul>
                <li><a href="/">Página Inicial</a></li>
                <!-- <li><a href="">Contate-nos</a></li> --!>
                <li><a href="/eventos">Eventos</a></li>
                <li><a href="/certificados">Certificados</a></li>
                <li><a href="/revista">Revista</a></li>
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