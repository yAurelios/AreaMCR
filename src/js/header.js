function loadHeader() {
    const headerHTML = `
    <header>
        <button class="hamburger" aria-label="Toggle menu">☰</button>

        <figure class="logo">
            <img src="../../../src/img/logo/logoAreaMCR.png" alt="areaMCRlogo"/>
        </figure>
        <nav class="navBox">
            <ul>
                <li><a href="${location.pathname === '../../../../AreaMCR/src/html/inicio.html' ? '#' : '../../../../../AreaMCR/src/html/inicio.html'}">Página Inicial</a></li>
                <!-- <li><a href="${location.pathname === '../../../../AreaMCR/src/html/contatos.html' ? '#' : '../../../AreaMCR/src/html/contatos.html'}">Contate-nos</a></li> --!>
                <li><a href="${location.pathname === '../../../../AreaMCR/src/html/eventos.html' ? '#' : '../../../../../AreaMCR/src/html/eventos.html'}">Eventos</a></li>
                <li><a href="${location.pathname === '../../../../AreaMCR/src/html/certificados.html' ? '#' : '../../../../../AreaMCR/src/html/certificados.html'}">Certificados</a></li>
                <li><a href="${location.pathname === '../../../../AreaMCR/src/html/revista.html' ? '#' : '../../../../../AreaMCR/src/html/revista.html'}">Revista</a></li>
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
