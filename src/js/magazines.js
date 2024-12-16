const magazines = [
    {
        name: "Revista AREA - MCR 2024",
        description: "",
        date: "",
        link: "../../src/html/revista/2024.html"
    },
    {
        name: "Revista AREA - MCR 2023",
        description: "",
        date: "",
        link: "../../src/html/revista/2023.html"
    },
    // Adicione mais revistas aqui conforme necessário
];

function loadMagazines() {
    const magazinesContainer = document.querySelector('.contentMainMagazines');
    const listMagazinesNav = document.querySelector('.listMagazines ul');

    // Limpar o conteúdo atual antes de adicionar novas revistas
    magazinesContainer.innerHTML = '';
    listMagazinesNav.innerHTML = '';

    magazines.forEach(magazine => {
        // Adicionar ao conteúdo principal
        magazinesContainer.innerHTML += `
            <section class="magazine">
                <h1 class="magazineTitle"><a href="${magazine.link}">${magazine.name}</a></h1>
                <p class="magazineDate">${magazine.date}</p>
                <p class="magazineDescription">${magazine.description}</p>
            </section>
        `;
        
        // Adicionar ao menu de navegação
        listMagazinesNav.innerHTML += `
            <li><a href="${magazine.link}">${magazine.name}</a></li>
        `;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const loadMagazinesDiv = document.getElementById('loadMagazines');
    if (loadMagazinesDiv) {
        // Chamar loadMagazines para inicializar o conteúdo
        loadMagazines();
    }
});