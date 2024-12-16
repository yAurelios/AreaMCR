const events = [
    {
        name: "Expo Rondon 2023",
        description: "Durante os dias 21 a 25 de julho de 2023 foram realizadas as comemorações referentes ao aniversário de 63 anos do município de Marechal Cândido Rondon. Mais uma vez, a AREA esteve presente com um estande, onde, além da divulgação dos trabalhos da associação, foram realizadas palestras, firmadas parcerias, divulgação do CREA-PR e da Mútua-PR.",
        date: "21 a 25 de julho de 2023",
        link: "../../root/html/evento-expo-rondon.html"
    },
    // Adicione mais eventos aqui conforme necessário
];

function loadEvents() {
    const eventsContainer = document.querySelector('.contentMainEvents');
    const listEventsNav = document.querySelector('.listEvents ul');

    // Limpar o conteúdo atual antes de adicionar novos eventos
    eventsContainer.innerHTML = '';
    listEventsNav.innerHTML = '';

    events.forEach(event => {
        // Adicionar ao conteúdo principal
        eventsContainer.innerHTML += `
            <section class="event">
                <h1 class="eventTitle"><a href="${event.link}">${event.name}</a></h1>
                <p class="eventDate">${event.date}</p>
                <p class="eventDescription">${event.description}</p>
                
            </section>
        `;
        
        // Adicionar ao menu de navegação
        listEventsNav.innerHTML += `
            <li><a href="${event.link}">${event.name}</a></li>
        `;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const loadEventsDiv = document.getElementById('loadEvents');
    if (loadEventsDiv) {
        // Chamar loadEvents para inicializar o conteúdo
        loadEvents();
    }
});