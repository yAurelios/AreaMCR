function loadHeader() {
    const headerHTML = `
    <header>
        <button class="hamburger" aria-label="Toggle menu">☰</button>

        <figure class="logo">
            <img root="../../../root/img/logo/logoAreaMCR.png" alt="areaMCRlogo"/>
        </figure>
        <nav class="navBox">
            <ul>
                <li><a href="${location.pathname === '../../../../AreaMCR/root/html/inicio.html' ? '#' : '../../../../../AreaMCR/root/html/inicio.html'}">Página Inicial</a></li>
                <!-- <li><a href="${location.pathname === '../../../../AreaMCR/root/html/contatos.html' ? '#' : '../../../AreaMCR/root/html/contatos.html'}">Contate-nos</a></li> --!>
                <li><a href="${location.pathname === '../../../../AreaMCR/root/html/eventos.html' ? '#' : '../../../../../AreaMCR/root/html/eventos.html'}">Eventos</a></li>
                <li><a href="${location.pathname === '../../../../AreaMCR/root/html/certificados.html' ? '#' : '../../../../../AreaMCR/root/html/certificados.html'}">Certificados</a></li>
                <li><a href="${location.pathname === '../../../../AreaMCR/root/html/revista.html' ? '#' : '../../../../../AreaMCR/root/html/revista.html'}">Revista</a></li>
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
document.addEventListener("DOMContentLoaded", loadHeader);
