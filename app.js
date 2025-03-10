// Lógica para cambiar la clase de los enlaces a RRSS cuando hacemos click sobre ellos
document.querySelectorAll(".redSocial__item").forEach(item => {
    // Agregar la clase --hover cuando el usuario pasa el cursor
    item.addEventListener("mouseenter", function () {
        this.classList.add("redSocial__item--hover");
    });

    // Remover la clase --hover cuando el cursor sale
    item.addEventListener("mouseleave", function () {
        this.classList.remove("redSocial__item--hover");
    });

    // Agregar la clase --active cuando el usuario hace clic
    item.addEventListener("mousedown", function () {
        this.classList.add("redSocial__item--active");
    });

    // Remover la clase --active cuando el usuario suelta el clic
    item.addEventListener("mouseleave", function () {
        this.classList.remove("redSocial__item--active");
    });
});
