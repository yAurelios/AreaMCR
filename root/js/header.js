function loadHeader() {
    const headerHTML = `
    <header>
        <button class="hamburger" aria-label="Toggle menu">☰</button>

        <figure class="logo">
            <img src="../../../root/img/logo/logoAreaMCR.png" alt="areaMCRlogo"/>
        </figure>
        <nav class="navBox">
            <ul>
                <li><a href="${location.pathname === '../../../../root/html/inicio.html' ? '#' : '../../../../../root/html/inicio.html'}">Página Inicial</a></li>
                <!-- <li><a href="${location.pathname === '../../../../root/html/contatos.html' ? '#' : '../../../root/html/contatos.html'}">Contate-nos</a></li> --!>
                <li><a href="${location.pathname === '../../../../root/html/eventos.html' ? '#' : '../../../../../root/html/eventos.html'}">Eventos</a></li>
                <li><a href="${location.pathname === '../../../../root/html/certificados.html' ? '#' : '../../../../../root/html/certificados.html'}">Certificados</a></li>
                <li><a href="${location.pathname === '../../../../root/html/revista.html' ? '#' : '../../../../../root/html/revista.html'}">Revista</a></li>
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
