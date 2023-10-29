
const navToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-link" );

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// function toggleNav() {
//     // Obtener todos los elementos con la clase .nav-link
//     const navLinks = document.querySelectorAll(".nav-link");

//     // Iterar sobre los elementos y agregar/eliminar la clase .active
//     navLinks.forEach(navLink => {
//         navLink.classList.toggle("active");
//     });
// }
