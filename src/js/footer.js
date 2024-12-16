function loadFooter() {
    const footerHTML = `
    <footer>
        <article>
            <h2>Associação Regional dos Engenheiros e Arquitetos de Marechal Cândido Rondon - PR</h2>
            <p>R. Dom João VI, 1244 - Centro, Mal. Cândido Rondon - PR, 85960-000 - (45) 3254-3497 </p>
        </article>
    </footer>
    `;
    document.getElementById('footer').innerHTML = footerHTML;
}
document.addEventListener("DOMContentLoaded", loadFooter);